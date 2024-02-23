import React, { useState } from "react";
import { Text, View, } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";


const SignIn = ({navigation}) =>{
    const onSignUp = () => {
        navigation.navigate('SignUp');
    };

    const onBack = () => {
        navigation.goBack(); 
    };
    return(
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="******" />
            <Button style={styles.button} title="Sign In"></Button>
        
            <Separator text="Or sign in with"></Separator>
            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>
                Don't have an account? 
                <Text onPress={onSignUp} style={styles.footerLink}>
                    {' '}
                    Sign Up
                </Text>
            </Text>
                                                    
        </View>
    );
};  

export default SignIn;