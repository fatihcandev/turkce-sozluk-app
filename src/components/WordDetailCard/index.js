import React from "react";
import Box from "../Box";
import Text from "../Text";

const WordDetailCard = ({
  number,
  title,
  desc,
  quote,
  hasBorder,
  ...props
}) => {
  return (
    <Box
      px={12}
      py={20}
      {...props}
      borderColor="light"
      borderBottomWidth={hasBorder ? 1 : 0}
    >
      <Box flexDirection="row" alignItems="center">
        <Text color="textLight" fontSize={14} mr={10}>
          {number}
        </Text>
        <Text color="red">{title}</Text>
      </Box>
      <Box pl={18}>
        <Text color="textDark" fontSize={14} fontWeight="bold" mt={10}>
          {desc}
        </Text>
        <Text color="textLight" fontSize={14} mt={15}>
          {quote}
        </Text>
      </Box>
    </Box>
  );
};

export default WordDetailCard;
