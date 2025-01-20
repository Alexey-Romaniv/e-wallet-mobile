import {RegisterForm} from "../../components/RegisterForm/RegisterForm";
import {Container} from "../../components/CommonComponents/Container.styles";
import {AuthFlexWrapper, AuthWrapper} from "../../components/CommonComponents/authForm.styles";
import {AuthLogo} from "../../components/AuthLogo/AuthLogo";

const RegisterPage = () => {
  return <AuthWrapper>
    <Container>
      <AuthFlexWrapper>
        <AuthLogo page='register'/>
        <RegisterForm/>
      </AuthFlexWrapper>
    </Container>
  </AuthWrapper>
}

export  default  RegisterPage;