import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/authOperations";
import { MainBtn, SecondBtn } from "../CommonComponents/Buttons.styles";
import { Formik } from "formik";
import { SvgUri } from "react-native-svg";
import {Text} from "react-native";
import * as Yup from "yup";
import {
    AuthFormWrapper,
    FormError,
    FormWrapper,
    Input,
    InputWrapper,
    Svg,
} from "../CommonComponents/authForm.styles";
import { LogoImg, LogoText, LogoWrapper } from "../CommonComponents/Logo.styles";
import { selectError } from "../../redux/auth/authSelectors";
import LogoSvg from "../../assets/icons/Logo";

import {Image} from "react-native";
import Src3 from "../../assets/icons/Src3";
import Src2 from "../../assets/icons/Src2";

export const LoginForm = ({ navigation }) => {
    const dispatch = useDispatch();
    const errorMessage = useSelector(selectError);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(6).required("Required"),
    });

    return (
        <AuthFormWrapper>
            <LogoWrapper>
                <LogoSvg width={50} height={50} />
                <LogoText>Wallet</LogoText>
            </LogoWrapper>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values, { resetForm }) => {
                    try {
                        console.log(values)
                        dispatch(login(values));
                    } catch (e) {
                        console.log(errorMessage);
                        console.log(e.message);
                    } finally {
                        resetForm();
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <FormWrapper>
                        <InputWrapper>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                placeholderTextColor="#E0E0E0"
                            />
                            <Src3 width={25} height={25} style={{ fill: '#E0E0E0', position: "absolute", top:2, left:2 }} />
                            <FormError name="email" component="div" />
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                placeholderTextColor="#E0E0E0"
                                secureTextEntry
                            />
                            <Src2 width={25} height={25} style={{ fill: '#E0E0E0', position: "absolute", top:2, left:2 }} />
                            <FormError name="password" component="div" />
                        </InputWrapper>
                        <MainBtn type="submit" disabled={isSubmitting}>
                            <Text>Login</Text>
                        </MainBtn>
                    </FormWrapper>
                )}
            </Formik>
            <SecondBtn onPress={() => navigation.navigate("Register")}>
                <Text>Register</Text>
            </SecondBtn>
        </AuthFormWrapper>
    );
};
