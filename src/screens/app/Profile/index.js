import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text } from "react-native";


const Profile = () => {
    return (
        <SafeAreaView>
            <ScrollView style = {styles.container}>
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Profile);