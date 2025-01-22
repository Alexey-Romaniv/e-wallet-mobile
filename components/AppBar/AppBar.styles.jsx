import styled from 'styled-components/native';
import {Image, TouchableOpacity} from 'react-native';
import {Text, View} from "react-native";
// Логотип (картинка)
export const LogoImg = styled(Image)`
    width: 30px;

    @media (min-width: 768px) {
        width: 40px;
    }
`;

// Логотип-ссылка
export const LogoLink = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    gap: 15px;
    display: flex;
    font-family: ${(p) => p.theme.fonts.titleFont};
    font-weight: 700;
    font-size: 54px;
    line-height: 1.5;

    color: ${(p) => p.theme.colors.titleText};

 
`;
// Название
export const LogoText = styled(Text)`
    //font-weight: 700;
    font-size: 24px;
    line-height: 1.5;

    color: #000000;

`;


// Название
export const Name = styled(Text)`
    position: relative;
    color: ${(p) => p.theme.colors.secondaryText};
    font-size: 18px;
    line-height: 1.5;
`;

// Шапка
export const Header = styled(View)`
    position: relative;
    width: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: ${(p) => p.theme.colors.background};
    padding: 10px 0;
`;

// Контейнер внутри шапки
export const HeaderContainer = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: 16px;
`;

// Флекс-контейнер для элементов в шапке
export const HeaderFlexbox = styled(View)`
    flex-direction: row;
    gap: 8px;
    
`;

// Кнопка выхода
export const ExitBtn = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    color: ${(p) => p.theme.colors.secondaryText};
    background-color: transparent;


    &:hover, &:focus {
        transform: scale(1.2);
    }


`;