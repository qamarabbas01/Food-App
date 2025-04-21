import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons, FontAwesome5, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const Sidebar = ({ navigation }: any) => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.link} onPress={() => router.push("/(tabs)/home")}>
        <Ionicons name="home-outline" size={24} color="#fff" />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => console.log('click')}>
        <Ionicons name="person-circle-outline" size={24} color="#fff" />
        <Text style={styles.text}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => console.log('click')}>
        <Ionicons name="cart-outline" size={24} color="#fff" />
        <Text style={styles.text}>Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => console.log('click')}>
        <FontAwesome5 name="tag" size={20} color="#fff" />
        <Text style={styles.text}>Offer and Promo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => console.log('click')}>
        <MaterialIcons name="privacy-tip" size={22} color="#fff" />
        <Text style={styles.text}>Privacy Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => console.log('click')}>
        <Feather name="shield" size={22} color="#fff" />
        <Text style={styles.text}>Security</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity style={styles.signOut} onPress={() => console.log('click')
      }>
        <Text style={styles.text}>Sign out</Text>
        <Ionicons name="arrow-forward-outline" size={18} color="#fff" />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5C00",
    padding: 10,
    width: 400,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 15,
    fontFamily: "Poppins_700Bold",
  },
  signOut: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  spacer: {
    flexGrow: 1,
  },
});

export default Sidebar;
