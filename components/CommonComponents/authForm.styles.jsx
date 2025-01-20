import styled from "styled-components/native";
import { View, TextInput, Image, Text } from "react-native";

export const AuthBackground = styled(View)`
  background-color: ${(p) => p.theme.colors.white};
  flex: 1;
  width: 100%;
`;

export const AuthWrapper = styled(View)`
    flex: 1;
    background-color: ${(p) => p.theme.colors.white};
    justify-content: center;
    align-items: center;
`;

export const AuthFlexWrapper = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 20px; /* Gap замените на padding/margin, так как gap не поддерживается */
`;

export const FormWrapper = styled(View)`
    display: flex;
    flex-direction: column;
    gap: 20px; /* Замените на отступы между дочерними элементами */
`;

export const InputWrapper = styled(View)`
    position: relative;
    width: 100%;
`;

export const Input = styled(TextInput)`
    color: ${(p) => p.theme.colors.mainText};
    background-color: transparent;
    border: none;
    border-bottom-width: 1px;
    border-bottom-color: #e0e0e0;
    padding: 8px 0 8px 54px;
    font-size: 16px;
`;

export const Svg = styled(Image)`
    position: absolute;
    top: 12px;
    left: 10px;
    width: 24px;
    height: 24px;
`;

export const FormError = styled(Text)`
    position: absolute;
    left: 5px;
    bottom: -20px;
    font-size: 12px;
    color: red;
`;

export const AuthFormWrapper = styled(View)`
    border-radius: 20px;
    background-color: ${(p) => p.theme.colors.white};
    padding: 40px 20px;
    margin: 0 auto;
    width: 100%;
    max-width: 400px; /* Задайте максимальную ширину для центрирования */
`;
