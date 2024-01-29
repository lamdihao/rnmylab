import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";




const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props} >
            <ImageBackground 
            source={require('../assets/images/background.png')}
            style={{padding:20}}>
                <Image 
                source={require('../assets/images/anh-cr7.png')}
                style={{height:80, width: 80, borderRadius: 80, marginBottom:10}}>
                </Image>
                <Text style={{color:'#FFCC00', fontSize:18, fontWeight:'bold'}}>Lâm Dĩ Hào</Text>
                <Text style={{color:'black', fontSize:14}}>haoldpd08096@fpt.edu.vn</Text>
            </ImageBackground>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        <View style={{padding:20, borderTopWidth: 1, borderTopColor:'#ccc'}}>
            <Text style={{color:'#aaa', marginLeft:30}}>Phiên bản ứng dụng: 2.6.0</Text>
        </View>
        </View>
    );
};
 export default CustomDrawer;