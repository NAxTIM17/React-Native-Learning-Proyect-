import { Button, Text, View } from "react-native";
import { Link } from "expo-router";
import useCookies from "../hooks/useCookies";

export default function Home () {
    
    return(
        <View>
            <Text>Home</Text>
            <Link className="bg-red-500 p-2" href="/login">Go to Login</Link>
        </View>
    )
}