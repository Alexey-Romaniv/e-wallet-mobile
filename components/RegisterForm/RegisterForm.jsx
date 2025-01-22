import React from "react";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/auth/authOperations";
import { Formik } from "formik";
import * as Yup from "yup";
import { MainBtn, SecondBtn } from "../CommonComponents/Buttons.styles";
import {
    AuthFormWrapper,
    FormError,
    FormWrapper,
    Input,
    InputWrapper,
} from "../CommonComponents/authForm.styles";
import { LogoText, LogoWrapper } from "../CommonComponents/Logo.styles";
import LogoSvg from "../../assets/icons/Logo";
import { useNavigation } from "@react-navigation/native";
import Src3 from "../../assets/icons/Src3";
import Src2 from "../../assets/icons/Src2";
import Src1 from "../../assets/icons/Src1";
import Toast from "react-native-toast-message";
import { Text } from "react-native";

// Валидационная схема
const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <AuthFormWrapper>
            <LogoWrapper>
                <LogoSvg width={50} height={50} />
                <LogoText>Wallet</LogoText>
            </LogoWrapper>
            <Formik
                initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
                validationSchema={RegisterSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    try {
                        const { confirmPassword, ...result } = values; // Исключаем confirmPassword
                        console.log("Submitting registration with:", result);
                        await dispatch(registration(result));
                        Toast.show({
                            type: "success",
                            text1: "Registration successful!",
                        });
                        resetForm(); // Сбрасываем форму после успешной регистрации
                        navigation.navigate("Login");
                    } catch (error) {
                        console.error("Error during registration:", error);
                        Toast.show({
                            type: "error",
                            text1: "Registration failed",
                            text2: error?.response?.data?.message || "Unknown error occurred",
                        });
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                    <FormWrapper>
                        <InputWrapper>
                            <Input
                                placeholder="First Name"
                                placeholderTextColor="#E0E0E0"
                                value={values.name}
                                onChangeText={handleChange("name")}
                                onBlur={handleBlur("name")}
                            />
                            <Src1 width={25} height={25} style={{ fill: "#E0E0E0", position: "absolute", top: 2, left: 2 }} />
                            {touched.name && errors.name && <FormError>{errors.name}</FormError>}
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                placeholder="Email"
                                placeholderTextColor="#E0E0E0"
                                autoCapitalize="none"
                                value={values.email}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                            />
                            <Src3 width={25} height={25} style={{ fill: "#E0E0E0", position: "absolute", top: 2, left: 2 }} />
                            {touched.email && errors.email && <FormError>{errors.email}</FormError>}
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                placeholder="Password"
                                placeholderTextColor="#E0E0E0"
                                secureTextEntry
                                value={values.password}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                            />
                            <Src2 width={25} height={25} style={{ fill: "#E0E0E0", position: "absolute", top: 2, left: 2 }} />
                            {touched.password && errors.password && <FormError>{errors.password}</FormError>}
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                placeholder="Confirm Password"
                                placeholderTextColor="#E0E0E0"
                                secureTextEntry
                                value={values.confirmPassword}
                                onChangeText={handleChange("confirmPassword")}
                                onBlur={handleBlur("confirmPassword")}
                            />
                            <Src2 width={25} height={25} style={{ fill: "#E0E0E0", position: "absolute", top: 2, left: 2 }} />
                            {touched.confirmPassword && errors.confirmPassword && <FormError>{errors.confirmPassword}</FormError>}
                        </InputWrapper>
                        <MainBtn onPress={handleSubmit} disabled={isSubmitting}>
                            <Text>Register</Text>
                        </MainBtn>
                    </FormWrapper>
                )}
            </Formik>
            <SecondBtn onPress={() => navigation.navigate("Login")}>
                <Text>Login</Text>
            </SecondBtn>
        </AuthFormWrapper>
    );
};
