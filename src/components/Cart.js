// Cart.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const Cart = ({ cartItems }) => {
  return (
    <View>
      <Text>Your Shopping Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default Cart;
