import React from "react";
import Box from "../Box";
import Button from "../Button";
import Text from "../Text";

const Card = ({ title, desc, outerTitle, onPress, ...props }) => {
  return (
    <Box {...props}>
      <Text color="textLight" mb={10}>
        {outerTitle}
      </Text>
      <Button
        py={16}
        px={12}
        bg="white"
        borderRadius="normal"
        onPress={onPress}
      >
        <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
          <Text fontSize={18} fontWeight="bold">
            {title}
          </Text>
          <Text mt={8} color="textMedium" fontSize={14}>
            {desc}
          </Text>
        </Box>
      </Button>
    </Box>
  );
};

export default Card;
