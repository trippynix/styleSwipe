import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  useColorScheme,
  View,
  SafeAreaView,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import React from "react";
import FilterIcon from "../assets/icons/filter.svg";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import Filter from "./Filter";

const { width, height } = Dimensions.get("screen");

export default function Header() {
  const headerColorScheme = useColorScheme();
  const headerIsDarkMode = headerColorScheme === "dark";
  const [fontsLoaded] = useFonts({
    ZenTokyo: require("../assets/fonts/ZenTokyoZoo-Regular.ttf"),
  });

  if (!fontsLoaded) {
    // Render null or a loading placeholder until the font is loaded
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logo}>
        <Text
          style={[
            styles.first,
            { color: headerIsDarkMode ? "#FFFFFF" : "#000000" },
          ]}
        >
          S
        </Text>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={[
              styles.second,
              { color: headerIsDarkMode ? "#FFFFFF" : "#000000" },
            ]}
          >
            tyle
          </Text>
          <Text
            style={[
              styles.second,
              { color: headerIsDarkMode ? "#FFFFFF" : "#000000" },
            ]}
          >
            wipe
          </Text>
        </View>
      </View>
      <Link style={styles.filters} href="../components/Filter" asChild>
        <Pressable>
          {({ pressed }) => (
            <View>
              <FilterIcon
                height={height * 0.035}
                width={width * 0.35}
                fill={headerIsDarkMode ? "#FFFFFF" : "#000000"}
                style={{ opacity: pressed ? 0.5 : 1 }}
              />
            </View>
          )}
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: "7%",
    marginStart: "3%",
  },
  logo: {
    flexDirection: "row",
    alignContent: "space-between",
    width: "80%",
  },
  filters: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: "2.5%",
  },
  first: {
    fontFamily: "ZenTokyo",
    fontSize: 45,
    marginStart: 5,
  },
  second: {
    fontFamily: "ZenTokyo",
    fontSize: 35,
    marginTop: -10,
    marginBottom: -17,
  },
});
