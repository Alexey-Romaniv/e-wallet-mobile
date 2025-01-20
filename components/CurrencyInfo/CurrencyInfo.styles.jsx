import styled from "styled-components/native";
import { ImageBackground, Text, View } from "react-native";

export const CurrencyTableWrapper = styled(View)`
    width: 100%;
    height: auto;
    border-radius: 30px;
    background-color: #4a56e2;
    overflow: hidden;
`;

export const CurrencyTableBackground = styled(ImageBackground)`
    flex: 1;
    resize-mode: cover;
    justify-content: flex-start;
`;

export const CurrencyHeader = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 11px 20px 12px;
    background-color: rgba(255, 255, 255, 0.2);
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const CurrencyHeaderText = styled(Text)`
    font-size: 18px;
    font-weight: 700;
    font-family: ${(p) => p.theme.fonts.mainFont};
    color: ${(p) => p.theme.colors.white};
`;

export const CurrencyBodyRow = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 12px 20px 16px;
`;

export const CurrencyBodyText = styled(Text)`
    font-size: 16px;
    font-weight: 400;
    font-family: ${(p) => p.theme.fonts.mainFont};
    color: ${(p) => p.theme.colors.white};
`;
