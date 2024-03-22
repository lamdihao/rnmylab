import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Button, Animated } from 'react-native';

const OrderInfo = ({ navigation, route }) => {
  const { productPrice } = route.params;
  const [isOrderSuccessful, setIsOrderSuccessful] = useState(false);
  const scaleValue = new Animated.Value(1);

  const handleContinue = () => {
    setIsOrderSuccessful(true);
  };

  const handleDone = () => {
    setIsOrderSuccessful(false);
    navigation.navigate('Main');
  };

  const handleCardPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.2,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handleCardPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>

      {/* Hình ảnh thẻ ngân hàng và nút */}
      <View style={styles.imageAndButtonsContainer}>
        <TouchableOpacity
          onPressIn={handleCardPressIn}
          onPressOut={handleCardPressOut}
          style={styles.cardContainer}
        >
          <Animated.Image
            source={require('./images/card.png')}
            style={[styles.image, { transform: [{ scale: scaleValue }] }]}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log("Cash payment selected")}>
          <Text style={styles.buttonText}>Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => console.log("Other payment method selected")}>
          <Text style={styles.buttonText}>Pay MoMo</Text>
        </TouchableOpacity>
      </View>

      {/* Giá tiền và nút đặt hàng */}
      <View style={styles.priceAndButtonContainer}>
        <View style={styles.priceAndLabelContainer}>
          <Text style={styles.priceLabel}>Price:</Text>
          <Text style={styles.priceText}>{productPrice}</Text>
        </View>
        <TouchableOpacity style={styles.button1} onPress={handleContinue}>
          <Text style={styles.buttonText}>Pay from Credit Card</Text>
        </TouchableOpacity>
      </View>

      {/* Modal hiển thị thông báo đặt hàng thành công */}
      <Modal visible={isOrderSuccessful} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Order Successful!</Text>
            <Button title="Done" onPress={handleDone} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageAndButtonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cardContainer: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 70,
    alignItems: 'center',
    marginVertical: 10,
    width: 250,
  },
  button1: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 10,
    width: 250,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  priceAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 200,
    marginBottom: 20,
  },
  priceAndLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 20,
    color: 'red',
    marginRight: 10,
  },
  priceLabel: {
    fontSize: 15,
    fontWeight: 'bold', 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default OrderInfo;
