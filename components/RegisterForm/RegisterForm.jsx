import {useDispatch} from "react-redux";
import {registration} from "../../redux/auth/authOperations";
import Toast from 'react-native-toast-message'
import {Formik} from "formik";
import * as Yup from "yup";
import {MainBtn, SecondBtn} from "../CommonComponents/Buttons.styles";
import {AuthFormWrapper, FormError, FormWrapper, Input, InputWrapper, Svg} from "../CommonComponents/authForm.styles";
import {LogoImg, LogoText, LogoWrapper} from "../CommonComponents/Logo.styles";

import {useNavigation} from "@react-navigation/native";
import LogoSvg from "../../assets/icons/Logo";
import React from "react";
import Src3 from "../../assets/icons/Src3";
import Src2 from "../../assets/icons/Src2";
import Src1 from "../../assets/icons/Src1";


const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).required("Required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
});

export const RegisterForm = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (<AuthFormWrapper>
            <LogoWrapper>
                <LogoSvg width={50} height={50} />
                <LogoText>Wallet</LogoText>
            </LogoWrapper>
            <Formik
                initialValues={{name: "", email: "", password: "", confirmPassword: ''}}
                validationSchema={RegisterSchema}
                onSubmit={async (values, {setSubmitting}) => {
                    try {
                        const {confirmPassword, ...result} = values;
                        console.log(result)
                        await dispatch(await registration(result));
                        setSubmitting(false);

                    } catch (e) {
                        console.log(e)
                        Toast.show({
                            type: "error",
                            text1: e.response.data.message
                        })
                    }

                }}
            >
                {({isSubmitting}) => (
                    <FormWrapper>
                        <InputWrapper>
                            <Input type="email" name="email" placeholder="Email"/>

                            {/*<Src3/>*/}

                            <FormError name="email" component="div"/>
                        </InputWrapper>
                        <InputWrapper>
                            <Input type="password" name="password" placeholder="Password"/>

                            {/*<Src2/>*/}

                            <FormError name="password" component="div"/>
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                            />

                            {/*<Src2/>*/}

                            <FormError name="confirmPassword" component="div"/>
                        </InputWrapper>
                        <InputWrapper>
                            <Input type="text" name="name" placeholder="First name"/>

                            {/*<Src1/>*/}

                            <FormError name="name" component="div"/>
                        </InputWrapper>
                        <MainBtn type="submit" disabled={isSubmitting}>
                            Register
                        </MainBtn>
                    </FormWrapper>
                )}
            </Formik>
            <SecondBtn onPress={()=>{navigation.navigate('Login')}}>Login</SecondBtn>
        </AuthFormWrapper>
    )
        ;
};