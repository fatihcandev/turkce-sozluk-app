import React, { useCallback, useRef, useState } from "react";
import {
  Text,
  StatusBar,
  Animated,
  ImageBackground,
  FlatList
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Box from "../../components/Box";
import { Logo } from "../../components/icons";
import SearchBox from "../../components/SearchBox";
import Card from "../../components/Card";
import bg from "../../../assets/bg-red.jpg";

const DATA = [
  {
    id: "1",
    title: "on para",
    desc: "çok az (para).",
    type: "Bir Deyim"
  },
  {
    id: "2",
    title: "siyem siyem ağlamak",
    desc: "hafif hafif, ince ince, durmadan gözyaşı dökmek.",
    type: "Bir Deyim - Atasözü"
  }
];

const Home = ({ navigation }) => {
  const heroHeight = useRef(new Animated.Value(285)).current;
  const [searchFocused, setSearchFocused] = useState(false);

  const handleFocusChange = useCallback(() => {
    if (searchFocused) {
      Animated.timing(heroHeight, {
        toValue: 100,
        duration: 350,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 350,
        useNativeDriver: false
      }).start();
    }
  }, [heroHeight, searchFocused]);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(searchFocused ? "dark-content" : "light-content");
    }, [searchFocused])
  );

  return (
    <Box flex={1}>
      <Box
        as={Animated.View}
        position="relative"
        zIndex={1}
        height={heroHeight}
      >
        {!searchFocused && (
          <Box
            as={ImageBackground}
            source={bg}
            style={{
              width: "100%",
              height: "100%"
            }}
            alignItems="center"
            justifyContent="center"
          >
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo color="white" />
            </Box>
          </Box>
        )}
        <Box
          p={16}
          width="100%"
          position="absolute"
          left={0}
          bottom={searchFocused ? 0 : -40}
        >
          <SearchBox
            onFocusChanged={(status) => {
              setSearchFocused(status);
              handleFocusChange();
            }}
          />
        </Box>
      </Box>
      <Box flex={1} bg="softRed" pt={searchFocused ? 0 : 26}>
        {searchFocused ? (
          <Box p={30} flex={1}>
            <Text>Geçmiş</Text>
          </Box>
        ) : (
            <Box px={16} py={40} flex={1}>
              <FlatList
                data={DATA}
                renderItem={({ item }) => (
                  <Card
                    title={item.title}
                    desc={item.desc}
                    type={item.type}
                    onPress={() => navigation.navigate("Detail")}
                    my={20}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </Box>
          )}
      </Box>
    </Box>
  );
};

export default Home;
