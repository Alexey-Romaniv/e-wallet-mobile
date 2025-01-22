import React, {useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {useDispatch, useSelector} from "react-redux";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import StatisticPage from "./pages/StatisticPage/StatisticPage";
import CurrencyPage from "./pages/CurrencyPage/CurrencyPage";
import {Text, View} from "react-native";
import {useAuth} from "./hooks/useAuth";
import {selectLoading} from "./redux/transactions/transactionSelectors";
import {selectIsLoading as currencyLoader} from "./redux/currency/currencySelectors";
import {fetchCurrentUser} from "./redux/auth/authOperations";
import Home from "./assets/icons/Home";
import Statistics from "./assets/icons/Statistics";
import Currency from "./assets/icons/Currency";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {selectToken} from "./redux/auth/authSelectors";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PublicRoutes = () => (
    <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
      />
      <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{ headerShown: false }}
      />
    </Stack.Navigator>
);

const PrivateRoutes = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let Icon;
                if (route.name === "Home") {
                    Icon = Home;
                } else if (route.name === "Statistics") {
                    Icon = Statistics;
                } else if (route.name === "Currency") {
                    Icon = Currency;
                }
                return <Icon width={size} height={size} fill={color} />;
            },
            tabBarActiveTintColor: "#4A90E2",
            tabBarInactiveTintColor: "gray",
        })}
    >
        <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
        <Tab.Screen name="Statistics" component={StatisticPage} options={{ headerShown: false }} />
        <Tab.Screen name="Currency" component={CurrencyPage} options={{ headerShown: false }} />
    </Tab.Navigator>
);

const AppNavigator = () => {
    const dispath = useDispatch()
    const {isFetching, isLoading, isAuth} = useAuth();
    const statisticLoading = useSelector(selectLoading)
    const currencyLoading = useSelector(currencyLoader);
    const token = useSelector(selectToken);
    useEffect(() => {

            dispath(fetchCurrentUser());

    }, [dispath]);
    return (
      <NavigationContainer>
          {isLoading || isFetching || statisticLoading || currencyLoading ? <View style={{flex:1, justifyContent:'center', alignItems:'center', position:'absolute', top:0,left:0, backgroundColor:"#fff", width:'100%', height:'100%'}}><Text>Loading...</Text></View> :
       null}
          {isAuth ? <PrivateRoutes/>: <PublicRoutes/>}
      </NavigationContainer>
  );
};

export default AppNavigator;
