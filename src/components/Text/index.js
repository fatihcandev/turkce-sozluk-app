import { Text as T } from "react-native";
import styled from "styled-components";
import { compose, typography, color, size, space } from "styled-system";

const Text = styled(T)(compose(typography, color, size, space));

export default Text;
