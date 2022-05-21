import React  from 'react';
import { View, StyleSheet , Text } from 'react-native';
import { Pressable } from 'react-native';
import { useState } from 'react';
function BoutonAcheter({idUser , idObjet , onPress}) {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <View style={styles.container}>
            <Pressable
                style={isPressed ? styles.appuye : styles.pressable}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={onPress}
                >
                <Text style={isPressed ? styles.texteAppuye : styles.texteNormal}>
                    Ajouter au Panier
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    appuye:{
        backgroundColor: "#26e",
        padding: 6,
        margin: 4,
        borderRadius: 10,
    },
    pressable: {
    color: "blue",
    backgroundColor: "#2be",
    padding: 6,
    margin: 4,
    borderRadius: 10,
    },
})

export default BoutonAcheter;