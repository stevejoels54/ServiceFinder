import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

type ThemedTouchableOpacityProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
};

export const ThemedTouchableOpacity: React.FC<ThemedTouchableOpacityProps> = ({
  style,
  lightColor,
  darkColor,
  children,
  ...props
}) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <TouchableOpacity style={[{ backgroundColor }, style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};
