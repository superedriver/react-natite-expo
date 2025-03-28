import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ProfileIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 20 20" {...props}>
    <Path
      fill="#FFFFFF"
      fillRule="evenodd"
      d="M18 16.615a.99.99 0 0 1-.061.303 7.983 7.983 0 0 0-4.564-6.635A4.969 4.969 0 0 0 15 6.615 4.998 4.998 0 0 0 11.92 2H17c.552 0 1 .063 1 .615v14ZM15.963 18H3.975l-.006-.299c0-3.096 2.357-5.741 5.37-6.056.661.088.916-.023 1.284-.069 3.002.326 5.346 3.047 5.346 6.134l-.006.29ZM2 16.615v-14C2 2.063 2.448 2 3 2h5.08A4.998 4.998 0 0 0 5 6.615c0 1.445.622 2.736 1.602 3.649a7.983 7.983 0 0 0-4.59 6.411c-.001-.021-.012-.039-.012-.06Zm11-10a3.004 3.004 0 0 1-2.377 2.933 6.19 6.19 0 0 0-1.255-.003A3.003 3.003 0 0 1 7 6.615c0-1.654 1.346-3 3-3s3 1.346 3 3ZM18 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"
    />
  </Svg>
);
export default ProfileIcon;
