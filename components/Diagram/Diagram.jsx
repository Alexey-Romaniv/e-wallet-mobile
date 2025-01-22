import React from "react";
import {useSelector} from "react-redux";
import {selectBalance} from "../../redux/transactions/transactionSelectors";
import {Text, View} from "react-native";
import PieChart from 'react-native-pie-chart'


export const Diagram = ({data}) => {
    const balance = useSelector(selectBalance);

    // Преобразуем данные для PieChart
    const pieData = data.map(({sum, color, name}, index) => ({
        value: Number(sum) || 0, // Значение сектора
        color, // Цвет сектора
        label: {text: name },
    }));

    // Кастомизация текста в центре
    const CenterLabel = () => (<Text style={{position:'absolute', top: '50%', left:'50%'}}>${balance}</Text>

    );

    return (
        <View style={{position: 'relative', alignItems: 'center', alignSelf: 'stretch'}}>
            <PieChart
                style={{
                    position:'relative',
                    alignSelf: 'center',
                }}
                widthAndHeight={250}
                cover={0.4}
                series={pieData}
                // innerRadius={60} // Размер "пустоты" внутри
                // outerRadius={100} // Внешний радиус
                // labelRadius={90} // Радиус для размещения текста
            />
            {/* Добавление текста в центр */}
            {/*<CenterLabel/>*/}
            {/*</PieChart>*/}
            <Text style={{
                position: 'absolute',
                top: '50%',
                transform: [{translateY: '-50%'}, {translateX: -30}],
                left: '50%',
                fontSize: 18,
            }}>${balance}</Text>

        </View>
    );
};
