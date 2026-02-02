import {
    animationMenuRoutes,
    menuRoutes,
    uiMenuRoutes,
} from "@/constants/Routes";
import MenuItem from "@/presentation/menu/MenuItem";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { View } from "react-native";

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map(({ icon, name, title }, index) => (
        <MenuItem
          key={name}
          title={title}
          icon={icon}
          name={name}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}

      <View className="my-3" />

      {uiMenuRoutes.map(({ icon, name, title }, index) => (
        <MenuItem
          key={name}
          title={title}
          icon={icon}
          name={name}
          isFirst={index === 0}
          isLast={index === uiMenuRoutes.length - 1}
        />
      ))}

      <View className="my-3" />

      {menuRoutes.map(({ icon, name, title }, index) => (
        <MenuItem
          key={name}
          title={title}
          icon={icon}
          name={name}
          isFirst={index === 0}
          isLast={index === menuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
};

export default ComponentsApp;
