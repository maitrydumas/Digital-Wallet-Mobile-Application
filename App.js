/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from './src/screens/Home/index';
import CardList  from './src/screens/CardListScreen/index';
import Documents from './src/screens/Documents';
import Settings
 from './src/screens/Settings';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="CardList" component={CardList}   />
        <Stack.Screen name="Documents" component={Documents} options={{ title: 'Account Balance' }}/>
        <Stack.Screen name="Settings" component={Settings}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;