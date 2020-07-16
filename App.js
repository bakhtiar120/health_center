/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import BottomNavigator from './app/configs/navigations/BottomTabNavigator';
import { transition_config } from './app/configs/transition_config';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
           <Stack.Screen name="BottomNavigator"
                  options={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                      open: transition_config,
                      close: transition_config,
                    },
                  }}
                  component={BottomNavigator} />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
