import React from 'react';
import { View, StyleSheet , Pressable ,Text} from 'react-native';
import { useState } from 'react';
function PressableLogin(props) {
    const [isPressed, setIsPressed] = useState(false);
     return (<Pressable style={isPressed ? styles.appuye : styles.pressable}
       onPressIn={() => setIsPressed(true)} onPressOut={() => setIsPressed(false)}>
         <Text style={isPressed ? styles.texteAppuye : styles.texteNormal}>{props.user}{props.flag}</Text>
         
     </Pressable>
     )
}
/* {setUser(props.user)}{setUserConnected(true)} {flag == 1?setAdminConnecter(true):setAdminConnecter(false)}*/
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