import styled from 'styled-components/native';
import bgBlue from '../../assets/icons/bg-blue.svg'
import bgRed from '../../assets/icons/bg-red.svg'
import {Text, View} from "react-native";


export const PageWrapper = styled(View)`
  
    min-height: 100vh;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    position: relative;
    background: url(${bgBlue}), url("${bgRed}");
    background-repeat: no-repeat;
    background-position: 0 100%, 100% 0;
    z-index: 0;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(25px);
      z-index: -1;
    }
  }
`;


export const DesktopWrapper = styled(View)`
  
  @media screen and (min-width: 1280px){
display: flex;
  //justify-content: space-between; 
    gap: 138px;
  }
`;

export const MainFlexWrapper = styled(View)`
  display: flex;
  gap: 32px;

  margin-bottom: 20px;

  @media screen and (min-width: 1280px){
    position: relative;
    flex-direction: column;
    max-width: 395px;
    width: 100%;
    flex-grow: 2;
    
    &:before{
      content: '';
      position: absolute;
      width: 1px;
      top: -120px;
      min-height: 100vh;

      right: -69px;
      background: ${p => p.theme.colors.mainBackground};
      filter: drop-shadow(1px 0px 0px rgba(255, 255, 255, 0.60)) drop-shadow(-1px 0px 0px rgba(0, 0, 0, 0.05));    }
  }
`;

export const CurrencyWrapper = styled(View)`
display: none;
  
  flex: 1;
  
  @media screen and (min-width: 768px){
    display: block;
  }
  
  @media screen and (min-width: 1280px){
    align-items: stretch;
    align-self: stretch;
  }
`;

export const HomeInfoWrapper = styled(View)`
flex: 1;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    gap: 28px;
    flex: 0;
  }
`

export const StatisticTitle = styled(Text)`
  text-align: left;
  color: ${p => p.theme.colors.titleText};
  font-family: ${p => p.theme.fonts.titleFont};
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;

  margin-bottom: 8px;
  
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const StatisticFlexWrapper = styled(View)`
@media screen and (min-width: 768px) {
  display: flex;
  gap: 32px;
  
  & > div {
    flex: 1;
  }
  
  @media screen and (min-width: 1280px){
    flex-grow: 1;
  }
}

`;

