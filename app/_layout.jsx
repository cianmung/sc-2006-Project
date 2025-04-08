import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="forecast"
        options={{
          title: "forecast",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weather-cloudy-clock"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "history",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="clock-rotate-left" size={20} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="specifictowns"
        options={{
          title: "towns",
          tabBarIcon: ({ color }) => (
            <Entypo name="location" size={20} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="history/[date]"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="town/[town]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
