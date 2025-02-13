import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await SecureStore.getItemAsync("B1SESSION");
      if (session) {
        setUserToken({
          B1SESSION: session,
        });
      }
    };
    fetchSession();
  }, []);

  const login = async (body) => {
    try {
      const response = await axios.post(
        "https://paneltesting-api.yuhmak.com/api/v1/logIn",
        body
      );
      console.log(response.data.session);
      setUserToken({
        B1SESSION: response.data.session["B1SESSION"],
      });
      // save in secure store
      await SecureStore.setItemAsync(
        "B1SESSION",
        response.data.session["B1SESSION"]
      );
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    setUserToken(null);
    await SecureStore.deleteItemAsync("B1SESSION");
  };

  return (
    <AuthContext.Provider value={{ login, logout, userToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
