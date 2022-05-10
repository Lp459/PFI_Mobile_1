import React from 'react';
import { View, StyleSheet  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AcceuilScreen from './AcceuilScreen';
import PressableLogin from './PressableLogin';
import NavScreen from './NavScreen';

const Stack = createNativeStackNavigator();

function LoginScreen(props) {
    const [connexions , setConnexion] = useState([]);
    db.execute("select * from connexions;")
    .then((resultSet) => {
        setConnexion(resultSet.rows)
    }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Connexion" component={AllConnexions} 
            options={{headerTitle: (props) => <View/>}}/>
            <Stack.Screen name="Acceuil" component={AcceuilScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
        
    );
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
  });


export default LoginScreen;