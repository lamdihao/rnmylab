import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ShoppingCart = ({ route, navigation }) => {
  const { productImage, productPrice } = route.params;

  const handlePlaceOrder = () => {
    navigation.navigate('OrderInfo', { productPrice: productPrice });
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sản phẩm</Text>
      <Image source={{ uri: productImage }} style={styles.image} resizeMode="cover" />
      <Text style={styles.priceText}>Giá: {productPrice}</Text>

      <Text style={styles.description}>
        Chăm sóc thú cưng không chỉ là trách nhiệm, mà còn là một chuyến phiêu lưu đầy yêu thương. 
        Tại đây, chúng tôi không chỉ cung cấp các sản phẩm chất lượng cao và dịch vụ chuyên nghiệp, mà còn là ngôi nhà 
        thứ hai cho các bé lông xinh của bạn. Hãy để chúng tôi đi cùng bạn trên hành trình chăm sóc và nuôi dưỡng tình 
        bạn đặc biệt này.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
        <Text style={styles.buttonText}>Đặt hàng</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button1} onPress={handleCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
    borderRadius: 20,
  },
  priceText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  description: {
    marginLeft: 30,
    fontSize: 16,
    marginRight: 30,
    marginHorizontal: 20,
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    width: 200,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    width: 200,
    marginVertical: 10,
  },
});

export default ShoppingCart;
