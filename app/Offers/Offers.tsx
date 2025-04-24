import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Offers = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="#0a7ea4" />
                </TouchableOpacity>
                <Text style={styles.title}>Offers</Text>
            </View>


            <View style={styles.content}>
                <AntDesign name="frowno" size={120} color="#CBD5E1" style={styles.cartIcon} />
                <Text style={styles.emptyText}>ohh snap! No Offers yet</Text>
                <Text style={styles.subText}>Don't have any Offers yet please try again.</Text>
            </View>
        </SafeAreaView>
    );
};

export default Offers;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },
    backButton: {
        position: 'absolute',
        left: 20,
        padding: 5,
        zIndex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0a7ea4',
        fontFamily: 'Poppins_700Bold',
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    cartIcon: {
        marginBottom: 20,
    },
    emptyText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0F172A',
        fontFamily: 'Poppins_700Bold',
        marginBottom: 8,
    },
    subText: {
        fontSize: 16,
        color: '#64748B',
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular',
    },
});
