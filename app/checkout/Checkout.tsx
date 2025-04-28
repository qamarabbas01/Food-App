import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useLocalSearchParams } from 'expo-router';
import CustomModal from '@/components/Modal/Modal';

const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState('card');
    const [selectedDelivery, setSelectedDelivery] = useState('door');
    const [modalVisible, setModalVisible] = useState(false);
    const { total } = useLocalSearchParams();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <MaterialIcons name="arrow-back-ios" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Checkout</Text>
            </View>

            <Text style={styles.sectionTitle}>Payment</Text>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Payment Method</Text>
                <View>
                    <TouchableOpacity
                        style={styles.optionRow}
                        onPress={() => setSelectedPayment('card')}>
                        <View style={styles.radioCircle}>
                            {selectedPayment === 'card' && <View style={styles.radioDot} />}
                        </View>
                        <MaterialIcons name="credit-card" size={28} color="#0a7ea4" style={styles.icon} />
                        <Text style={styles.optionText}>Credit Card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.optionRow}
                        onPress={() => setSelectedPayment('wallet')}>
                        <View style={styles.radioCircle}>
                            {selectedPayment === 'wallet' && <View style={styles.radioDot} />}
                        </View>
                        <MaterialIcons name="account-balance-wallet" size={28} color="#0a7ea4" style={styles.icon} />
                        <Text style={styles.optionText}>Wallet</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.sectionTitle}>Delivery</Text>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Delivery Method</Text>
                <View>
                    <TouchableOpacity
                        style={styles.optionRow}
                        onPress={() => setSelectedDelivery('door')}>
                        <View style={styles.radioCircle}>
                            {selectedDelivery === 'door' && <View style={styles.radioDot} />}
                        </View>
                        <MaterialCommunityIcons name="truck-delivery" size={26} color="#0a7ea4" style={styles.icon} />
                        <Text style={styles.optionText}>Door Delivery</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.optionRow}
                        onPress={() => setSelectedDelivery('pickup')}>
                        <View style={styles.radioCircle}>
                            {selectedDelivery === 'pickup' && <View style={styles.radioDot} />}
                        </View>
                        <MaterialCommunityIcons name="car-pickup" size={26} color="#0a7ea4" style={styles.icon} />
                        <Text style={styles.optionText}>Pick Up</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.total}>
                <Text style={styles.sectionTitle}>Total</Text>
                <Text style={styles.sectionTitle}>${total}</Text>
            </View>

            <TouchableOpacity
                style={styles.checkoutButton}
            >
                <Text style={[styles.checkoutButtonText, { fontFamily: 'Poppins_700Bold' }]} onPress={() => setModalVisible(true)}>Proceed to Payment</Text>
            </TouchableOpacity>

            <CustomModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onConfirm={() => {
                    setModalVisible(false);
                    console.log('Payment confirmed');
                }}
                title="Payment Confirmation"
                message="Are you sure you want to proceed with the payment?"
            />
        </SafeAreaView>
    );
};

export default Checkout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f8fa',
    },
    header: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 20,
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
        fontFamily: 'Poppins_700Bold',
    },
    sectionTitle: {
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
        marginHorizontal: 20,
        marginBottom: 10,
        color: '#333',
    },
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontFamily: 'Poppins_500Medium',
        marginBottom: 12,
        color: '#555',
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    icon: {
        marginLeft: 12,
    },
    optionText: {
        fontSize: 16,
        marginLeft: 12,
        fontFamily: 'Poppins_400Regular',
        color: '#333',
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#0a7ea4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioDot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#0a7ea4',
    },
    total: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },

    checkoutButton: {
        backgroundColor: 'red',
        paddingVertical: 18,
        marginHorizontal: 40,
        borderRadius: 50,
        marginTop: 12
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins_700Bold',
        textAlign: 'center'
    },
});
