import { View } from "react-native";
import styled from "styled-components";
import {
  compose,
  flexbox,
  color,
  size,
  space,
  borderRadius,
  position,
  border
} from "styled-system";

const Box = styled(View)(
  compose(flexbox, color, size, space, borderRadius, position, border)
);

export default Box;
