import React from 'react';
import { View, StyleSheet , Pressable } from 'react-native';

function PressableLogin(props) {
    const [isPressed, setIsPressed] = useState(false);
     return (<Pressable style={isPressed ? styles.appuye : styles.pressable}
       onPressIn={() => setIsPressed(true)} onPressOut={() => setIsPressed(false)}>
         <Text style={isPressed ? styles.texteAppuye : styles.texteNormal}>{user}{flag}</Text>
         {setUser(user)}{setUserConnected(true)} {flag == 1?setAdminConnecter(true):setAdminConnecter(false)}
     </Pressable>
     )
}

const styles = StyleSheet.create({
    container: {
    }
})

export default PressableLogin;