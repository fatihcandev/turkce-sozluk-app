import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from ".";
import DetailView from "../detail";
import theme from "../../utils/theme";
import Button from "../../components/Button";

const HomeStack = createStackNavigator();

const HomeStackComponent = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailView}
        options={({ route, navigation }) => ({
          headerTitle: route.params?.title || "",
          headerLeft: () => (
            <Button
              color={theme.colors.textDark}
              iconType="chevronLeft"
              height="100%"
              px={20}
              onPress={() => navigation.navigate("Home")}
            />
          ),
          headerRight: () => (
            <Button
              color={theme.colors.textDark}
              iconType="moreHorizontal"
              height="100%"
              px={20}
              onPress={() => navigation.navigate("Home")}
            />
          )
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackComponent;
