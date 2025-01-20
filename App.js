import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import StatisticPage from "./pages/StatisticPage/StatisticPage";
import CurrencyPage from "./pages/CurrencyPage/CurrencyPage";

const Stack = createStackNavigator();

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
//
// const PrivateRoutes = () => (
//     <Stack.Navigator>
//       <Stack.Screen
//           name="Home"
//           component={HomePage}
//           options={{ headerShown: false }}
//       />
//       <Stack.Screen
//           name="Statistics"
//           component={StatisticPage}
//           options={{ headerShown: false }}
//       />
//       <Stack.Screen
//           name="Currency"
//           component={CurrencyPage}
//           options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
// );

const AppNavigator = () => {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  return (
      <NavigationContainer>
        {isAuthenticated ? null : <PublicRoutes />}
      </NavigationContainer>
  );
};

export default AppNavigator;
