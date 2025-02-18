import { Redirect, Slot, Stack } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import { SafeAreaView, StatusBar } from "react-native";

export default function AppLayout() {
  const { userToken } = useAuth();

  return !userToken ? (
    <Redirect href="/login" />
  ) : (
    <>
      <SafeAreaView className="flex-1 bg-red-500">
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="settings"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaView>
    </>
  );
}
