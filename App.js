import { StyleSheet, Text, View , FlatList , Pressable, Button } from 'react-native';
import {Database} from "./database";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Fontisto } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import AdminScreen from './Components/AdminScreen';
import AccueilScreen from './Components/AccueilScreen';
import AboutScreen  from './Components/AboutScreen';
import FindUsScreen from './Components/FindUsScreen';
import LoginScreen  from './Components/LoginScreen';
import NavScreenAdmin from './Components/NavScreenAdmin';
import PressableLogin from './Components/PressableLogin';
import ProduitsScreen from './Components/ProduitsScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { render } from 'react-dom';
import NavScreen from './Components/NavScreen';

const db = new Database("Shop");
const Stack = createNativeStackNavigator();
function init_tab(){
  db.execute("drop table if exists produits;");
  db.execute("create table produits (id, nom, prix, image);");
  db.execute("drop table if exists connexions;");
  db.execute("create table connexions (id , usager, motdepasse, admin , loggedin);");

  db.execute("insert into produits values (1, 'Pain 800g' , 10 , 'somthing.jpg');");
  db.execute("insert into connexions values (1 , 'LPR' , '123456' , 1 , 0);");
  db.execute("insert into connexions values (2 , 'JACK' , '123456' , 0 , 0);");
  db.execute("insert into connexions values (3 , 'OK' , '123456' , 0 , 0);");
}
function updateLoggedIn(db){
  console.log('update login');
  db.execute(`UPDATE connexions set loggedin = 0`);
}
init_tab();



export default function App() {
  const [erreur , setErreur] = useState();
    updateLoggedIn(db);
    return (
      
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllConnexions" component={AllConnexions} 
          options={{headerTitle: (props) => <View/>}}/>
          <Stack.Screen name="NavScreen" component={NavScreen}/>
          <Stack.Screen name="NavScreenAdmin" component={NavScreenAdmin}/>
          
        </Stack.Navigator>
      </NavigationContainer>
        
    );
}

const AllConnexions = ({navigation}) => {
  const [connexions , setConnexion] = useState([]);
  const [erreur , setErreur] = useState();
  db.execute("SELECT usager , admin , loggedin FROM connexions;")
  .then((resultSet) => {
      setConnexion(resultSet.rows)

  }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
  

  return  <View  style={styles.container}>
  {
   connexions.map((n)=><PressableLogin onPress={() => {
      updateLoggedIn(db)
     db.execute(`UPDATE connexions set loggedin = 1 where usager='${n.usager}'`);
     n.admin ? navigation.navigate("NavScreenAdmin"):navigation.navigate("NavScreen");
    }}  user={n.usager} flag={n.admin} loggedin={n.loggedin}>
    </PressableLogin>)
  }
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
