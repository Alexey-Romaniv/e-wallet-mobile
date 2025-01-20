import {BalanceCount, BalanceTitle, BalanceWrapper} from "./BalanceInfo.styles";
import { useSelector} from "react-redux";
import {selectBalance} from "../../redux/transactions/transactionSelectors";

export const BalanceInfo = () => {
    const balance = useSelector(selectBalance)
    // useEffect(() => dispatch(wallet), [wallet])
    return <BalanceWrapper>
        <BalanceTitle>Your balance</BalanceTitle>
        <BalanceCount>$ {balance}</BalanceCount>
    </BalanceWrapper>
}