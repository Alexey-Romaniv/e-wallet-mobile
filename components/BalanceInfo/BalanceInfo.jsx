import {BalanceCount, BalanceTitle, BalanceWrapper} from "./BalanceInfo.styles";
import { useSelector} from "react-redux";
import {selectBalance} from "../../redux/transactions/transactionSelectors";
import {Text} from "react-native";

export const BalanceInfo = () => {
    const balance = useSelector(selectBalance)
    return <BalanceWrapper>
        <Text style={{color: '#A6A6A6', fontSize:16, marginBottom: 5}}>Your balance</Text>
        <BalanceCount>$ {balance}</BalanceCount>
    </BalanceWrapper>
}