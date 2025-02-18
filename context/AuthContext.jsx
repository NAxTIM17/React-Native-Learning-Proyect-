import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { ActivityIndicator } from "react-native";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    await checkAuth();
    //another functions...
  };

  const checkAuth = async () => {
    try {
      const session = await SecureStore.getItemAsync("B1SESSION");
      if (session) {
        setUserToken({
          B1SESSION: session,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };

  const login = async (body) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://paneltesting-api.yuhmak.com/api/v1/logIn",
        body
      );
      if (response) {
        setLoading(false);
        setUserToken({
          B1SESSION: response.data.session["B1SESSION"],
        });
        await SecureStore.setItemAsync(
          "B1SESSION",
          response.data.session["B1SESSION"]
        );
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const logout = async () => {
    setUserToken(null);
    await SecureStore.deleteItemAsync("B1SESSION");
  };


  return (
    <AuthContext.Provider value={{ login, logout, userToken }}>
      {loading ? <ActivityIndicator size="large" /> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
