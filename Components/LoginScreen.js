import React from 'react';
import { View, StyleSheet  } from 'react-native';
import PressableLogin from './PressableLogin';

function LoginScreen(props) {
    return (
        <View style={styles.container}>{connexions.map((n)=><PressableLogin user={n.user} motdepasse={user.motdepasse} flag={n.flag}></PressableLogin>)}</View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})

export default LoginScreen;