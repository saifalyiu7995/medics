import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth_navigator";

export default function RootNavigator() {
    const isLoggedIn = false; //Replace it with redux

    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
}