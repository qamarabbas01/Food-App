import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#0a7ea4" onPress={() => router.back()} style={styles.title} />

            <Text style={styles.title}>My Profile</Text>
            <View style={styles.card}>
                <Image
                    source={require('../../assets/images/food.avif')}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.email}>johndoe@example.com</Text>
            </View>

            <TouchableOpacity
                style={styles.link}
                accessibilityRole="button"
                onPress={() => router.push('/Orders/Orders')}
            >
                <MaterialIcons name="home" size={24} color="#0a7ea4" />
                <Text style={styles.linkText}>Orders</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.link}
                accessibilityRole="button"
            >
                <MaterialIcons name="pending-actions" size={24} color="#0a7ea4" />
                <Text style={styles.linkText}>Pending reviews</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.link}
                accessibilityRole="button"
            >
                <MaterialIcons name="question-answer" size={24} color="#0a7ea4" />
                <Text style={styles.linkText}>Faq</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.link}
                accessibilityRole="button"
            >
                <MaterialIcons name="help" size={24} color="#0a7ea4" />
                <Text style={styles.linkText}>Help</Text>
            </TouchableOpacity>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.logoutButton]}>
                    <Text style={[styles.buttonText, styles.logoutButtonText]}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 12,
        textAlign: 'left',
        fontFamily: 'Poppins_700Bold',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'Poppins_700Bold',
    },
    email: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'Poppins_400Regular',
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    linkText: {
        color: '#0a7ea4',
        fontSize: 18,
        marginLeft: 10,
        fontFamily: 'Poppins_700Bold',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: '#0a7ea4',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Poppins_700Bold',
    },
    logoutButton: {
        backgroundColor: '#ff5c5c',
    },
    logoutButtonText: {
        color: '#fff',
    },
});