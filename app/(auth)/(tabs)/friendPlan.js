import { Text, View, Button } from "react-native";
import { Link } from "expo-router";
import { useAuth } from "../../../context/AuthContext";

export default function FriendPlan() {
  const { logout, userToken } = useAuth();

  return (
    <View className="p-2 flex-1 justify-center items-center gap-5">
      <Text>
        Cookie B1SESSION: {userToken?.B1SESSION || "No guardada"}
      </Text>
      <View className="bg-red-500 p-2">
        <Button title="Logout" onPress={() => logout()} />
      </View>
    </View>
  );
}
