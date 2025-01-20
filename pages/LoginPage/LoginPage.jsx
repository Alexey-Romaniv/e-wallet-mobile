import {LoginForm} from "../../components/LoginForm/LoginForm";
import {AuthFlexWrapper, AuthWrapper} from "../../components/CommonComponents/authForm.styles";
import {Container} from "../../components/CommonComponents/Container.styles";
import {AuthLogo} from "../../components/AuthLogo/AuthLogo";
import {useNavigation} from "@react-navigation/native";


const LoginPage = () => {
 const navigation = useNavigation()
    return <AuthWrapper>
        <Container>
            <AuthFlexWrapper>
                <AuthLogo page='login'/>
                <LoginForm navigation={navigation}/>
            </AuthFlexWrapper>
        </Container>
    </AuthWrapper>;
};

export default LoginPage;