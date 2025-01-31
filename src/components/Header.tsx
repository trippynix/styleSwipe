import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  useColorScheme,
  View,
  SafeAreaView,
  Dimensions,
  Text,
  Pressable,
  BackHandler,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import FilterIcon from "../assets/icons/filter";
import { useFonts } from "expo-font";
import { Link } from "expo-router";
import FilterModal from "../components/FilterModal"; // Import the modal
import { BlurView } from "expo-blur";
import { ModalContext } from "../utils/ContextProvider/ModalState";

const { width, height } = Dimensions.get("screen");

export default function Header() {
  const headerColorScheme = useColorScheme();
  const headerIsDarkMode = headerColorScheme === "dark";
  const [fontsLoaded] = useFonts({
    ZenTokyo: require("../assets/fonts/ZenTokyoZoo-Regular.ttf"),
  });
  const { showModal, setShowModal } = useContext(ModalContext);

  useEffect(() => {
    const backAction = () => {
      if (showModal) {
        setShowModal(false); // Close modal on back press
        return true; // Prevent default back action
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [showModal]); // Ensure the effect runs when 'showModal' changes

  // Ensure fonts are loaded before rendering the actual UI
  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading Fonts...</Text>
        {/* Show loading text if fonts are not loaded */}
      </SafeAreaView>
    );
  }

  return (
    <>
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
        <Pressable
          onPress={() => setShowModal(!showModal)}
          style={styles.filters}
        >
          <FilterIcon
            height={height * 0.035}
            width={width * 0.35}
            fill={headerIsDarkMode ? "#FFFFFF" : "#000000"}
          />
        </Pressable>
      </SafeAreaView>
      {/* Modal */}
      <Modal
        transparent
        visible={showModal}
        animationType="slide"
        onRequestClose={() => setShowModal(!showModal)}
      >
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <BlurView style={styles.modalBackdrop}>
            <TouchableWithoutFeedback>
              <View
                style={[
                  styles.modalContent,
                  { backgroundColor: headerIsDarkMode ? "#000000" : "#ffffff" },
                ]}
              >
                <FilterModal />
              </View>
            </TouchableWithoutFeedback>
          </BlurView>
        </TouchableWithoutFeedback>
      </Modal>
    </>
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
  modalBackdrop: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.8f)",
  },
  modalContent: {
    width: "100%",
    height: "80%",
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
});
