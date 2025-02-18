import { View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { Stack  } from "expo-router";

export default function Screen() {

  return (
    <Stack screenOptions={{
      headerShown : false
    }}>
        <Stack.Screen name="(tabs)" options={{
          headerShown : false
        }}/>
        <Stack.Screen name="settings" options={{
          headerShown : false
        }}/>
    </Stack>
  );
}
