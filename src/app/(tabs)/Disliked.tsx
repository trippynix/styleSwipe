import { View, StyleSheet, FlatList, Image, Dimensions } from "react-native";
import React from "react";
import Header from "@/src/components/Header";
import images from "../../assets/images.json";

type ImageItem = {
  image: string;
};

const { width, height } = Dimensions.get("screen");

const Disliked = () => {
  const renderImages = ({ item }: { item: ImageItem }) => {
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.image }}
          style={[
            styles.image,
            { height: height * 0.15, width: width * 0.308 },
          ]}
        />
      </View>
    );
  };

  return (
    <View style={styles.card}>
      <Header />
      <FlatList
        data={images as unknown as ImageItem[]} // Type assertion for JSON data
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderImages}
        contentContainerStyle={styles.list}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "94%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 24,
    paddingBottom: 0,
  },
  list: {
    paddingVertical: 0,
  },
  imageContainer: {
    marginBottom: 3,
    marginEnd: 3,
    alignItems: "center",
  },
  image: {
    borderRadius: 10,
  },
});

export default Disliked;
