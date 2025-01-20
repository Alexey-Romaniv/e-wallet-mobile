import React from "react";
import { StatisticItem } from "../StatisticItem/StatisticItem";
import {
    Finances,
    ListTitle,
    StatisticFinances,
    StatisticListContainer,
    StatisticListWrapper,
    EmptyMessage,
} from "./StatisticList.styles";

export const StatisticList = ({ statistic: { income, expenses }, list }) => {
    return list.length ? (
        <StatisticListContainer>
            <ListTitle>
                <ListTitle.Text>Category</ListTitle.Text>
                <ListTitle.Text>Sum</ListTitle.Text>
            </ListTitle>
            <StatisticListWrapper>
                {list.map((data, index) => (
                    <StatisticItem key={index} data={data} />
                ))}
            </StatisticListWrapper>
            <StatisticFinances>
                <Finances color="expense">
                    <Finances.Label>Expenses:</Finances.Label>
                    <Finances.Value>{expenses.toFixed(2)}</Finances.Value>
                </Finances>
                <Finances color="income">
                    <Finances.Label>Income:</Finances.Label>
                    <Finances.Value>{income.toFixed(2)}</Finances.Value>
                </Finances>
            </StatisticFinances>
        </StatisticListContainer>
    ) : (
        <EmptyMessage>You didn't have expanded in these time...</EmptyMessage>
    );
};
