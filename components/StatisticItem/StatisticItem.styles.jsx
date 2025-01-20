import styled from "styled-components/native";

export const CategoryItem = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    border-bottom-width: 1px;
    border-bottom-color: #dcdcdf;
    background-color: #fff;
`;

export const StatisticCategory = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

export const StatisticSum = styled.Text`
    color: #000;
    font-family: ${(p) => p.theme.fonts.mainFont};
    font-size: 16px;
    font-weight: 400;
`;

export const ColorBox = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background-color: ${(p) => p.color};
`;
