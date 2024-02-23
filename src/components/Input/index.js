import React, {useState} from "react";
import { Image, Pressable, Text,TextInput, View } from "react-native";
import { stylesInput } from "./styles";

const Input = ({label, placeholder, isPassword, value, onChangeText}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={stylesInput.container}>
            <Text style={stylesInput.label}> {label} </Text>
            <View style={stylesInput.inputContainer}>
                <TextInput 
                value={value} onChangeText={onChangeText}
                secureTextEntry={isPassword && !isPasswordVisible}
                placeholder={placeholder} 
                style = {stylesInput.input} />
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image
                            style={stylesInput.eye}
                            source={
                                isPasswordVisible
                                ? require('../../assets/eye.png')
                                : require('../../assets/eye_close.png')
                            }
                            />
                    </Pressable>
                ) : null}
            </View>
        </View>
    );
};

export default Input;