import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {

  return (
    <SafeAreaView className="flex-1 bg-[#E51A13]">
      <View className="flex-1 bg-red-100">
        <StatusBar style="auto"/>
        <Slot />
      </View>
    </SafeAreaView>
  );
}
