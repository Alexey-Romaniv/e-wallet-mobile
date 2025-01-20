import React, {useEffect, useState} from 'react';
import {Container} from "../../components/CommonComponents/Container.styles";
import {useDispatch, useSelector} from "react-redux";
import {fetchStatistic} from "../../redux/transactions/transactionsOperations";
import {selectStatistic} from "../../redux/transactions/transactionSelectors";
import {Navigation} from "../../components/Navigation/Navigation";
import {StatisticSelected} from "../../components/StatisticSelected/StatisticSelected";
import {Diagram} from "../../components/Diagram/Diagram";
import {StatisticList} from "../../components/StatisticList/StatisticList";
import {Loader} from "../../components/Loader/Loader";
import {DesktopInfoBar} from "../../components/DesktopInfoBar/DesktopInfoBar";
import {DesktopWrapper, StatisticFlexWrapper, StatisticTitle} from "../../components/CommonComponents/Pages.styles";
import {View} from "react-native";

const StatisticPage = () => {
    const [selectedMonth, setSelectedMonth] = useState('')
    const [selectedYear, setSelectedYear] = useState('')

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStatistic({selectedMonth, selectedYear}));
    }, [dispatch, selectedMonth, selectedYear]);

    const statistic = useSelector(selectStatistic);
    if (!statistic) return <Loader/>
    const generateRandomColors = (count) => {
        const colors = [];
        for (let i = 0; i < count; i++) {
            const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
            colors.push(color);
        }
        return colors;
    };
    console.log(statistic)
    const statisticLength = Object.values(statistic.categories).length;
    const backgroundColors = generateRandomColors(statisticLength);
    const combinedArray = Object.values(statistic.categories).map((el, index) => {
        return {
            name: Object.keys(statistic.categories)[index], sum: el, color: backgroundColors[index]
        }
    })

    return <Container>
            <DesktopWrapper>
              <Navigation/>
                <StatisticFlexWrapper>
                    <View>
                        <StatisticTitle>Statistic</StatisticTitle>
                        <Diagram data={combinedArray}/>
                    </View>
                    <View>
                        <StatisticSelected setMonth={setSelectedMonth} setYear={setSelectedYear}/>
                        <StatisticList statistic={statistic} list={combinedArray}/>
                    </View>
                </StatisticFlexWrapper>
            </DesktopWrapper>
    </Container>
}
export default StatisticPage;