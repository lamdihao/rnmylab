import { Text, TouchableOpacity } from "react-native"
import {styles} from './styles'
import React from 'react';

const Button2 = ({title}) => {
    return(
        <TouchableOpacity style = {styles.button} >
            <Text>Dang nhap</Text>
        </TouchableOpacity>
    );
};
export default React.memo(Button2);