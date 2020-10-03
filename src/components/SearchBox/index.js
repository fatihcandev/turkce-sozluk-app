import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import Box from "../Box";
import Input from "../Input";
import Button from "../Button";
import Text from "../Text";
import { Search } from "../icons";
import theme from "../../utils/theme";

const SearchBox = ({ onFocusChanged }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    onFocusChanged(focused);
  }, [onFocusChanged, focused]);

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
          zIndex={10}
          bg="white"
          color="textDark"
          borderWidth={1}
          borderColor="#D1D1D1"
          style={{
            elevation: 2
          }}
          mt={20}
          height={52}
          borderRadius="normal"
          placeholder="Türkçe Sözlük'te Ara"
          placeholderTextColor="textMedium"
          pl={52}
          onFocus={() => setFocused(true)}
          onChangeText={(text) => setValue(text)}
          value={value}
        />
        {value.length > 0 && (
          <Button
            color={theme.colors.textDark}
            iconType="x"
            onPress={handleClear}
            position="absolute"
            right={10}
            top={35}
            style={{
              elevation: 3
            }}
          />
        )}
        <Box
          position="absolute"
          left={15}
          top={35}
          style={{
            elevation: 3
          }}
        >
          <Search color={theme.colors.textMedium} />
        </Box>
      </Box>
      {focused && (
        <Button onPress={handleBlur} pl={14} mt={20}>
          <Text>Vazgeç</Text>
        </Button>
      )}
    </Box>
  );
};

export default SearchBox;
