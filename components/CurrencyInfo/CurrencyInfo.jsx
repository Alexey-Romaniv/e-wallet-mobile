import React from "react";
import {
    CurrencyTableWrapper,
    CurrencyTableBackground,
    CurrencyHeader,
    CurrencyHeaderText,
    CurrencyBodyRow,
    CurrencyBodyText,
} from "./CurrencyInfo.styles";
import backgroundImage from "../../assets/images/currencyBackground.png";

export const CurrencyInfo = ({ currency }) => {
    return (
        <CurrencyTableWrapper>
            <CurrencyTableBackground source={backgroundImage}>
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
    );
};
