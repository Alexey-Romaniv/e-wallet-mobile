import React, {useEffect} from "react";
import {CurrencyWrapper, HomeInfoWrapper, MainFlexWrapper} from "../CommonComponents/Pages.styles";
import {Navigation} from "../Navigation/Navigation";
import {BalanceInfo} from "../BalanceInfo/BalanceInfo";
import {CurrencyInfo} from "../CurrencyInfo/CurrencyInfo";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrency} from "../../redux/currency/currencyOperations";
import {selectCurrency} from "../../redux/currency/currencySelectors";

export const DesktopInfoBar = () => {
    const dispatch = useDispatch();
    const currency = useSelector(selectCurrency)
    useEffect(() => {
        dispatch(fetchCurrency())
    }, [dispatch])
    return <MainFlexWrapper>
        <HomeInfoWrapper>
            <Navigation/>
            <BalanceInfo/>
        </HomeInfoWrapper>
        <CurrencyWrapper>
            <CurrencyInfo currency={currency}/>
        </CurrencyWrapper>
    </MainFlexWrapper>
}