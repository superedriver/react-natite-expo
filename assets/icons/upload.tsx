import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const UploadIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21V11m0 0-3 3m3-3 3 3m-8 2.818c-2.304-.61-4-2.693-4-5.169C3 9.2 4.8 6.938 7.5 6.5 8.347 4.486 10.351 3 12.69 3c2.994 0 5.442 2.323 5.61 5.25 1.59.695 2.7 2.4 2.7 4.247a4.503 4.503 0 0 1-4 4.476"
    />
  </Svg>
);
export default UploadIcon;
