import styled from "styled-components/native";
import { Text, View } from "react-native";

function getBorderColor(type) {
    return type === "+" ? "#24CCA7" : "#FF6596";
}

// Основной текст транзакции
export const TransactionText = styled(Text)`
  font-family: ${(p) => p.theme.fonts.mainFont};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: ${(p) => p.theme.colors.mainText};
`;

// Сумма транзакции
export const Sum = styled(Text)`
  color: ${(p) => (p.type === "+" ? p.theme.colors.income : p.theme.colors.expense)};
`;

// Комментарий транзакции
export const TransactionComment = styled(TransactionText)`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Ряд транзакции
export const TransactionRow = styled(View)`
  flex-direction: column;
  gap: 4px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

// Данные транзакции
export const TransactionData = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: ${(p) => p.theme.colors.white};
  border-left-width: 5px;
  border-left-color: ${(p) => getBorderColor(p.type)};
  position: relative;

  @media (min-width: 768px) {
    padding: 0;
    border-left-width: 0;
  }
`;
