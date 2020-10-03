import React from "react";
import theme from "../../utils/theme";
import Button from "../Button";
import Text from "../Text";

const ActionButton = ({
  children,
  color = theme.colors.textDark,
  iconType,
  ...props
}) => {
  return (
    <Button
      minWidth={48}
      height={48}
      px={8}
      bg="white"
      borderRadius="full"
      color={color}
      iconType={iconType}
      style={{
        elevation: 2
      }}
      {...props}
    >
      {children && (
        <Text color={color} fontWeight="bold">
          {children}
        </Text>
      )}
    </Button>
  );
};

export default ActionButton;
