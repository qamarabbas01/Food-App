import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

const Orders = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.actions}>
                <MaterialIcons name="arrow-back-ios" size={24} color="#0a7ea4" onPress={() => router.back()} style={styles.backicon} />
                <Text style={styles.title}>Orders</Text>
            </View>
        </SafeAreaView>
    )
}

export default Orders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular',
    },
    actions: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 120,
        marginTop: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#0F172A"
    },
    backicon: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        fontFamily: 'Poppins_700Bold',
    }
})