import React from "react";
import { StyleSheet } from "react-native";
import theme from "../../utils/theme";
import Box from "../Box";
import Button from "../Button";
import { Bookmark, History, Search } from "../icons";

function TabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Box
      bg="white"
      flexDirection="row"
      width="100%"
      justifyContent="space-around"
      style={styles.container}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const focusColor = isFocused
          ? theme.colors.red
          : theme.colors.textLight;

        return label === "Home" ? (
          <Box key={label} p={15} mt={-15} bg="white" borderRadius="full">
            <Button size={56} bg="red" borderRadius="full" onPress={onPress}>
              <Search stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            onPress={onPress}
            flexDirection="column"
            height={56}
          >
            {label === "History" && <History color={focusColor} />}
            {label === "Favorites" && (
              <Bookmark
                color={focusColor}
                fill={isFocused && theme.colors.red}
              />
            )}
          </Button>
        );
      })}
    </Box>
  );
}

export default TabBar;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 15
  }
});
