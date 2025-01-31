import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#6A2718"
        d="M9.546.739c1.085.863 1.857 1.663 2.074 3.08.06 1.444-.339 2.492-1.312 3.561-.768.623-1.447.772-2.437.937v7.31H7.31l-.187-7.31c-.557-.185-1.114-.37-1.687-.562-.527-.433-.527-.433-.937-.937l-.422-.504c-.575-1.09-.654-2.185-.328-3.373A4.286 4.286 0 0 1 5.871.6C6.996.252 8.478.182 9.546.74ZM5.658 2.53c-.296.466-.306.747-.223 1.288.516.425.516.425 1.042.352.475-.125.475-.125.727-.504.14-.41.14-.41 0-.82-.253-.378-.253-.378-.727-.515C6 2.276 6 2.276 5.657 2.53Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="currentColor" d="M0 .446h15.181v15.18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgComponent;
