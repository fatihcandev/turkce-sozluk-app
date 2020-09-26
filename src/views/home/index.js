import React from "react";
import { Text, View } from "react-native";
import BoxCenter from "../../components/BoxCenter";
import Button from "../../components/Button";
import { Logo } from "../../components/icons";

const Home = ({ navigation }) => {
  return (
    <BoxCenter>
      <Button mb={10} onPress={() => navigation.navigate("Detail")}>
        <Text>Go to detail</Text>
      </Button>
      <Logo width={120} color="red" />
    </BoxCenter>
  );
};

export default Home;
