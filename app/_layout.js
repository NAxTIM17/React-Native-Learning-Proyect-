import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "../context/AuthContext";
import { Slot } from "expo-router";

export default function RootLayout() {

  return (
    <AuthProvider>
        <Slot />
    </AuthProvider>
  );
}
