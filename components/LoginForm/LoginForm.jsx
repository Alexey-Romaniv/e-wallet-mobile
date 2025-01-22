import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/authOperations";
import { MainBtn, SecondBtn } from "../CommonComponents/Buttons.styles";
import { Formik } from "formik";
import { Text } from "react-native";
import * as Yup from "yup";
import {
    AuthFormWrapper,
    FormError,
    FormWrapper,
    Input,
    InputWrapper,
} from "../CommonComponents/authForm.styles";
import { LogoText, LogoWrapper } from "../CommonComponents/Logo.styles";
import { selectError } from "../../redux/auth/authSelectors";
import LogoSvg from "../../assets/icons/Logo";
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
                    console.log("Form submitted with values:", values); // Проверка вызова onSubmit
                    try {
                        dispatch(login(values));
                    } catch (e) {
                        console.error("Error during login:", e.message);
                    } finally {
                        resetForm();
                    }
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                    <FormWrapper>
                        <InputWrapper>
                            <Input
                                placeholder="Email"
                                placeholderTextColor="#E0E0E0"
                                autoCapitalize="none"
                                value={values.email} // Связь с состоянием
                                onChangeText={handleChange("email")} // Отслеживание изменений
                                onBlur={handleBlur("email")} // Отслеживание ухода из поля
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
                        <MainBtn onPress={handleSubmit} disabled={isSubmitting}>
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
