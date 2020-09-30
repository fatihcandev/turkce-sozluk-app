import React, { useCallback } from "react";
import { Text, StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SafeAreaView from "react-native-safe-area-view";
import Box from "../../components/Box";

const History = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("default");
    }, [])
  );

  return (
    <Box as={SafeAreaView} flex={1}>
      <StatusBar style="dark" />
      <Text>History</Text>
    </Box>
  );
};

export default History;
