import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import styles from './styles'; 

const GoogleButton = ({onPress}) => {
 

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Image source={require('../../assets//images/google.jpg')} style={styles.icon} />
        <Text style={styles.buttonText}>Log in with your Google account</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleButton;
