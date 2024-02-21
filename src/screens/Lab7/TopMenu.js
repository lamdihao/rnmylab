import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./HomeScreen";
import User from "./UserScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
const Menu = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator style={{marginTop:40}}>
                <Tab.Screen name="Home" component={Home}
                />
                <Tab.Screen name="User" component={User}
                  
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
 export default  Menu;
