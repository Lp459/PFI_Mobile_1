import React from 'react';
import { View, StyleSheet , Text } from 'react-native';

function AboutScreen(props) {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>À propos de nous</Text>
        <Text>Louis-philippe Rousseau</Text>
        <Text>louis-philippe_rousseau@gmail.com</Text>
        <Text>Alexandre Carle</Text>
        <Text>alexCarle@gmail.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})

export default AboutScreen;