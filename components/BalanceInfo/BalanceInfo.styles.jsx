import styled from 'styled-components/native';
import {Container} from "../CommonComponents/Container.styles";
import {View, Text} from "react-native";

export const BalanceWrapper = styled(View)`
width: 100%;
  height: auto;
  padding: 8px 32px 12px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 30px;
`

export const BalanceTitle = styled(Text)`
  margin-bottom: 11px;
  
  font-family: ${p => p.theme.fonts.mainFont};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: calc(18/12);
  text-transform: uppercase;

  color: #A6A6A6;
`

export const BalanceCount = styled(Text)`
  font-family: ${p => p.theme.fonts.titleFont};
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  
  color: ${p => p.theme.colors.mainText};
`