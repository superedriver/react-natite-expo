import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UserIcon = () => (
  <Svg width={72} height={72} fill="none" viewBox="0 0 24 24">
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 21a7 7 0 1 1 14 0M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </Svg>
);
export default UserIcon;
