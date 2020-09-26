import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBookmark(props) {
  return (
    <Svg
      width={24}
      height={24}
      className=""
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
      />
    </Svg>
  );
}

export default SvgBookmark;
