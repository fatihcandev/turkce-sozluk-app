import React, { useCallback } from "react";
import { Text, StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SafeAreaView from "react-native-safe-area-view";
import Box from "../../components/Box";

const DetailView = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
    }, [])
  );

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>DetailView</Text>
    </Box>
  );
};

export default DetailView;
