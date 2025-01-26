import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function optionsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="options/Settings" options={{ headerShown: true }} />
      <Stack.Screen name="options/Wishlist" options={{ headerShown: false }} />
      <Stack.Screen
        name="options/TellFriends"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="options/Orders" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({});
