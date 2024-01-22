import React from 'react';
import {Text} from 'react-native';
import Lab3 from './src/screens/lab3';
import Lab4 from './src/screens/lab4';
import Splash from './src/screens/auth/splash';
import Login from './src/screens/auth/login';
import Main from './src/screens/auth/main'
import Signup from './src/screens/auth/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='Home' component={Splash}/>
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Main' component={Main}/>
    </Stack.Navigator>
    </NavigationContainer>
    // <Lab3></Lab3>

  );
};

export default App;