import { Href, router } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import ThemedText from "../shared/ThemedText";

import { useThemeColor } from "@/hooks/use-theme-color";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;

  isFirst?: boolean;
  isLast?: boolean;
}

// <Link key={name} href={name.split("/")[0] as Href}>
//   {title}
// </Link>

const MenuItem = ({ title, icon, name, isFirst, isLast }: Props) => {
  const [routeName] = name.split("/");

  const primaryColor = useThemeColor({}, "primary");

  return (
    <Pressable
      onPress={() => router.push(routeName as Href)}
      className="bg-white dark:bg-black/15 px-5 py-2"
      style={{
        ...(isFirst && {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingTop: 10,
        }),
        ...(isLast && {
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          paddingBottom: 10,
        }),
      }}
    >
      <View className="flex-row items-center">
        <Ionicons name={icon} size={30} color={primaryColor} className="mr-5" />
        <ThemedText type="h2">{title}</ThemedText>
      </View>
    </Pressable>
  );
};

export default MenuItem;
