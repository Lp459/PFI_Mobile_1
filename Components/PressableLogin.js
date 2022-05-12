import React from 'react';
import { View, StyleSheet , Pressable ,Text} from 'react-native';
import { useState } from 'react';
import { Database } from '../database';
import * as SQLite from 'expo-sqlite';
const db = new Database("Shop")


function PressableLogin({onPress , user , flag}) {
    const [isPressed, setIsPressed] = useState(false);
    db.execute(`UPDATE connexions set loggedin = 1 where usager='${user}'`)
     return (<Pressable style={isPressed ? styles.appuye : styles.pressable}
       onPressIn={() => setIsPressed(true)} onPressOut={() => setIsPressed(false)} onPress={onPress} >
         <Text style={isPressed ? styles.texteAppuye : styles.texteNormal}>{user}{flag}</Text>
     </Pressable>
     )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    color: 'white',
    backgroundColor: '#38f'
  },
  ligneCroisiere: {
    fontSize: 30,
    color: 'white',
    padding: 7,
    margin: 7,
    backgroundColor: 'blue'
  },
  croisiere: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
    padding: 4,
    margin: 4
  },
  pressable: {
    color: 'blue',
    backgroundColor: '#2be',
    padding: 6,
    margin: 4,
    borderRadius: 10
  },
  pressable_text:{
    fontSize:15,

    alignItems: 'center',
  },

  appuye: {
    backgroundColor: '#26e',
    padding: 6,
    margin: 4,
    borderRadius: 10
  },
  texteAppuye: {
    color: 'lightblue',
    fontWeight: 'bold'
  },
  texteNormal: {
    color: 'blue',
    fontWeight: 'bold'
  }
})

export default PressableLogin;