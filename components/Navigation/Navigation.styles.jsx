import styled from "styled-components/native";
import { TouchableOpacity, Image, Text, View } from "react-native";

// Список навигации
export const NavList = styled(View)`
    margin-top: 12px;
    margin-bottom: 12px;
    flex-direction: row;
    justify-content: center;
    gap: 32px;

    @media (min-width: 768px) {
        flex-direction: column;
        gap: 12px;
        margin: 0 0 28px;
    }
`;

// Иконки навигации
export const NavIcon = styled(Image)`
    tint-color: currentColor;
    width: 44px;
    height: 44px;

    @media (min-width: 768px) {
        width: 22px;
        height: 22px;
    }
`;

// Текст навигации
export const NavText = styled(Text)`
    display: none;
    color: ${(p) => p.theme.colors.mainText};
    font-family: ${(p) => p.theme.fonts.titleFont};
    font-size: 18px;
    line-height: 1.2;

    @media (min-width: 768px) {
        display: flex;
    }
`;

// Ссылки навигации
export const NavigationLink = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    gap: 20px;
    color: #6e78e8;
    font-weight: 400;

    ${({ isActive }) =>
            isActive &&
            `
    font-weight: 700;
    /* Дополнительные стили для активного состояния */
  `}
`;

