import React from "react";
import { Text, View, } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";


const SignUp = () =>{
    return(
        <View style={styles.container}>
            <AuthHeader title="Sign Up" />
            <Input label="Name" placeholder="Example Jonh" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Password" placeholder="*****" />
                                                    
        </View>
    );
};  

export default SignUp;