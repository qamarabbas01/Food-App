import { StyleSheet, View, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#000"
        translucent={false}
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.2,
            borderRadius:30
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={30} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="search"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Octicons name="search" size={25} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="notification"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Octicons name="heart" size={25} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="cart"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="cart-outline" size={29} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({});