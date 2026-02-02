import React from "react";
import { Text, TextProps } from "react-native";

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

// const ThemedText = ({ children, type = "normal" }: Props) => {
const ThemedText = ({ className, type, ...rest }: Props) => {
  return (
    <Text
      className={[
        "text-light-text dark:text-dark-text",
        type === "normal" ? "font-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "semi-bold" ? "font-bold" : undefined,
        type === "link" ? "font-normal underline" : undefined,
        className,
      ].join(" ")}
      {...rest}
    />
  );
};

export default ThemedText;
