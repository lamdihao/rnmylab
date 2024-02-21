import React from "react";
import {styles} from './styles'
import { Text, View } from "react-native";
import Input from "../../../components/input";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Button7 from "../../../components/button7";


const Signup = ({navigation}) =>{

    return(
      <View style={styles.container}>
       <Text style={styles.title}>Welcome!</Text>
       <Text style={[styles.title, styles.innerTitle]}>Sign up for the Chunky app</Text>
       <Input placeholder="Email/phone number" />
       <Input placeholder="Password" />
       <Input isPassword label="Password" placeholder="Confirm password" />
       <View style={styles.row}>
       <BouncyCheckbox
          size={25}
          fillColor="black"
          unfillColor="#FFFFFF"
          text="By clicking on ‘sign up’, you’re agreeing to the
           Chunky app Terms of Service and Privacy Policy"
          iconStyle={{ borderColor: "red" }}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ 
          fontSize: 12, 
          textDecorationLine: 'none',
          marginRight: 50,
        }}
          />
      </View>
       <Button7 onPress={() => navigation.navigate('Login')}></Button7>
      </View>
      
    );
};
export default Signup;