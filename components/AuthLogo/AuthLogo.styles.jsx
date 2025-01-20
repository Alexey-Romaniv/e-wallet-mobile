import styled from "styled-components/native";
import { Text, Image, View } from "react-native";

export const AuthLogoContainer = styled(View)`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const AuthLogoImage = styled(Image)`
    width: 260px;
    height: 250px;
    resize-mode: contain;
    margin-bottom: 20px;
`;

export const AuthLogoText = styled(Text)`
  font-family: ${(p) => p.theme.fonts.titleFont};
  color: ${(p) => p.theme.colors.titleText};
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  margin-top: 20px;
`;
