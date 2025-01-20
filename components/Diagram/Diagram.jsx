import React from "react";
import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/transactions/transactionSelectors";
import { Text, View } from "react-native";
import { PieChart } from "react-native-svg-charts";
import styled from "styled-components/native";
import { G, Text as SvgText } from "react-native-svg"; // Для добавления текста внутрь диаграммы

// Styled Components
const DiagramWrapper = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const DiagramBalance = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const Diagram = ({ data }) => {
    const balance = useSelector(selectBalance);

    // Преобразуем данные для PieChart
    const pieData = data.map(({ sum, color }, index) => ({
        value: sum || 0, // Значение сектора
        svg: { fill: color || "gray" }, // Цвет сектора
        key: `pie-${index}`, // Уникальный ключ
    }));

    // Кастомизация текста в центре
    const CenterLabel = () => (
        <G>
            <SvgText
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="20"
                fontWeight="bold"
                fill="#333"
            >
                ${balance}
            </SvgText>
        </G>
    );

    return (
        <DiagramWrapper>
            <PieChart
                style={{ height: 200, width: 200 }}
                data={pieData}
                innerRadius="60%" // Размер "пустоты" внутри
                outerRadius="100%" // Внешний радиус
                labelRadius={90} // Радиус для размещения текста
            >
                {/* Добавление текста в центр */}
                <CenterLabel />
            </PieChart>
        </DiagramWrapper>
    );
};
