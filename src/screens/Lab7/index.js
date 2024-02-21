import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Home from "./HomeScreen";
import User from "./UserScreen";
import { View } from "react-native";
import { Image } from "react-native";
import Setting from "./SettingScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Lab7 = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor: '#FF6C22',
                tabBarLabelStyle: {flexDirection: 'row'}
                
            }}
            >
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarIcon: ({forcused}) => {
                            return (
                                <View>
                                    <Image 
                                    source={require('../../assets/images/home.png')}
                                    resizeMode="contain"
                                    style={{width:25}}
                                    ></Image>
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen name="User" component={User}
                    options={{
                        tabBarIcon: ({forcused}) => {
                            return (
                                <View>
                                    <Image 
                                    source={require('../../assets/images/users.png')}
                                    resizeMode="contain"
                                    style={{width:25}}
                                    ></Image>
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen name="Setting" component={Setting}
                    options={{
                        tabBarIcon: ({forcused}) => {
                            return (
                                <View>
                                    <Image 
                                    source={require('../../assets/images/settings.png')}
                                    resizeMode="contain"
                                    style={{width:25}}
                                    ></Image>
                                </View>
                            );
                        },
                    }}
                />
            </Tab.Navigator>
            
        </NavigationContainer>
    );
};
 export default  Lab7;
