
import React from "react";
import { Svg, Path, G, ClipPath, Defs, Rect } from "react-native-svg";

const Src1 = (props) => (
    <Svg viewBox="0 0 21.5 21" fill="#E0E0E0" xmlns="http://www.w3.org/2000/svg" {...props}>
        <G clip-path="url(#clip0_5_3612)">
            <Path
                d="M3.5 5V19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3H5.5C4.39 3 3.5 3.9 3.5 5ZM15.5 9C15.5 10.66 14.16 12 12.5 12C10.84 12 9.5 10.66 9.5 9C9.5 7.34 10.84 6 12.5 6C14.16 6 15.5 7.34 15.5 9ZM6.5 17C6.5 15 10.5 13.9 12.5 13.9C14.5 13.9 18.5 15 18.5 17V18H6.5V17Z"/>
        </G>
        <Defs>
            <ClipPath id="clip0_5_3612">
                <Rect width="24" height="24" fill="white" transform="translate(0.5)"/>
            </ClipPath>
        </Defs>
    </Svg>

);

export default Src1;
