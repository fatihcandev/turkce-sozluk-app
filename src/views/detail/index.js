import React, { useCallback } from "react";
import { StatusBar } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SafeAreaView from "react-native-safe-area-view";
import Box from "../../components/Box";
import Text from "../../components/Text";
import ActionButton from "../../components/ActionButton";
import theme from "../../utils/theme";

const DetailView = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );

  return (
    <Box as={SafeAreaView} flex={1} bg="softRed" p={16}>
      <Box>
        <Text fontSize={32} fontWeight="bold">
          Kalem
        </Text>
        <Text color="textLight" mt={6}>
          Arapça kalem
        </Text>
      </Box>
      <Box flexDirection="row" mt={24} justifyContent="space-between">
        <Box flexDirection="row">
          <ActionButton
            iconType="voice"
            color={theme.colors.textDark}
            mr={12}
          />
          <ActionButton
            iconType="bookmark"
            color={theme.colors.red}
            iconFillColor={theme.colors.red}
          />
        </Box>
        <ActionButton iconType="hand" color={theme.colors.textLight}>
          Türk İşaret Dili
        </ActionButton>
      </Box>
    </Box>
  );
};

export default DetailView;
