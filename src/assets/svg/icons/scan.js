import * as React from "react";
import Svg, { Defs, Path } from "react-native-svg";
import { hp } from "../../../utils/StyleGuides";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const Scan = (props) => (
  <Svg
    id="scan-qrcode"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={"#55B6FF"}
    width={hp(35)}
    height={hp(35)}
    {...props}
  >
    <Defs></Defs>
    <Path
      className="cls-1"
      d="m8.2,1.25H2.96c-.94,0-1.71.76-1.71,1.71v5.22c0,.41.34.75.75.75h0c.41,0,.75-.34.75-.75V2.96c0-.11.09-.21.21-.21h5.25c.41,0,.75-.34.75-.75h0c0-.41-.34-.75-.75-.75Z"
    />
    <Path
      className="cls-1"
      d="m21.04,1.25h-5.19c-.41,0-.75.34-.75.75h0c0,.41.34.75.75.75h5.19c.11,0,.21.09.21.21v5.22c0,.41.34.75.75.75h0c.41,0,.75-.34.75-.75V2.96c0-.94-.76-1.71-1.71-1.71Z"
    />
    <Path
      className="cls-1"
      d="m8.2,21.25H2.96c-.11,0-.21-.09-.21-.21v-5.13c0-.41-.34-.75-.75-.75h0c-.41,0-.75.34-.75.75v5.13c0,.94.76,1.71,1.71,1.71h5.25c.41,0,.75-.34.75-.75h0c0-.41-.34-.75-.75-.75Z"
    />
    <Path
      className="cls-1"
      d="m21.25,15.91v5.13c0,.11-.09.21-.21.21h-5.22c-.41,0-.75.34-.75.75h0c0,.41.34.75.75.75h5.22c.94,0,1.71-.76,1.71-1.71v-5.13c0-.41-.34-.75-.75-.75h0c-.41,0-.75.34-.75.75Z"
    />
  </Svg>
);
export default Scan;