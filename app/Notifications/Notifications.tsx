import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Notifications = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="#0a7ea4" />
                </TouchableOpacity>
                <Text style={styles.title}>Notifications</Text>
            </View>

            <View style={styles.content}>
                <MaterialIcons name="notifications-off" size={100} color="#94a3b8" />
                <Text style={styles.message}>No new notifications yet</Text>
                <Text style={styles.subText}>We'll let you know when something important comes up.</Text>
            </View>
        </SafeAreaView>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        marginBottom: 10,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 0,
        padding: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0a7ea4',
        fontFamily: 'Poppins_700Bold',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    message: {
        fontSize: 20,
        color: '#334155',
        fontFamily: 'Poppins_700Bold',
        marginTop: 20,
    },
    subText: {
        fontSize: 14,
        color: '#64748b',
        textAlign: 'center',
        fontFamily: 'Poppins_400Regular',
        marginTop: 10,
    },
});
