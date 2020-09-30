import React, { useCallback, useState } from "react";
import { Text, StatusBar } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { useFocusEffect } from "@react-navigation/native";
import Box from "../../components/Box";
import { Logo } from "../../components/icons";
import SearchBox from "../../components/SearchBox";
import bg from "../../../assets/bg-red.jpg";

const Home = () => {
  const [isFocusChanged, setFocusChanged] = useState(false);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("default");
    }, [])
  );

  return (
    <Box flex={1}>
      <Box position="relative" zIndex={1} height={isFocusChanged ? 0 : 285}>
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
            <Logo color="red" color="white" />
          </Box>
          <Box p={16} width="100%" mb={-40}>
            <SearchBox onFocusChanged={status => setFocusChanged(status)} />
          </Box>
        </Box>
      </Box>
      <Box flex={1} bg="white" pt={26}>
        <Box p={30} flex={1}>
          <Text>Hello</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
