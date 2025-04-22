import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const SidebarLink = ({ icon, label, onPress, IconComponent }: any) => (
  <TouchableOpacity
    style={styles.link}
    onPress={onPress}
    accessibilityLabel={label}
    accessibilityRole="button"
  >
    <IconComponent name={icon} size={23} color="#fff" />
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const Sidebar = ({ navigation }: any) => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.closeDrawer()}
        accessibilityLabel="Close Sidebar"
        accessibilityRole="button"
      >
        <Ionicons name="close-outline" size={28} color="#fff" />
      </TouchableOpacity>
      <SidebarLink
        icon="person-circle-outline"
        label="Profile"
        IconComponent={Ionicons}
      />
      <SidebarLink
        icon="shoppingcart"
        label="Orders"
        IconComponent={AntDesign}
      />
      <SidebarLink
        icon="tago"
        label="Offer and Promo"
        IconComponent={AntDesign}
      />
      <SidebarLink
        icon="privacy-tip"
        label="Privacy Policy"
        IconComponent={MaterialIcons}
      />
      <SidebarLink
        icon="security"
        label="Security"
        IconComponent={MaterialIcons}
      />

      <View style={styles.spacer} />

      <TouchableOpacity
        style={styles.signOut}
        onPress={() => console.log("Sign out")}
        accessibilityLabel="Sign out"
        accessibilityRole="button"
      >
        <Text style={styles.text}>Sign out</Text>
        <AntDesign name="arrowright" size={20} color="#fff" />
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF5C00",
    padding: 15,
    width: 330,
  },
  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 50
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 15,
    fontFamily: "Poppins_700Bold",
  },
  signOut: {
    display:'flex',
    alignItems:'center',
    flexDirection: "row",
    gap: 6,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  spacer: {
    flexGrow: 1,
  },
});

export default Sidebar;