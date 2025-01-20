import {useSelector} from "react-redux";
import {Transaction} from "../Transaction/Transaction";
import {selectTransactions} from "../../redux/transactions/transactionSelectors";
import {
    EmptyListText,
    TransactionHeader,
    TransactionItem,
    TransactionList as List,
    TransactionListWrapper, TransactionTableWrapper,
    TransactionTitle
} from "./TransactionList.styles";

export const TransactionList = () => {
    const transactions = useSelector(selectTransactions);

    return <TransactionTableWrapper>
        <TransactionHeader>
            <TransactionTitle>Date</TransactionTitle>
            <TransactionTitle>Type</TransactionTitle>
            <TransactionTitle>Category</TransactionTitle>
            <TransactionTitle>Comment</TransactionTitle>
            <TransactionTitle>Sum</TransactionTitle>
            <TransactionTitle>Balance</TransactionTitle>
        </TransactionHeader>
        <TransactionListWrapper>
            {transactions.length ?
        <List style={{overflowY: 'auto'}}>
            {transactions.map((info) => <TransactionItem key={info._id}><Transaction id={info._id} info={info}
                                                                                     type={info.type}/></TransactionItem>)}
        </List> :
                <EmptyListText>Make your first transaction...</EmptyListText>
            }
        </TransactionListWrapper>
    </TransactionTableWrapper>
}