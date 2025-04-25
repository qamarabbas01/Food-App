import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const Security = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="#0a7ea4" />
                </TouchableOpacity>
                <Text style={styles.title}>Security</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.sectionTitle}>1. Account Protection</Text>
                <Text style={styles.paragraph}>
                    Keep your password confidential and use a strong password to prevent unauthorized access to your account.
                </Text>

                <Text style={styles.sectionTitle}>2. Secure Payments</Text>
                <Text style={styles.paragraph}>
                    We use trusted third-party payment processors with industry-standard encryption to protect your payment information.
                </Text>

                <Text style={styles.sectionTitle}>3. Data Encryption</Text>
                <Text style={styles.paragraph}>
                    All sensitive information is encrypted both in transit and at rest to ensure your data is always secure.
                </Text>

                <Text style={styles.sectionTitle}>4. Device Safety</Text>
                <Text style={styles.paragraph}>
                    We recommend keeping your app and device software up to date to benefit from the latest security patches.
                </Text>

                <Text style={styles.sectionTitle}>5. Suspicious Activity</Text>
                <Text style={styles.paragraph}>
                    If you notice any suspicious activity on your account, please contact us immediately at security@foodapp.com.
                </Text>

                <Text style={styles.sectionTitle}>6. Updates</Text>
                <Text style={styles.paragraph}>
                    We regularly update our systems and policies to improve security and protect your personal data.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Security;

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
    },
    paragraph: {
        fontSize: 15,
        color: '#475569',
        lineHeight: 22,
        fontFamily: 'Poppins_400Regular',
    },
});
