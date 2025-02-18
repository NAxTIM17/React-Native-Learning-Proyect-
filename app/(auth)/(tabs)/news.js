import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function News(){
    return(
        <View className="flex-1 justify-center items-center gap-2">
            <Text>
                Novedades
            </Text>
            <Link className="bg-red-500 p-2 justify-center items-center rounded-md text-white" href="/settings">
                Settings
            </Link>
        </View>
    )
}