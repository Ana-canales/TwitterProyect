import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStacksNavigator from './src/navigators/MainStacksNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <NavigationContainer>
   <MainStacksNavigator />
  </NavigationContainer>
  );
}