import React from "react";
import {styles} from './styles'
import { Text, View, TouchableOpacity } from "react-native";
import Input from "../../../components/input";
import Button5 from "../../../components/button5";
import Button6 from "../../../components/button6";
import BouncyCheckbox from "react-native-bouncy-checkbox";




const Login = ({navigation}) =>{
  const handleSignUpPress = () => {
    // Xử lý sự kiện khi nút "Sign Up" được nhấn
    console.log('Sign Up pressed!');
  };
    return(
      <View style={styles.container}>
       <Text style={styles.title}>Welcome back!</Text>
       <Text style={[styles.title, styles.innerTitle]}>Log In to your account</Text>
       <Input placeholder="Enter your name" />
       <Input placeholder="Enter your password" />
       <View style={styles.row}>
       <BouncyCheckbox
          size={25}
          fillColor="black"
          unfillColor="#FFFFFF"
          text="Remember Me"
          iconStyle={{ borderColor: "red" }}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ fontFamily: "JosefinSans-Regular" }}
          onPress={(isChecked: boolean) => {}}
          textStyle={{ 
          fontSize: 12, 
          textDecorationLine: 'none',
          marginRight: 50,
        }}
          />
        <Text style={styles.innerTitleFo}>Forgotten password?</Text>
      </View>
       <Button5 onPress={() => navigation.navigate('Main')}></Button5>
       <Text style={[styles.title, styles.innerTitleOr]}>OR</Text>
       <Button6 onPress={() => navigation.navigate('Signup')}></Button6>
       <View style={styles.signUpContainer}>
        <Text style={[styles.title, styles.innerTitle1, styles.dontHaveAccountText]}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUpPress}>
          <Text style={[styles.title, styles.innerTitle1, styles.signUpText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      </View>
      
    );
};
export default Login;