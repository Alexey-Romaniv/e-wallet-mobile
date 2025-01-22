import React from "react";
import { CategoryItem, StatisticCategory, StatisticSum, ColorBox } from "./StatisticItem.styles";
import {Text} from "react-native";

export const StatisticItem = ({ data: { name, sum, color } }) => {
    return (
        <CategoryItem>
            <StatisticCategory>
                <ColorBox color={color} />

                <Text style={{textTransform: 'capitalize', fontWeight: 700}}>{name}</Text>
            </StatisticCategory>
            <StatisticSum>{sum.toFixed(2)}</StatisticSum>
        </CategoryItem>
    );
};
