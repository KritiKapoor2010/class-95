import React from "react";
import { Text,View,StyleSheet } from "react-native";

export default class Logout extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>logout</Text>
            </View>
        )

    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        
    }
})
//two touchable opacity button ,