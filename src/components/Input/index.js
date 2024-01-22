import React, {useState} from "react";
import { Text,TextInput, View } from "react-native";
import { stylesInput } from "./styles";

const Input = ({label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={stylesInput.container}>
            <Text style={stylesInput.label}> {label} </Text>
            <View style={stylesInput.inputContainer}>
                <TextInput placeholder={placeholder} style = {stylesInput.input} />
            </View>
        </View>
    );
};

export default Input;