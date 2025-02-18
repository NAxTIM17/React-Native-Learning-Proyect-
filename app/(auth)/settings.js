import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Settings () {
    return(
        <View className="bg-[#E51A13] flex-1 justify-center items-center gap-2">
            <Text className="text-white">
                SETTINGS
            </Text>
            <Link className="bg-white p-2 rounded-md" href="/(tabs)/news">Volver</Link>
        </View>
    )
}