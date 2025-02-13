import { useState, useEffect, useCallback } from "react";
import CookieManager from "@react-native-cookies/cookies";
import { useRouter } from "expo-router";

const useCookies = (domain) => {
  const [cookies, setCookies] = useState(null);
  const router = useRouter();

  console.log(">>>Cookies from Hook", cookies);
  // Función para obtener cookies
  const fetchCookies = useCallback(async () => {
    try {
      const result = await CookieManager.get(domain);
      setCookies(result);
    } catch (error) {
      console.error("Error obteniendo cookies:", error);
    }
  }, [domain]);

  // Obtener cookies cuando se monta el componente
  useEffect(() => {
    fetchCookies();
  }, [fetchCookies]);

  // Función para establecer una cookie
  const setCookie = async (name, value, options = {}) => {
    try {
      await CookieManager.set(domain, {
        name,
        value,
        path: "/",
        secure: true,
        httpOnly: false,
        ...options,
      });
      fetchCookies(); // Actualizar estado después de agregar cookie
    } catch (error) {
      console.error("Error estableciendo cookie:", error);
    }
  };

  // Función para eliminar una cookie
  const removeCookie = async () => {
    try {
      await CookieManager.clearAll().then((clearAll) => {
        console.log("CookieManager.ClearAll =>", clearAll);
      });
      setCookies(null);
    } catch (error) {
      console.error("Error eliminando cookie:", error);
    }
  };

  return { cookies, setCookie, removeCookie };
};

export default useCookies;
