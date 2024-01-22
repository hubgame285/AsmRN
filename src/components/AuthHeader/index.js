import React from "react";
import { Text, View, Image, Pressable} from "react-native";
import { stylesAHeader } from "./styles";


const AuthHeader = ({title, onBackPress}) =>{
    return(
        <View style={stylesAHeader.container}>
            <Pressable onBackPress={onBackPress}>
                <Image
                    style={stylesAHeader.iconBack}
                    source={require('../../assets/icons/icon_back.png')}></Image>
            </Pressable>
            <Text style = {stylesAHeader.title}>{title}</Text>
        </View>
    );
};

export default AuthHeader;