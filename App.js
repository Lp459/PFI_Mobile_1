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
import Fonctions from './function'
import { render } from 'react-dom';
const db = new Database("Shop");
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
init_tab();


export default function App() {
  const [produits, setProduits] = useState([]);
  const [connexions , setConnexion] = useState([]);
  const [userConnected , setUserConnected] = useState(false);
  const [nomUser , setUser] = useState();
  const [adminConnecter , setAdminConnecter] = useState(false);
  const [view , setView] = useState(LoginScreen)
  db.execute("select * from produits;")
  .then((resultSet) => {
      setProduits(resultSet.rows)
  }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
    db.execute("select * from connexions;")
    .then((resultSet) => {
        setConnexion(resultSet.rows)
    }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
  return (
    {view}
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
