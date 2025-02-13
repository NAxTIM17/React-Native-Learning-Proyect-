import { Tabs, useRouter } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import {
  HomeIcon,
  BellIcon,
  FriendIcon,
  FlameIcon,
  Bars,
} from "../../components/Icons";

export default function LayoutTabs() {
  const StyledTabs = styled(Tabs);

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: true,
        headerStatusBarHeight: 10,
        headerStyle: {
          backgroundColor: "#E51A13",
        },
        headerTitle: (name) =>
          name.children === "Home" ? (
            <Text className="text-white text-2xl">Natania</Text>
          ) : (
            <Text className="text-white text-2xl">{name.children}</Text>
          ),

        headerTitleStyle: {
          color: "white",
        },
        headerLeft: () => <Bars className="ml-5" />,
        headerRight: ({ color }) => <BellIcon className="mr-5" />,
        tabBarStyle: {
          backgroundColor: "white",
          paddingBottom: 1,
          height: 80,
        },
        tabBarActiveTintColor: "#E51A13",
      }}
    >
      <Tabs.Screen
        name="friendPlan"
        options={{
          title: "Plan amigo",
          tabBarIcon: ({ color }) => <FriendIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "Noticias",
          tabBarIcon: ({ color }) => <FlameIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
