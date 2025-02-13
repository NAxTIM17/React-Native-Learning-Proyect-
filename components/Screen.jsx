import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../app/login";
import { useAuth } from "../context/AuthContext";

export default function Screen() {
  const { userToken } = useAuth();
  const Stack = createNativeStackNavigator();

  return (
    <View className="flex-1 bg-red-100">
      <StatusBar style="dark" />
      <Stack.Navigator>
        {userToken ? (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="slot"
            component={Slot}
          />
        ) : (
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="login"
            component={Login}
          />
        )}
      </Stack.Navigator>
    </View>
  );
}
