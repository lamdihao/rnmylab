import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ShoppingIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name="shopping-cart" size={35} color="blue" />
    </TouchableOpacity>
  );
};

export default ShoppingIcon;
