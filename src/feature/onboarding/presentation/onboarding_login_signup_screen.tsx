import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { images } from "../../../assets/images";
import { inter18Regular, inter24Bold } from "../../../theme/fonts";


export default function OnboardingLoginSignupScreen() {

    return (

        <SafeAreaView style={style.safeArea}>
            <View
                style={style.container}>
                <Image source={images.LogoGreen} style={style.logo}></Image>
                <Text style={style.letStarted}>Let's get started!</Text>
                <Text style={style.desc}>Login to enjoy the features we’ve provided, and stay healthy!</Text>
                <TouchableOpacity style={style.loginButton}>
                    <Text style={style.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.signupButton}>
                    <Text style={style.signupButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 110,
        width: 110,
    },
    letStarted: {
        color: '#000000',
        fontSize: 24,
        fontFamily: inter24Bold,
        ...(Platform.OS === 'ios' ? { fontWeight: '700' as const } : {}),
        marginTop: 40,
        marginBottom: 10,
    },
    desc: {
        color: '#717784',
        fontSize: 18,
        fontFamily: inter18Regular,
        ...(Platform.OS === 'ios' ? { fontWeight: '400' as const } : {}),
        marginBottom: 30,
        marginHorizontal: 50,
        textAlign: 'center'
    },
    loginButton: {
        backgroundColor: '#199A8E',
        height: 55,
        width: '70%',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: inter18Regular,
    },
    signupButton: {
        backgroundColor: '#fff',
        borderColor: '#199A8E',
        borderWidth: 1,
        height: 55,
        width: '70%',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupButtonText: {
        color: '#199A8E',
        fontSize: 18,
        fontWeight: '500',
        fontFamily: inter18Regular,
    },

});