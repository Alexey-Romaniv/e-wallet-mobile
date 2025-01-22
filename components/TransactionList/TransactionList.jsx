import React from "react";
import { useSelector } from "react-redux";
import { Transaction } from "../Transaction/Transaction";
import { selectTransactions } from "../../redux/transactions/transactionSelectors";
import {
    EmptyListText,
    TransactionHeader,
    TransactionItem,
    TransactionList as List,
    TransactionListWrapper,
    TransactionTableWrapper,
    TransactionTitle,
} from "./TransactionList.styles";
import {Text} from "react-native";
import {ScrollView} from "react-native";

export const TransactionList = () => {
    const transactions = useSelector(selectTransactions);
    return (
        <TransactionTableWrapper>

            <TransactionListWrapper>
                {transactions.length ? (

                    <>
                    <ScrollView style={{paddingBottom:  100, gap:10}}>
                        {transactions.map((info) => (
                            <TransactionItem key={info._id}>
                                <Transaction id={info._id} info={info} type={info.type} />
                            </TransactionItem>
                        ))}
                    </ScrollView>
                    </>

                ) : (
                    <EmptyListText>Make your first transaction...</EmptyListText>
                )}
            </TransactionListWrapper>
        </TransactionTableWrapper>
    );
};
