import React from 'react';
import { View, StyleSheet , Text, Pressable, Image } from 'react-native';
import { Database } from '../database';
import NavScreen from './NavScreen';
import { useState } from 'react';


const db = new Database("Shop");

function AccueilScreen() {
    const [user , setUser] = useState([]);
    
    db.execute("SELECT id , usager , admin FROM connexions where loggedin = 1;")
    .then((resultSet) => {
        setUser(resultSet.rows);
    }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
    //admin
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenue dans NewEgg!</Text>
            <Image
              style={styles.logo}
              source={require('../assets/newEgg.jpg')}
            />
            <Text>Voici une application mobile qui est semblable à 
             dont vous pouvez acheter des composants d'appareils électronique.
            </Text>
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
        
    },
    pressable_text: {
        fontSize:15,
        alignItems: 'center',
    }
    
})

export default AccueilScreen;