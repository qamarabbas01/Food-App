
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

type FoodItem = {
    id: number;
    title: string;
    price: string;
    image: any;
};

interface FoodDetailProps {
    food: FoodItem | undefined;
}

const FoodDetail: React.FC<FoodDetailProps> = ({ food }) => {
    if (!food) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Food not found</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image source={food.image} style={styles.image} />
            <Text style={styles.title}>{food.title}</Text>
            <Text style={styles.price}>Price: ${food.price}</Text>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailsLabel}>Delivery info:</Text>
                <Text style={styles.detailstext}>Delivery Between Monday to Sanday 8AM to 11PM.</Text>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailsLabel}>Return Policy:</Text>
                <Text style={styles.detailstext}>All our foods are doubled checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => alert('Comming Soon')}>
                <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default FoodDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '50%',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
        fontFamily: 'Poppins_700Bold',
        marginLeft: 12
    },
    price: {
        fontSize: 18,
        color: '#FF5C00',
        fontFamily: 'Poppins_700Bold',
        marginLeft: 12,
    },
    detailsContainer: {
        display: 'flex',
        marginLeft: 12,
        marginTop: 12,
    },
    detailsLabel: {
        fontSize: 23,
        fontFamily: 'Poppins_400Regular',
    },
    detailstext: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: '#94a3b8'
    },
    button: {
        backgroundColor: '#F05A28',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 30,
        margin: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
    },
});
