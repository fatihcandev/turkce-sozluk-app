import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components";
import TabBar from "./src/components/TabBar";
import HomeStackComponent from "./src/views/home/stack";
import Favorites from "./src/views/favorites";
import History from "./src/views/history";
import theme from "./src/utils/theme";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBar={props => <TabBar {...props} />}
        >
          <Tab.Screen name="History" component={History} />
          <Tab.Screen name="Home" component={HomeStackComponent} />
          <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
