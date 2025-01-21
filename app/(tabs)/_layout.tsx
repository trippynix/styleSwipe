import React from "react";
import { Tabs } from "expo-router";
import { Dimensions, useColorScheme, StyleSheet, Text } from "react-native";
import { Colors } from "@/constants/Colors";

import ProfileIcon from "../../assets/icons/Profile";
import LikedIcon from "../../assets/icons/Liked.svg";
import DislikedIcon from "../../assets/icons/Disliked.svg";
import { useFonts } from "expo-font";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { width, height } = Dimensions.get("screen");
  const isDarkMode = colorScheme === "dark";
  const [fontsLoaded] = useFonts({
    ZenTokyo: require("../../assets/fonts/ZenTokyoZoo-Regular.ttf"),
  });

  return (
    <Tabs
      screenOptions={({ route, navigation }) => ({
        tabBarActiveTintColor: isDarkMode
          ? Colors.dark.tint
          : Colors.light.tint,
        tabBarInactiveTintColor: isDarkMode ? "#CCCCCC" : "#777F89",
        tabBarStyle: [
          styles.tabBar,
          {
            backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
            borderTopColor: isDarkMode ? "#333333" : "#e0e0e0",
          },
        ],
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          color: isDarkMode ? "#FFFFFF" : "#777F89",
        },
        tabBarItemStyle: {
          borderBottomWidth: 1,
          borderBottomColor:
            navigation.isFocused() && isDarkMode
              ? "#FFFFFF"
              : navigation.isFocused() && !isDarkMode
              ? "#000000"
              : "transparent",
          marginBottom: 8,
        },
        tabBarIconStyle: styles.tabBarIcon,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "StyleSwipe",
          tabBarIcon: ({ focused }) => (
            <Text
              style={{
                fontFamily: "ZenTokyo",
                fontSize: 30,
                width: 125,
                height: 35,
                textAlign: "center",
                marginBottom: 5,
                color:
                  focused && isDarkMode
                    ? "#FFFFFF"
                    : focused && !isDarkMode
                    ? "#000000"
                    : "#777F89",
              }}
            >
              SS
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <ProfileIcon
              height={height * 0.035}
              width={width * 0.35}
              fill={
                focused && isDarkMode
                  ? "#FFFFFF"
                  : focused && !isDarkMode
                  ? "#000000"
                  : "#777F89"
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Liked"
        options={{
          title: "Liked",
          tabBarIcon: ({ focused }) => (
            <LikedIcon
              height={height * 0.035}
              width={width * 0.35}
              fill={
                focused && isDarkMode
                  ? "#FFFFFF"
                  : focused && !isDarkMode
                  ? "#000000"
                  : "#777F89"
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Disliked"
        options={{
          title: "Disliked",
          tabBarIcon: ({ focused }) => (
            <DislikedIcon
              height={height * 0.035}
              width={width * 0.35}
              fill={
                focused && isDarkMode
                  ? "#FFFFFF"
                  : focused && !isDarkMode
                  ? "#000000"
                  : "#777F89"
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    height: 70,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#777F89",
  },
  tabBarIcon: {
    marginTop: 5,
  },
});
