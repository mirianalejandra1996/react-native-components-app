import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  className?: string;
}

const ThemedInput = ({ className, ...rest }: Props) => {
  return (
    <TextInput
      {...rest}
      className="py-4 px-2 text-black dark:text-white"
      placeholderTextColor="grey"
    />
  );
};

export default ThemedInput;
