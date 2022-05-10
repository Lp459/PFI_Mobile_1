import React from 'react';
import { View, StyleSheet , Text, Pressable, Image } from 'react-native';

function AccueilScreen({navigation, route}) {
    const {userId, nom, admin} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue dans NewEgg!</Text>
            <Image
              style={styles.logo}
              source={require('../assets/newEgg.jpg')}
            />
            <Pressable  style={styles.pressable} 
            onPress={() => navigation.navigate("Login", {/* */})}>
            <Text style={styles.pressable_text}>Login</Text>
       </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressable: {
        color: 'blue',
        backgroundColor: '#2be',
        padding: 6,
        margin: 4,
        borderRadius: 10
    },
    logo: {
        width: 70,
        height: 62
    },
    title: {
        borderRadius: 10,
        color: 'green',
        fontFamily: 'Serif'
    },
    pressable_text: {
        fontSize:15,
        alignItems: 'center',
    }
    
})

export default AccueilScreen;