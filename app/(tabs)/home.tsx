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
import { useFonts, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import * as SplashScreen from "expo-splash-screen";
import { items } from "../data/foodItems";
import { router } from "expo-router";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof items | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  const categories = ["All", "Foods", "Drinks", "Snacks", "Sauces"];

  const allItems = Object.values(items).flat();

  const displayedItems = (activeCategory === "All" ? allItems : items[activeCategory]).filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={styles.header}>
        <Ionicons name="menu" size={24} onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        <Ionicons name="notifications-outline" size={24} onPress={() => router.push('/Notifications/Notifications')} />
      </View>

      <Text style={[styles.title, { fontFamily: 'Poppins_700Bold' }]}>Delicious{"\n"}food for you</Text>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#64748B" />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#94A3B8"
          style={[styles.input, { fontFamily: 'Poppins_400Regular' }]}
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >
        {categories.map((cat) => (
          <TouchableOpacity key={cat} onPress={() => setActiveCategory(cat)}>
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

      <ScrollView contentContainerStyle={styles.gridWrapper}>
        {displayedItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.gridCard}
            onPress={() => router.push(`/food/${item.id}`)}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.cardTitle, { fontFamily: 'Poppins_400Regular' }]}>{item.title}</Text>
            <Text style={[styles.price, { fontFamily: 'Poppins_400Regular' }]}>${item.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
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
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#F1F5F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
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
});
