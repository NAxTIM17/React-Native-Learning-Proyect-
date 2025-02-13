import { useEffect } from "react";
import useCookies from "../hooks/useCookies";
import { useRouter } from "expo-router";
import { View, ActivityIndicator } from "react-native";

export default function AuthRedirect({ children }) {
  const router = useRouter();
  const { cookies } = useCookies("https://paneltesting-api.yuhmak.com");

  useEffect(() => {
    if (cookies?.B1SESSION?.value) {
      router.replace("/friendPlan"); // Redirige si hay sesión activa
    } else {
      router.replace("/login"); // Si no hay sesión, va al login
    }
  }, [cookies, router]); 

  return (
    <>
      {children}
    </>
  );
}
