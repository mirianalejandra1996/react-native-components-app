import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

import { allRoutes } from "@/constants/Routes";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const backgroundColor = useThemeColor({}, "background");

  // This is a way to rewrite the values
  // const backgroundColor = useThemeColor(
  //   { light: "red", dark: "indigo" },
  //   "background",
  // );

  return (
    <GestureHandlerRootView style={{ backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor,
            },
          }}
        >
          <Stack.Screen name="index" options={{ title: "" }} />
          {allRoutes.map(({ title, name }) => (
            <Stack.Screen key={name} name={name} options={{ title: title }} />
          ))}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
