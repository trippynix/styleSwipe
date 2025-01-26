import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "@/src/components/Header";

const Liked = () => {
  return (
    <View style={styles.card}>
      <Header />
      <Text>Liked</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "94%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 24,
    paddingBottom: 90,
  },
});

export default Liked;
