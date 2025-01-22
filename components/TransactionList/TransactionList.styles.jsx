import styled from "styled-components/native";
import {Text, View, ScrollView, FlatList} from "react-native";

export const TransactionList = styled(ScrollView)`
  max-width: 100%;
    display: flex;
    
    gap: 5px;
    height: 100%;
    
`;

export const TransactionItem = styled(View)`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1px;
    margin-bottom: 20px;
`;

export const TransactionHeader = styled(View)`
  margin-top: 20px;
  margin-bottom: 8px;
  padding: 15px 20px;
  border-radius: 30px;
  background: ${(p) => p.theme.colors.white};
  flex-direction: row;
  justify-content: space-between;
`;

export const TransactionTitle = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
`;

export const TransactionListWrapper = styled(View)`
  margin-top: 32px;
  border-radius: 10px;
`;

export const TransactionTableWrapper = styled(View)`
  width: 100%;
`;

export const EmptyListText = styled(Text)`
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2;
  margin-top: 15px;
  text-align: center;
`;
