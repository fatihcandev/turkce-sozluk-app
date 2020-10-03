import React, { useCallback, useRef, useState } from "react";
import { StatusBar, Animated, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Box from "../../components/Box";
import { Logo } from "../../components/icons";
import SearchBox from "../../components/SearchBox";
import Card from "../../components/Card";
import SimpleCard from "../../components/SimpleCard";
import Text from "../../components/Text";

const DATA = [
  {
    id: "1",
    title: "on para",
    desc: "çok az (para).",
    outerTitle: "Bir Deyim"
  },
  {
    id: "2",
    title: "siyem siyem ağlamak",
    desc: "hafif hafif, ince ince, durmadan gözyaşı dökmek.",
    outerTitle: "Bir Deyim - Atasözü"
  }
];

const Home = ({ navigation }) => {
  const heroHeight = useRef(new Animated.Value(250)).current;
  const bgOpacity = useRef(new Animated.Value(1)).current;
  const [searchFocused, setSearchFocused] = useState(false);

  const handleFocusChange = useCallback(() => {
    if (searchFocused) {
      Animated.timing(heroHeight, {
        toValue: 100,
        duration: 350,
        useNativeDriver: false
      }).start();
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 250,
        duration: 350,
        useNativeDriver: false
      }).start();
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      }).start();
    }
  }, [bgOpacity, heroHeight, searchFocused]);

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
            as={Animated.View}
            bg="red"
            style={{
              width: "100%",
              height: "100%",
              opacity: bgOpacity
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
          <Box flex={1}>
            <FlatList
              style={{
                padding: 16
              }}
              data={DATA}
              renderItem={({ item }) => (
                <SimpleCard title={item.title} py={6} />
              )}
              keyExtractor={(item) => item.id}
              ListHeaderComponent={
                <Text color="textLight" mb={10}>
                  SON ARAMALAR
                </Text>
              }
            />
          </Box>
        ) : (
          <Box px={16} pt={15} flex={1}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                  desc={item.desc}
                  outerTitle={item.outerTitle}
                  onPress={() =>
                    navigation.navigate("Detail", {
                      title: item.title
                    })
                  }
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
