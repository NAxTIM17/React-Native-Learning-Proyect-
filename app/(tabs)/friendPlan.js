import { Text, View, Button } from "react-native";
import {Link} from "expo-router";
import axios from "axios";
import useCookies from "../../hooks/useCookies";
import { useAuth } from "../../context/AuthContext";

export default function FriendPlan() {

  const { cookies, removeCookie } = useCookies(
    "https://paneltesting-api.yuhmak.com"
  );
  const {logout} = useAuth();
  
  return (
    <View className="p-2 flex-1 justify-center items-center gap-5">
      <Text>Cookie B1SESSION: {cookies?.B1SESSION?.value || "No guardada"}</Text>
      <View className="bg-red-500 p-2">
        <Button title="RemoveCookie" onPress={() => logout()} />
        <Link className="bg-red-500 p-2" href="/login">Go to login</Link>
      </View>
    </View>
  );
}
