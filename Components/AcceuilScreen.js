import React from 'react';
import { View, StyleSheet , Text, Pressable } from 'react-native';

function AcceuilScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Magasin!</Text>
            <Pressable  style={styles.pressable} 
            onPress={() => navigation.navigate("LoginScreen", {/* */})}>
            <Text style={styles.pressable_text}>Login</Text>
       </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    pressable: {
        color: 'blue',
        backgroundColor: '#2be',
        padding: 6,
        margin: 4,
        borderRadius: 10
      }
    
})

export default AcceuilScreen;