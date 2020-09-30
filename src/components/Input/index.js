import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components";
import {
  compose,
  typography,
  color,
  size,
  space,
  shadow,
  borderRadius
} from "styled-system";
import theme from "../../utils/theme";

const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor]
}))(compose(typography, color, size, space, borderRadius, shadow));

export default Input;
