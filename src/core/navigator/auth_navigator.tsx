import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../feature/onboarding/presentation/splash_screen';
import OnboardingScreen1 from '../../feature/onboarding/presentation/onboarding_promo_steps_screen';
import OnboardingLoginSignupScreen from '../../feature/onboarding/presentation/onboarding_login_signup_screen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='OnboardingStepScreen' component={OnboardingScreen1} />
            <Stack.Screen name='LoginSignupScreen' component={OnboardingLoginSignupScreen} />
        </Stack.Navigator>
    );
}
