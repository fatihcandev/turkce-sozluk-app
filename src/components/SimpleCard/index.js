import React from "react";
import Box from "../Box";
import Button from "../Button";
import Text from "../Text";

const SimpleCard = ({ title, onPress, ...props }) => {
  return (
    <Box {...props}>
      <Button
        py={16}
        px={12}
        bg="white"
        borderRadius="normal"
        onPress={onPress}
      >
        <Box flex={1}>
          <Text fontSize={18} fontWeight="bold">
            {title}
          </Text>
        </Box>
      </Button>
    </Box>
  );
};

export default SimpleCard;
