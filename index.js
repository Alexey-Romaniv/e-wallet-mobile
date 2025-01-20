import React from 'react';
import {AppRegistry, Platform, Text,View} from 'react-native';
import {registerRootComponent} from "expo";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';
import App from './App'; // Главный компонент
import { store, persistor } from './redux/store'; // Redux store
import { ThemeProvider } from 'styled-components/native';
import theme from './utils/theme'; // Ваши стили

const Main = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
                <App />
                <Toast />
            </ThemeProvider>
        </PersistGate>
    </Provider>
);

registerRootComponent(Main);

