import React from "react";
import { Text,View,StyleSheet } from "react-native";

export default class Signin extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>signin</Text>
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
//2 text input for password and email, onpress sumbit button 