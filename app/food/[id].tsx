import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { items } from "../data/foodItems";
import FoodDetail from "@/components/FoodDetail/FoodDetail";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "react-native";
import { useFavorites } from "@/context/FavoritesContext";

const FoodDetailScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const foodId = Number(id);
  const allItems = Object.values(items).flat();
  const food = allItems.find((item) => item.id === foodId);

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  if (!food) {
    return <Text>Food not found</Text>;
  }

  const handleFavoriteToggle = () => {
    if (isFavorite(food.id)) {
      removeFromFavorites(food.id);
    } else {
      addToFavorites(food);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={styles.icons}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.hearto} onPress={handleFavoriteToggle}>
          <AntDesign
            name="heart"
            size={24}
            color={isFavorite(food.id) ? "red" : "white"}
          />
        </TouchableOpacity>
      </View>
      <FoodDetail food={food} />
    </View>
  );
};

export default FoodDetailScreen;

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 10,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 50,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  hearto: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 50,
  },
});