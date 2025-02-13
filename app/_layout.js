import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Screen from "../components/Screen";
import { AuthProvider } from "../context/AuthContext";

export default function Layout() {
  return (
    <AuthProvider>
      <SafeAreaView className="flex-1 bg-[#E51A13]">
        <Screen />
      </SafeAreaView>
    </AuthProvider>
  );
}
