import React from "react";
import { Tabs } from "expo-router";
import {
  Dimensions,
  useColorScheme,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../../components/Header";
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
    <View
      style={{ flex: 1, backgroundColor: isDarkMode ? "#000000" : "#FFFFFF" }}
    >
      <Tabs
        screenOptions={({ route, navigation }) => ({
          tabBarStyle: [
            styles.tabBar,
            {
              backgroundColor: isDarkMode ? "#000000" : "#FFFFFF",
              borderTopColor: isDarkMode ? "#000000" : "#FFFFFF",
              borderTopWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
              shadowOffset: { height: 0, width: 0 },
              shadowRadius: 0,
              borderColor: "#FFFFFF",
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
            header: () => <Header />,
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
          name="Liked"
          options={{
            header: () => <Header />,
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
            header: () => <Header />,
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
        <Tabs.Screen
          name="Profile"
          options={{
            header: () => <Header />,
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
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFFFFF",
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
