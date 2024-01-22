import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ButtonApp = ({title}) =>{
    const handlePress = () =>{
        console.log('Clicked');
    };
    return(
        <TouchableOpacity
            activeOpacity="0.6" 
            onPress={handlePress} 
            style={styles.container}>
            <Text style={styles.textContent}> {title} </Text>
        </TouchableOpacity>
    );
};

export default ButtonApp;