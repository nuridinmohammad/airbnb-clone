import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Listing = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Listing {id}</Text>
    </View>
  );
};

export default Listing;

const styles = StyleSheet.create({});
