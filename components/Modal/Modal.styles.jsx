import styled from 'styled-components/native';
import closeBtn from '../../assets/images/closeBtn.svg'
import {TouchableOpacity, View, Text} from "react-native";

export const ModalWrapper = styled(View)`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 66px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  
  @media screen and (min-width: 768px){
    top: 40px;
  }
`;

export const ModalContent = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  
  width: 100%;
  height: 100%;
  //transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

    
`;

export const CloseButton = styled(TouchableOpacity)`
  
  display: none;
  
  position: absolute;
  top: 20px;
  right: 20px;
  
  width: 16px;
  height: 16px;
  
  border: none;
  cursor: pointer;
  background: url(${closeBtn});
  background-size: contain;
  
  

`;

export const ModalTitle = styled(Text)`
  font-family: ${p => p.theme.fonts.titleFont};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: calc(36/24);
  text-align: center;
`

export const DesktopModalFlex = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  @media screen and (min-width: 768px){
    flex-direction: row;
    gap: 30px;
    align-items: flex-end;
  }
`;

export const ModalButtonsWrapper = styled(View)`
    @media screen and (min-width: 768px){
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;