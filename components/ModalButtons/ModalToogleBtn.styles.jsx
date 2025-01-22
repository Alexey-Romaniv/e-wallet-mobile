import styled from "styled-components/native";
import { TouchableOpacity, View, Text, Image } from "react-native";

export const ToogleWrapper = styled(View)`
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

export const ToogleLabel = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${(p) => (p.active ? p.color : "#E0E0E0")};
`;

export const ModalToogleBtn = styled(TouchableOpacity)`
  position: relative;
  height: 40px;
  width: 80px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const ToggleCircle = styled(View)`
  position: absolute;
  height: 44px;
  width: 44px;
  border-radius: 9999px;
  background-color: ${(p) => (p.type ? p.theme.colors.income : p.theme.colors.expense)};
  top: -2px;
  left: ${(p) => (p.type ? "0px" : "36px")};
  shadow-color: rgba(0, 0, 0, 0.1);
  shadow-opacity: 0.5;
  shadow-radius: 6px;
`;

export const ToggleIcon = styled(Image)`
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    //transform: translate(-50%, -50%);
  //width: 24px;
  //height: 24px;
  tint-color: white;
`;
