import { Stack, Tabs } from "expo-router";
//import { IconSymbol } from "@/components/ui/IconSymbol";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function RootLayout() {
  return (
    // <SafeAreaProvider>
    //   <Stack
    //     screenOptions={{
    //       headerShown: false,
    //     }}
    //   >
    //     <Stack.Screen name="index" />
    //     <Stack.Screen name="specifictowns" />
    //     <Stack.Screen name="forecast" />
    //     <Stack.Screen name="history" />
    //   </Stack>
    // </SafeAreaProvider>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={30} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
