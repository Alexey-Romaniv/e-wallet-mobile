import styled from "styled-components/native";

export const StatisticListContainer = styled.View`
    flex: 1;
    padding: 16px 0;
`;

export const ListTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px;
    border-radius: 30px;
    background-color: ${(p) => p.theme.colors.white};
`;

ListTitle.Text = styled.Text`
  color: ${(p) => p.theme.colors.mainText};
  font-family: ${(p) => p.theme.fonts.mainFont};
  font-size: 18px;
  font-weight: 700;
`;

export const StatisticListWrapper = styled.View`
    margin-top: 16px;
`;

export const StatisticFinances = styled.View`
  padding: 0 20px;
  margin-top: 16px;
  gap: 15px;
`;

export const Finances = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

Finances.Label = styled.Text`
  color: ${(p) => p.theme.colors.mainText};
  font-family: ${(p) => p.theme.fonts.mainFont};
  font-size: 16px;
  font-weight: 700;
`;

Finances.Value = styled.Text`
  color: ${(p) =>
    p.color === "income"
        ? p.theme.colors.income
        : p.theme.colors.expense};
  font-family: ${(p) => p.theme.fonts.mainFont};
  font-size: 16px;
  font-weight: 700;
`;

export const EmptyMessage = styled.Text`
  text-align: center;
  margin-top: 20px;
  color: ${(p) => p.theme.colors.mainText};
  font-family: ${(p) => p.theme.fonts.mainFont};
  font-size: 16px;
  font-weight: 400;
`;
