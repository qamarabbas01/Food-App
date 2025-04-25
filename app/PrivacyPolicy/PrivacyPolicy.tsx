import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const PrivacyPolicy = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="#0a7ea4" />
                </TouchableOpacity>
                <Text style={styles.title}>Privacy Policy</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.sectionTitle}>1. Introduction</Text>
                <Text style={styles.paragraph}>
                    Welcome to our Food App! This Privacy Policy explains how we collect, use, and protect your information when you use our application.
                </Text>

                <Text style={styles.sectionTitle}>2. Information We Collect</Text>
                <Text style={styles.paragraph}>
                    We may collect personal information such as your name, email address, delivery address, and payment details when you place an order or create an account.
                </Text>

                <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
                <Text style={styles.paragraph}>
                    Your information helps us fulfill orders, improve customer service, and send occasional promotional offers. We do not sell your information to third parties.
                </Text>

                <Text style={styles.sectionTitle}>4. Data Security</Text>
                <Text style={styles.paragraph}>
                    We implement standard security measures to safeguard your personal data. However, no method of transmission over the internet is 100% secure.
                </Text>

                <Text style={styles.sectionTitle}>5. Your Rights</Text>
                <Text style={styles.paragraph}>
                    You have the right to access, update, or delete your personal information. Please contact us at support@foodapp.com for any privacy-related requests.
                </Text>

                <Text style={styles.sectionTitle}>6. Changes to This Policy</Text>
                <Text style={styles.paragraph}>
                    We may update this policy occasionally. We encourage users to review this page for any changes. Continued use of the app constitutes acceptance of the new policy.
                </Text>

                <Text style={styles.sectionTitle}>7. Contact Us</Text>
                <Text style={styles.paragraph}>
                    If you have any questions about this Privacy Policy, please contact us at support@foodapp.com.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PrivacyPolicy;

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
    scrollContent: {
        paddingBottom: 40,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#0F172A',
        fontFamily: 'Poppins_700Bold',
        marginTop: 20,
        marginBottom: 6,
        marginLeft: 10
    },
    paragraph: {
        fontSize: 15,
        color: '#475569',
        lineHeight: 22,
        fontFamily: 'Poppins_400Regular',
        marginLeft: 10
    },
});
