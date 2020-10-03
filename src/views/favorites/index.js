import React, { useCallback } from "react";
import { Text, StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SafeAreaView from "react-native-safe-area-view";
import Box from "../../components/Box";

const Favorites = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Favorites</Text>
    </Box>
  );
};

export default Favorites;
