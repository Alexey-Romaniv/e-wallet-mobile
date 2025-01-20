import {AuthLogoText} from "./AuthLogo.styles";
import {View} from "react-native";

export const AuthLogo = ({page}) => {

    return <View>
        <AuthLogoText key={page} page={page}>Finance App</AuthLogoText>
    </View>
}