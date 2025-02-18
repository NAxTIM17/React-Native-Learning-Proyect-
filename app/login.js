import { Text, View, Image, Pressable, TextInput } from "react-native";
import { styled } from "nativewind";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Login() {
  const { login } = useAuth();
  const StyledPressable = styled(Pressable);

  const [userInfo, setUserInfo] = useState({
    UserName: "",
    Password: "",
  });

  const handleChange = (key, value) => {
    setUserInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <View className="bg-[#12192B] p-5 flex-1 justify-center items-center">
      <Image className="h-52 w-52" source={require("../assets/icon.png")} />
      <View className="gap-3">
        <TextInput id="UserName" className="bg-white w-80 h-10 rounded-md p-2 justify-center" placeholder="Usuario" onChangeText={(text) => handleChange('UserName', text)} />
        <TextInput id="Password" className="bg-white w-80 h-10 rounded-md p-2 justify-center" placeholder="Contraseña" onChangeText={(text) => handleChange('Password', text)} />
      </View>
      <StyledPressable className="bg-[#FEE916] p-5 w-80 rounded-md justify-center items-center active:bg-[#c9ba1c] mt-6" onPress={() =>
          login(userInfo)
        }>
          <Text className="text-[#12192B] text-xl font-semibold">Iniciar Sesion</Text>
        </StyledPressable>
    </View>
  );
}
