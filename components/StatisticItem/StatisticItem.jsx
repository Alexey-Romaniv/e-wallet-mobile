import React from "react";
import { CategoryItem, StatisticCategory, StatisticSum, ColorBox } from "./StatisticItem.styles";

export const StatisticItem = ({ data: { name, sum, color } }) => {
    return (
        <CategoryItem>
            <StatisticCategory>
                <ColorBox color={color} />
                {name}
            </StatisticCategory>
            <StatisticSum>{sum.toFixed(2)}</StatisticSum>
        </CategoryItem>
    );
};
