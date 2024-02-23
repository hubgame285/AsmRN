import React from "react";
import { styles } from "./styles";
import { Text, View } from "react-native";

const Separator = ({text}) =>{
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line} />
        </View>
    )
}

export default React.memo(Separator);