import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchStatistic} from '../../redux/transactions/transactionsOperations';
import {selectStatistic} from '../../redux/transactions/transactionSelectors';
import {StatisticSelected} from '../../components/StatisticSelected/StatisticSelected';
import {Diagram} from '../../components/Diagram/Diagram';
import {StatisticList} from '../../components/StatisticList/StatisticList';
import {Loader} from '../../components/Loader/Loader';
import { ProgressCircle} from 'react-native-svg-charts'

const StatisticPage = () => {
    const [selectedMonth, setSelectedMonth] = useState(String(new Date().getMonth() + 1)); // Текущий месяц
    const [selectedYear, setSelectedYear] = useState(String(new Date().getFullYear())); // Текущий год

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStatistic({selectedMonth, selectedYear}));
    }, [dispatch, selectedMonth, selectedYear]);

    const statistic = useSelector(selectStatistic);

    if (!statistic) {
        return <Loader/>;
    }

    const generateRandomColors = (count) => {
        const colors = [];
        for (let i = 0; i < count; i++) {
            const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
            colors.push(color);
        }
        return colors;
    };

    const statisticLength = Object.values(statistic.categories).length;
    const backgroundColors = generateRandomColors(statisticLength);

    const combinedArray = Object.values(statistic.categories).map((el, index) => ({
        name: Object.keys(statistic.categories)[index],
        sum: el,
        color: backgroundColors[index],
    }));
    console.log("Hellooo");

    return (<SafeAreaView style={{flex: 1}}>

            <ScrollView style={styles.container}>

                <Text style={styles.title}>Statistic</Text>
                <Diagram data={combinedArray} />

                <StatisticSelected setMonth={setSelectedMonth} setYear={setSelectedYear}/>
                <StatisticList statistic={statistic} list={combinedArray}/>
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f9fa',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
});

export default StatisticPage;
