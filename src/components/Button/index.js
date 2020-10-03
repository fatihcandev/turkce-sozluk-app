import React from "react";
import Box from "../Box";
import StyledButton from "../StyledButton";
import { getIcon } from "../../utils/getIcon";
import theme from "../../utils/theme";

const Button = ({
  children,
  color = theme.colors.textDark,
  iconFillColor,
  iconType,
  iconSide,
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      flexDirection={iconSide === "right" ? "row-reverse" : "row"}
      {...props}
    >
      <Box mr={children ? 6 : 0}>
        {iconType && getIcon(iconType, color, iconFillColor)}
      </Box>
      {children}
    </StyledButton>
  );
};

export default Button;
