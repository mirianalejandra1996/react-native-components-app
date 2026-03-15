import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { Platform, Pressable, Switch, View } from "react-native";
import ThemedText from "./ThemedText";

interface Props {
  text?: string;
  value: boolean;
  className?: string;
  onValueChange: (value: boolean) => void;
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({ value, onValueChange, className, text }: Props) => {
  const swithActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable
      className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChange(!value)} // pero eso puede que no deje un lindo comportamiento en ios.
    >
      {text ? <ThemedText type="h2">{text}</ThemedText> : <View />}
      <Switch
        thumbColor={isAndroid ? swithActiveColor : ""}
        ios_backgroundColor={value ? "freen" : "red"}
        trackColor={{ false: "red", true: swithActiveColor }}
        // trackColor={{ false: "#767577", true: "#81b0ff" }}
        // thumbColor={value ? "#f5dd4b" : "#f4f3f4"}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
