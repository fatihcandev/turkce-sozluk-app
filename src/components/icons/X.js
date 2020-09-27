import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgX(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="x_svg__feather x_svg__feather-x"
      classname=""
      {...props}
    >
      <Path d="M18 6L6 18M6 6l12 12" />
    </Svg>
  );
}

export default SvgX;
