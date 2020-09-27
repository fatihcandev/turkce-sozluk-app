import React from "react";
import { Text, View } from "react-native";
import Box from "../../components/Box";
import Button from "../../components/Button";
import { Logo } from "../../components/icons";
import SearchBox from "../../components/SearchBox";

const Home = ({ navigation }) => {
  return (
    <Box>
      <Button mb={10} onPress={() => navigation.navigate("Detail")}>
        <Text>Go to detail</Text>
      </Button>
      <Logo width={120} color="red" />
      <Box p={10}>
        <SearchBox />
      </Box>
    </Box>
  );
};

export default Home;
