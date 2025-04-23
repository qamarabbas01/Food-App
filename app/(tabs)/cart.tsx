import { SafeAreaView, StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Veggie Tomato Mix', price: 13, image: require('../../assets/images/food.avif') },
    { id: 2, title: 'Cheese Burger', price: 10, image: require('../../assets/images/food2.avif') },
    { id: 3, title: 'Jollof Rice & Chicken', price: 11, image: require('../../assets/images/food3.avif') },
    { id: 4, title: "Fresh Orange Juice", price: 10, image: require("../../assets/images/drink1.avif")},
    { id: 5, title: "Chilled Coca-Cola", price: 20, image: require("../../assets/images/drink2.avif")},
    { id: 6, title: "Tomato Sauce", price: 50, image: require("../../assets/images/sauce1.avif")},
    { id: 1, title: "French Fries", price: 80, image: require("../../assets/images/snack1.avif")},
  ]);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cart</Text>

      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              </View>
              <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={styles.emptyCart}>Your cart is empty. Add some delicious food!</Text>
      )}

      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalText}>Total: ${totalPrice}</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins_700Bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Poppins_400Regular',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Poppins_400Regular',
  },
  removeButton: {
    padding: 8,
    backgroundColor: '#ff5c5c',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins_700Bold',
  },
  emptyCart: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Poppins_400Regular',
  },
  footer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Poppins_700Bold',
  },
  checkoutButton: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
  },
});