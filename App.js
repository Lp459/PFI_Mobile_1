import { StyleSheet, Text, View , FlatList , Pressable, Button } from 'react-native';
import {Database} from "./database";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Fontisto } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import AdminScreen from './Components/AdminScreen';
import AcceuilScreen from './Components/AcceuilScreen';
import AboutScreen  from './Components/AboutScreen';
import FindUsScreen from './Components/FindUsScreen';
import LoginScreen  from './Components/LoginScreen';
import PressableLogin from './Components/PressableLogin';
import ProduitsScreen from './Components/ProduitsScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { render } from 'react-dom';
const db = new Database("Shop");
const Stack = createNativeStackNavigator();
function init_tab(){
  db.execute("DROP TABLE IF EXISTS produits;");
  db.execute("CREATE TABLE produits (id, nom, prix, image);");
  db.execute("DROP TABLE IF EXISTS connexions;");
  db.execute("CREATE TABLE connexions (id , usager, motdepasse, admin);");

  db.execute("INSERT INTO produits VALUES (?, ?, ?, ?);", [1, 'Pain 800g', 10, 'image.jpg']);
  db.execute("INSERT INTO connexions VALUES (?, ?, ?, ?);", [1, 'LPR', '123456', 1]);
}
init_tab();



export default function App() {
  const [connexions , setConnexion] = useState([]);
  const [produits, setProduits] = useState([]);
  const [userConnected , setUserConnected] = useState(false);
  const [nomUser , setUser] = useState();
  const [erreur , setErreur] = useState();
  const [adminConnecter , setAdminConnecter] = useState(false);
  
  db.execute("select * from produits;")
    .then((resultSet) => {
        setProduits(resultSet.rows)
    }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
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
  const [connexions , setConnexion] = useState([]);
  const [erreur , setErreur] = useState();
  db.execute("select usager , admin from connexions;")
  .then((resultSet) => {
      setConnexion(resultSet.rows)
  }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
  return  <View  style={styles.container}>
    <Text>{connexions != null ? 'yo' : null}</Text>
  {connexions.map((n)=><PressableLogin onPress={() => navigation.navigate("Acceuil", { user: n.usager, flag: n.admin})} user={n.usager} flag={n.admin}></PressableLogin>)}
  </View>
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
