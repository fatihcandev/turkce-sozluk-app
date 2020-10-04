import React, { useCallback } from "react";
import { StatusBar, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import SafeAreaView from "react-native-safe-area-view";
import Box from "../../components/Box";
import Text from "../../components/Text";
import ActionButton from "../../components/ActionButton";
import WordDetailCard from "../../components/WordDetailCard";
import theme from "../../utils/theme";

const DetailView = () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("dark-content");
    }, [])
  );

  return (
    <Box as={SafeAreaView} flex={1} bg="softRed">
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            Kalem
          </Text>
          <Text color="textLight" mt={6}>
            Arapça kalem
          </Text>
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton
            iconType="voice"
            color={theme.colors.textLight}
            mr={12}
          />
          <ActionButton
            iconType="bookmark"
            color={theme.colors.red}
            iconFillColor={theme.colors.red}
          />
          <Box ml="auto">
            <ActionButton iconType="hand" color={theme.colors.textLight}>
              <Text color={theme.colors.textLight} fontWeight="bold">
                Türk İşaret Dili
              </Text>
            </ActionButton>
          </Box>
        </Box>
        <Box mt={30} bg="white" borderRadius="normal">
          <WordDetailCard
            number={1}
            title="İSİM"
            desc="Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:"
            quote={`"Kâğıt, kalem, mürekkep, hepsi masanın üstündedir."- Falih Rıfkı Atay`}
            hasBorder
          />
          <WordDetailCard
            number={2}
            title="İSİM"
            desc="Resmî kuruluşlarda yazı işlerinin görüldüğü yer:"
            quote={`"Kalemindeki odacıya aylığını kırdırırmış." - Sermet Muhtar Alus`}
            hasBorder
          />
          <WordDetailCard
            number={2}
            title="İSİM"
            desc="Resmî kuruluşlarda yazı işlerinin görüldüğü yer:"
            quote={`"Kalemindeki odacıya aylığını kırdırırmış." - Sermet Muhtar Alus`}
            hasBorder
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DetailView;
