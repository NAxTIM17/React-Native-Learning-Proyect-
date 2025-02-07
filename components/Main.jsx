import { useState } from "react";
import { View, Text, Button, Pressable, ActivityIndicator } from "react-native";
import { styled } from "nativewind";
import * as Location from "expo-location";

const Main = () => {
  const StyledPressable = styled(Pressable);
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = async () => {
    setLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      setTimeout(() => {
        setLoading(false);
      },3000)
    } catch (error) {
      setErrorMsg(error);
    }
    let { coords, timestamp } = await Location.getCurrentPositionAsync({});
    console.log(coords);
    setLocation(coords);
  };

  return (
    <View className="p-2 flex-1 justify-center items-center gap-5">
      <View className="bg-white p-5 rounded-md justify-center items-center">
        {loading ? (
          <ActivityIndicator color="#E51A13" />
        ) : (
          <View>
            <Text>Latitud: {location.latitude}</Text>
            <Text>Longitud: {location.longitude}</Text>
          </View>
        )}
        <StyledPressable
          className="bg-[#E51A13] p-2 rounded-md active:bg-[#8a221f] justify-center items-center mt-5"
          onPress={getCurrentLocation}
        >
          <Text className="text-white">Geolocalizacion</Text>
        </StyledPressable>
      </View>
    </View>
  );
};

export default Main;
