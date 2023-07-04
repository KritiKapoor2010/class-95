import React from "react";
import { Text,View,StyleSheet } from "react-native";

export default class CreatePost extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>create post </Text>
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
//crate a wireframe, text ,image (touachable opacity) textinput , GET image from google