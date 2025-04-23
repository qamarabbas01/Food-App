import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';

const Favorite = () => {
  const favoriteItems = [
    { id: 1, title: "Veggie Tomato Mix", price: 1900, image: require("../../assets/images/food1.jpg") },
    { id: 3, title: "Grilled Beef", price: 3000, image: require("../../assets/images/food3.avif") },
    { id: 6, title: "Chin Chin", price: 500, image: require("../../assets/images/snack6.avif") },
    { id: 4, title: "Garlic Mayo", price: 600, image: require("../../assets/images/sauce4.avif") },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorites</Text>

      {favoriteItems.length > 0 ? (
        <ScrollView contentContainerStyle={styles.gridWrapper}>
          {favoriteItems.map((item) => (
            <View key={item.id} style={styles.gridCard}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toLocaleString()}</Text>
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.emptyMessage}>You have no favorite items yet!</Text>
      )}
    </SafeAreaView>
  );
};

export default Favorite;

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
  gridWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  gridCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 50,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
  },
  price: {
    color: '#FF5C00',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Poppins_400Regular',
  },
});