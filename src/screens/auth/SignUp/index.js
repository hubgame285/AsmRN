import React, { useState } from "react";
import { Text, View, } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";


const SignUp = ({navigation}) =>{
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        navigation.navigate('SignIn');
    };
    const onBack = () => {
        navigation.goBack(); 
    };
    return(
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up" />
            <Input label="Name" placeholder="Example Jonh" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="******" />
            <View style={styles.checkRow}>
                <Checkbox checked={checked} onCheck={setChecked}></Checkbox>
                <Text style={styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style={styles.button} title="Sign Up"></Button>
            <Separator text="Or sign up with"></Separator>
            <GoogleLogin></GoogleLogin>

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}>
                    Sign In
                </Text>
            </Text>
                                                    
        </View>
    );
};  

export default SignUp;