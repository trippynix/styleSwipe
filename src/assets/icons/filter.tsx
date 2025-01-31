import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M4 17h8.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3h.1c.6 0 1-.4 1-1s-.4-1-1-1h-.1c-.4-1.7-2-3-3.9-3s-3.4 1.3-3.9 3H4c-.6 0-1 .4-1 1s.4 1 1 1zm12-3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM4 9h.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H20c.6 0 1-.4 1-1s-.4-1-1-1h-8.1c-.4-1.7-2-3-3.9-3S4.6 5.3 4.1 7H4c-.6 0-1 .4-1 1s.4 1 1 1zm4-3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
  </Svg>
);
export default SvgComponent;
