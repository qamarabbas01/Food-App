import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import * as SplashScreen from 'expo-splash-screen';
import { router } from "expo-router";
import { items } from "../data/foodItems";

SplashScreen.preventAutoHideAsync();
const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof items | "All">("All");

  const categories = ["All", "Foods", "Drinks", "Snacks", "Sauces"];

  const allItems = Object.values(items).flat();

  const displayedItems = activeCategory === "All" ? allItems : items[activeCategory];

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Pacifico_400Regular,
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={24} />
        <Ionicons name="cart-outline" size={24} onPress={() => router.push('/(tabs)/cart')} />
      </View>

      <Text style={[styles.title, { fontFamily: 'Poppins_700Bold' }]}>Delicious{"\n"}food for you</Text>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#aaa" />
        <TextInput placeholder="Search" style={[styles.input, { fontFamily: 'Poppins_400Regular' }]} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >
        {categories.map((cat, index) => (
          <TouchableOpacity key={index} onPress={() => setActiveCategory(cat)}>
            <Text
              style={[
                styles.category,
                activeCategory === cat && styles.activeCategory,
                { fontFamily: 'Poppins_700Bold' }
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {activeCategory === "All" ? (
        <ScrollView contentContainerStyle={styles.gridWrapper}>
          {displayedItems.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              style={styles.gridCard}
              onPress={() => {
                router.push(`/food/${item.id}`);
              }}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={[styles.cardTitle, { fontFamily: 'Poppins_400Regular' }]}>{item.title}</Text>
              <Text style={[styles.price, { fontFamily: 'Poppins_400Regular' }]}>${item.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.gridWrapper}>
          {displayedItems.map((item: any) => (
            <TouchableOpacity
              key={item.id}
              style={styles.gridCard}
              onPress={() => {
                console.log(`Navigating to /food/${item.id}`);
                router.push(`/food/${item.id}`);
              }}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={[styles.cardTitle, { fontFamily: 'Poppins_400Regular' }]}>{item.title}</Text>
              <Text style={[styles.price, { fontFamily: 'Poppins_400Regular' }]}>${item.price}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#F5F5F5"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: '#000'
  },
  categories: {
    flexDirection: "row",
    marginBottom: 20
  },
  category: {
    marginRight: 15,
    fontSize: 16,
    color: "#888",
  },
  activeCategory: {
    color: "#FF5C00",
    borderBottomWidth: 2,
    paddingBottom: 8,
    borderBottomColor: "#FF5C00",
  },
  cardcontainer: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 90,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    width: "48%",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginBottom: 10,
    marginTop: 12,
    borderRadius: 50
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center"
  },
  price: {
    color: "#FF5C00",
    marginTop: 5,
    fontWeight: "bold"
  },
  gridWrapper: {
    display: 'flex',
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 90,
  },
  gridCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    width: "48%",
    alignItems: "center",
  },
});