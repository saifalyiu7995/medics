import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { images } from '../../../assets/images/index';

export default function SplashScreen() {
    const LogoSvg = images.LogoSvg;
    const navigation = useNavigation<any>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('OnboardingStepScreen');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#199A8E',
            }}>
            <LogoSvg width={120} height={120} />
            <Text
                style={{
                    color: 'white',
                    fontSize: 35,
                    fontWeight: 'bold',
                    fontFamily: 'Montserrat-Bold',
                    marginTop: 10,
                }}
            >Medics</Text>
        </View>
    );
}
