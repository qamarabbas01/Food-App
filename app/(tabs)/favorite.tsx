import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useFavorites } from "@/context/FavoritesContext";
import { useRouter } from "expo-router";

const Favorite = () => {
  const { favoriteItems } = useFavorites();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorites</Text>

      {favoriteItems.length > 0 ? (
        <ScrollView contentContainerStyle={styles.gridWrapper}>
          {favoriteItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.gridCard}
              onPress={() => router.push(`/food/${item.id}`)}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </TouchableOpacity>
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
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  gridWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  gridCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 50,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  price: {
    color: "#FF5C00",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  emptyMessage: {
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
    marginTop: 50,
    fontFamily: "Poppins_400Regular",
  },
});