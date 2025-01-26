import React from "react";
import { Dimensions } from "react-native";
import { NumberProp, SvgProps } from "react-native-svg";

interface TabBarIconProps {
  Icon: React.FC<SvgProps>;
  focused: boolean;
  isDarkMode: boolean;
}
const { width, height } = Dimensions.get("screen");
const TabBarIcon: React.FC<TabBarIconProps> = ({
  Icon,
  focused,
  isDarkMode,
}) => (
  <Icon
    fill={
      focused && isDarkMode
        ? "#FFFFFF"
        : focused && !isDarkMode
        ? "#000000"
        : "#777F89"
    }
    width={(width * 0.35) as NumberProp}
    height={(height * 0.035) as NumberProp}
  />
);

export default TabBarIcon;
