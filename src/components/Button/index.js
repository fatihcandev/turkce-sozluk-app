import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import {
  compose,
  flexbox,
  color,
  size,
  space,
  layout,
  borderRadius
} from "styled-system";

const Button = styled(TouchableOpacity)(
  compose(flexbox, space, color, size, layout, borderRadius)
);

Button.defaultProps = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
};

export default Button;
