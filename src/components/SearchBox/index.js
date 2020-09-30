import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import Box from "../Box";
import Text from "../Text";
import Input from "../Input";
import Button from "../Button";
import { Search, X } from "../icons";
import theme from "../../utils/theme";

const SearchBox = ({ onFocusChanged }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    onFocusChanged(focused)
  }, [focused]);

  const handleBlur = () => {
    setFocused(false);
    Keyboard.dismiss();
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <Box flexDirection="row" alignItems="center">
      <Box flex={1} position="relative">
        <Input
          style={{
            shadowColor: "#000",
            shadowRadius: 24,
            shadowOpacity: 0.1,
            shadowOffset: {
              width: 0,
              height: 10
            },
            elevation: 5
          }}
          bg="white"
          color="textDark"
          borderWidth={1}
          borderColor={focused ? "#D1D1D1" : "transparent"}
          mt={20}
          height={52}
          borderRadius="normal"
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          pl={52}
          onFocus={() => setFocused(true)}
          onChangeText={text => setValue(text)}
          value={value}
        />
        {value.length > 0 && (
          <Button onPress={handleClear} position="absolute" right={10} top={35}>
            <X color={theme.colors.textDark} />
          </Button>
        )}
        <Box position="absolute" left={15} top={35}>
          <Search color={theme.colors.textMedium} />
        </Box>
      </Box>
      {focused && (
        <Button pl={14} height={52} onPress={handleBlur}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
};

export default SearchBox;
