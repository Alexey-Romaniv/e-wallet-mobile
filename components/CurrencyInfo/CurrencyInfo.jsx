import React from "react";
import {
    CurrencyTableWrapper,
    CurrencyTableBackground,
    CurrencyHeader,
    CurrencyHeaderText,
    CurrencyBodyRow,
    CurrencyBodyText,
} from "./CurrencyInfo.styles";
import { Text } from "react-native";
import backgroundImage from "../../assets/images/currencyBackground.png"; // Проверьте, что путь к файлу правильный

export const CurrencyInfo = ({ currency }) => {
    console.log("CurrencyInfo", currency);

    return (
        <>
            <CurrencyTableWrapper>
                <CurrencyTableBackground source={require("../../assets/images/currencyBackground.png")}>
                    {/* Заголовок таблицы */}
                    <CurrencyHeader>
                        <CurrencyHeaderText>Currency</CurrencyHeaderText>
                        <CurrencyHeaderText>Sale</CurrencyHeaderText>
                    </CurrencyHeader>
                    {/* Тело таблицы */}
                    {currency.map((el, index) => (
                        <CurrencyBodyRow key={index}>
                            <CurrencyBodyText>{el.asset_id_base}</CurrencyBodyText>
                            <CurrencyBodyText>{el.rate.toFixed(2)}</CurrencyBodyText>
                        </CurrencyBodyRow>
                    ))}
                </CurrencyTableBackground>
            </CurrencyTableWrapper>
        </>
    );
};
