import React from 'react';
import { View, StyleSheet  } from 'react-native';
import Stack from 'stack';
import AcceuilScreen from './AcceuilScreen';
import PressableLogin from './PressableLogin';
import App from '../App';
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
const AllConnexions = ({navigation}) => {
    return  <View  style={styles.container}>
    {connexions.map((n)=><PressableLogin onPress={() => { navigation.navigate("Acceuil", {userID: n.userID, name: n.nom, admin: n.admin}) , setView(NavScreen)}} user={n.user} motdepasse={n.motdepasse} flag={n.admin}></PressableLogin>)}
    </View>
  }
const styles = StyleSheet.create({
    container: {
    }
})

export default LoginScreen;