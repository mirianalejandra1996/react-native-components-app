import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { createContext, PropsWithChildren, useContext, useState } from "react";
// import { useColorScheme } from "react-native";
import { useColorScheme } from "nativewind";

interface ThemeChangerContextType {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;
  toogleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

// Custom hook para acceder al ThemeChangerContext
export const useThemeChangerContext = () => {
  const themeChanger = useContext(ThemeChangerContext);
  return themeChanger;
};

// Provider
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  //   const colorScheme = useColorScheme();
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

  const currentTheme = isSystemThemeEnabled
    ? colorScheme
    : isDarkMode
      ? "dark"
      : "light";

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme: currentTheme ?? "light",
          isSystemTheme: isSystemThemeEnabled,
          toogleTheme: async () => {
            setIsDarkMode(!isDarkMode);
            setColorScheme(isDarkMode ? "light" : "dark");
            setIsSystemThemeEnabled(false);

            //TODO: Guardar en el storage
          },
          setSystemTheme: async () => {
            setIsSystemThemeEnabled(true);
            setColorScheme("system");
          },
        }}
      >
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};
