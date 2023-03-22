/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Game from './src/components/Game';

function App(): JSX.Element {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Game />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({});

export default App;
