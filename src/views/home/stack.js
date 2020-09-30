import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from ".";
import DetailView from "../detail";

const HomeStack = createStackNavigator();

const HomeStackComponent = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Detail" component={DetailView} />
    </HomeStack.Navigator>
  );
};

export default HomeStackComponent;
