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
import Lab5 from './src/screens/lab5';
import Flex from './src/screens/flex';
import Lab6 from './src/screens/Lab6';
import Lab7 from './src/screens/Lab7';
import Menu from './src/screens/Lab7/TopMenu';
import Header from './src/components/Header';
import Crud from './src/screens/lab8/CRUD';
import Home from './src/screens/app/Home';
// import MyTabs from './src/screens/Lab9/BottomTab';
import BottomTabs from './src/screens/Lab7Demo';
import ShoppingCart from './src/screens/auth/ShopCart';
import OrderInfo from './src/screens/auth/OrderInfo';
// import MusicPlayer from './src/screens/Lab9/nghenhac';
// import Nghenhac from './src/screens/Lab9/nghenhac';


const Stack = createNativeStackNavigator()
const App = () => {
  return(
  //  <MusicPlayer />
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Splash}/>
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Main' component={Main}/>
      <Stack.Screen name='ShoppingCart' component={ShoppingCart} />
      <Stack.Screen name="OrderInfo" component={OrderInfo} />
    </Stack.Navigator>
    </NavigationContainer>
    // <Lab3></Lab3>
    // <Lab4></Lab4>
    // <Flex></Flex>
    // <NavigationContainer>
    // <Stack.Navigator>
    // <Stack.Screen name='Lab5' component={Lab5}/>
    //   <Stack.Screen name='Flex' component={Flex}/>
    // </Stack.Navigator>
    // </NavigationContainer>
    // <Lab6></Lab6>
    // <Lab7></Lab7>
    // <Menu></Menu>
  //  <Header></Header>
  // <Crud></Crud>
  // <Home></Home>
  // <NavigationContainer>
  //     <BottomTabs />
  // </NavigationContainer>

 
  );
};

export default App;