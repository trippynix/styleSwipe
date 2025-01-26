import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import { SvgProps } from "react-native-svg";
import LocationIcon from "../../assets/icons/website_location_icon.svg";
import FilterModal from "@/src/components/FilterModal";
import Header from "@/src/components/Header";

const { width, height } = Dimensions.get("screen");

const SwipeCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Header />
        <ImageBackground
          source={require("../../assets/images/3f8cea88382f4a38aaaa8b735fce6b1e_w1440_q90.webp")}
          style={styles.image}
        >
          <View style={styles.rectangleName}>
            <Text
              style={{
                fontFamily: "KohSantepheap-Regular",
                color: "#fff",
                fontSize: width * 0.04,
              }}
            >
              Shimmer Cocktail Dress
            </Text>
          </View>
          <View style={styles.rectangleWeb}>
            <Text
              style={{
                fontFamily: "KohSantepheap-Regular",
                color: "#fff",
                fontSize: width * 0.025,
              }}
            >
              Urbanic
            </Text>
          </View>
          <View style={styles.locationIcon}>
            <LocationIcon height={height * 0.04} width={width * 0.06} />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "94%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 24,
    paddingBottom: 90,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleName: {
    backgroundColor: "#6A2718",
    paddingHorizontal: width * 0.035,
    paddingVertical: height * 0.008,
    alignSelf: "center",
    position: "absolute",
    bottom: height * 0.055,
    left: width * 0.024,
    borderRadius: 22,
  },
  rectangleWeb: {
    backgroundColor: "#6A2718",
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.007,
    alignSelf: "center",
    position: "absolute",
    bottom: height * 0.015,
    left: width * 0.08,
    borderRadius: 9,
  },
  locationIcon: {
    position: "absolute",
    bottom: height * 0.012,
    left: width * 0.018,
  },
});
export default SwipeCard;
