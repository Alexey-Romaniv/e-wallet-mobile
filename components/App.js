import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../redux/auth/authOperations";
import { useAuth } from "../hooks/useAuth";
import { Loader } from "./Loader/Loader";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import HomePage from "../pages/HomePage/HomePage";
import StatisticPage from "../pages/StatisticPage/StatisticPage";
import CurrencyPage from "../pages/CurrencyPage/CurrencyPage";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

const App = () => {
    const dispatch = useDispatch();
    const { isFetching, isLoading } = useAuth();
    const statisticLoading = useSelector((state) => state.transactions.isLoading);
    const currencyLoading = useSelector((state) => state.currency.isLoading);

    const [fontsLoaded] = useFonts({
        Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
        Circle: require("../assets/fonts/Circe-Regular.otf"),
    });

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    if (!fontsLoaded || isLoading || isFetching || statisticLoading || currencyLoading) {
        return <Loader />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* Public Routes */}
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

                {/* Private Routes */}
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Statistics"
                    component={StatisticPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Currency"
                    component={CurrencyPage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
       y </NavigationContainer>
    );
};

export default App;
