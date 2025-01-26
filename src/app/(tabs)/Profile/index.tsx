import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import Header from "@/src/components/Header";

const Profile = () => {
  return (
    <View>
      <Header />
      <Text>Profile</Text>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/(tabs)/Profile/options/Settings",
          })
        }
      >
        <Text>Settings</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/(tabs)/Profile/options/Wishlist",
          })
        }
      >
        <Text>Wishlist</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/(tabs)/Profile/options/TellFriends",
          })
        }
      >
        <Text>TellFriends</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/(tabs)/Profile/options/Orders",
          })
        }
      >
        <Text>Orders</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
