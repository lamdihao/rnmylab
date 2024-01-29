import React from 'react';
import {styles} from './styles'
import { View, Text, TouchableOpacity } from 'react-native';

const Button10 = ({onPress}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={onPress}>
        <Text style={styles.buttonText}>Đặt Ngay</Text>
      </TouchableOpacity>
    </View>
  );
};


export default React.memo(Button10);

