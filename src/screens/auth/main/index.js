import React from "react";
import {styles} from './styles'
import { Image, Text, View } from "react-native";


const Splash = () =>{
    return(
      <View>
       <Image 
        resizeMode="contain"
        style={styles.img}
        source={require('../../../assets/images/nice.png')}
       />
       <Text style={styles.title}>Your Sign up was successful</Text>
       <Text style={[styles.title, styles.innerTitle]}>Continue to Home</Text>
      </View>
      
    );
};
export default Splash;