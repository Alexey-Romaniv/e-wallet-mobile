import styled from "styled-components/native";
import {View, Text, Image} from "react-native";

export const Logo = styled(View)`
    display: flex;
    align-items: center;
    gap: 16px;
  

@media screen and (min-width: 768px) {
  gap: 20px;
}
    `

export const  LogoWrapper = styled.View`
    margin-bottom: 60px;
    display: flex;
    gap: 16px;
    justify-content: center;
    align-items: center;
`
export const LogoText = styled(Text)`

  
  font-family: ${p => p.theme.fonts.titleFont};
  color: ${p => p.theme.colors.titleText};
  font-size: 20px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    gap: 20px;
  }
`

export const LogoImg = styled(Image)`
width: 30px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 40px;
    
  }`