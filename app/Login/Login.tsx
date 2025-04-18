import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Platform,
    KeyboardAvoidingView,
} from 'react-native';

const AuthScreen = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleAuth = () => {
        if (!email.trim()) {
            alert('Enter your email');
            return;
        }

        if (!password.trim()) {
            alert('Enter your password');
            return;
        }

        if (!isLogin) {
            if (!confirmPassword.trim()) {
                alert('Confirm your password');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            console.log('Signing up user:', email);
            router.push('/(tabs)/home');
        } else {
            console.log('Logging in user:', email, password);
            router.push('/(tabs)/home');
        }
    };

    return (
        <SafeAreaView style={styles.safe}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.container}
            >
                <View style={styles.card}>
                    <Image
                        source={require('../../assets/images/chef-icon.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />

                    <View style={styles.tabContainer}>
                        <TouchableOpacity onPress={() => setIsLogin(true)}>
                            <Text style={[styles.tabText, isLogin && styles.activeTab]}>Login</Text>
                            {isLogin && <View style={styles.underline} />}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsLogin(false)}>
                            <Text style={[styles.tabText, !isLogin && styles.activeTab]}>Sign-up</Text>
                            {!isLogin && <View style={styles.underline} />}
                        </TouchableOpacity>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.label}>Email address</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="example@email.com"
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />

                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="********"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        {!isLogin && (
                            <>
                                <Text style={styles.label}>Confirm Password</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="********"
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry
                                />
                            </>
                        )}

                        {isLogin && (
                            <TouchableOpacity>
                                <Text style={styles.forgot}>Forgot passcode?</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity style={styles.button} onPress={handleAuth}>
                            <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 30,
        alignItems: 'center',
        justifyContent:'center',
        elevation: 5,
        height:600
    },
    logo: {
        height: 100,
        width: 100,
        marginBottom: 20,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    tabText: {
        fontSize: 18,
        fontFamily:'Poppins_400Regular',
        fontWeight: '600',
        color: '#999',
    },
    activeTab: {
        color: '#F05A28',
    },
    underline: {
        height: 3,
        backgroundColor: '#F05A28',
        marginTop: 5,
        borderRadius: 10,
    },
    form: {
        width: '100%',
        marginTop: 10,
    },
    label: {
        color: '#888',
        marginBottom: 5,
        fontSize: 14,
        fontWeight: '500',
        fontFamily:'Poppins_400Regular',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        marginBottom: 20,
        paddingVertical: 8,
        fontSize: 16,
        fontFamily:'Poppins_400Regular',
    },
    forgot: {
        alignSelf: 'flex-end',
        color: '#F05A28',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#F05A28',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontFamily:'Poppins_700Bold',
        fontSize: 18,
    },
});
