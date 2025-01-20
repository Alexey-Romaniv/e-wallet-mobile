import styled from "styled-components/native";
import {Text, View, } from 'react-native';
export const DiagramBalance = styled(Text)`
    position: absolute;
    top: 50%;
    left: 50%;
    justify-content: center;
    align-items: center;
    transform: translate(-50px, -50px);
    color: ${(p) => p.theme.colors.mainText};
    text-align: center;
    font-family: ${(p) => p.theme.fonts.mainFont};
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
`;

export const DiagramWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1; /* Чтобы занять всё пространство */
`;
