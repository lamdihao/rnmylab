import React from "react";
import {styles} from './styles'
import { Image, Text, View } from "react-native";
import Button4 from "../../../components/button4";
import Button3 from "../../../components/button3";


const Splash = ({navigation}) =>{
    return(
      <View>
       <Image 
        resizeMode="contain"
        style={styles.img}
        source={require('../../../assets/images/pet.png')}
       />
       <Text style={styles.title}>Buy And Sell Anything Faster With The PetShop App</Text>
       <Text style={[styles.title, styles.innerTitle]}>Massive discounts and offers when you shope.</Text>
       
       <Button3 onPress={() => navigation.navigate('Login')}></Button3>
       <Button4 onPress={() => navigation.navigate('Signup')}></Button4>

      </View>
      
    );
};
export default Splash;