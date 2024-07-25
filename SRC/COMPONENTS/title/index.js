import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.BoxTitle}>
            <Text style={styçes.texTitle}>ONBITHEALTH...</Text>
            <Text>25/07/24...</Text>
            <Text>Aula 02 parte 3 </Text>
        </View>
    );
}