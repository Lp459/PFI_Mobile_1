import { StyleSheet, Text, View } from 'react-native';
import {Database} from "./database";
import { FlatList, StyleSheet, Text, View, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Fontisto } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';

const db = new Database("Shop");
const Tab = createBottomTabNavigator();

db.execute("drop table if exists produits;");
db.execute("create table produits (id, nom, prix, image);");
db.execute("drop table if exists connexion;");
db.execute("create table connexion (usager, motdepasse, admin);");
db.execute("insert into produits values (1, 'Pain 800g' , 10 , image.jpg);");
db.execute("insert into Connexion values ('LPR' , '123456' , 1);");

export default function App() {
  const [produits, setProduits] = useState([]);
  const [connexions , setConnexion] = useState([]);
  const [userConnected , setUserConnected] = useState(false);
  const [nomUser , setUser] = useState();
  const [adminConnecter , setAdminConnecter] = useState(false);
  db.execute("select * from produits;")
  .then((resultSet) => {
      setProduits(resultSet.rows)
  }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
    db.execute("select * from connexions;")
    .then((resultSet) => {
        setConnexion(resultSet.rows)
    }).catch((m)=>{  setErreur("Erreur exec Select " + m);})


   const AcceuilScreen = ({navigation}) => {return (
   <View>
     <Text style={styles.title}>Magasin!</Text>
      {userConnected ? 
       <Pressable  style={styles.pressable} 
         onPress={() => navigation.navigate("ProduitsScreen", {/*  */})}>
         <Text style={styles.pressable_text}>Caroline</Text>
       </Pressable> : null}
      {adminConnecter ?
       <Pressable  style={styles.pressable} 
        onPress={() => navigation.navigate("AdminScreen", {/*  */})}>
        <Text style={styles.pressable_text}>Admin</Text>
       </Pressable> : null}
   </View>)}

    const AboutScreen = ({navigation}) => {return (
    <View>
      <Text style={styles.title}>À propos de nous</Text>
      <br/>
      <Text>Louis-philippe Rousseau</Text>
      <a href='mailto:louis-philippeR@gmail.com'>louis-philippeR@gmail.com</a>
      <Text>Alexandre Carle</Text>
      <a href='mailto:alexCarle@gmail.com'>alexCarle@gmail.com</a>
      
    </View>)}

    const FindUsScreen = ({navigation}) => {return (<View>
      <Text style={styles.title}>Find us</Text>
      
    </View>)}
    const AdminScreen = ({navigation}) => {return (<View>
      <Text style={styles.title}>Administrateur</Text>
      
    </View>)}
    const ProduitsScreen = ({navigation}) => {return (<View>
      <Text style={styles.title}>Nos produits</Text>
      <FlatList
        data={produits}
        renderItem={({item}) => /*Produits */ null}
        keyExtractor={(item, index) => index.toString()}/>
    </View>)}
   const SearchScreen = () => <View><Text>Recherche</Text></View>
   

   const PressableLogin = ({user , motdepasse , flag }) => {
     const [isPressed, setIsPressed] = useState(false);
     return (<Pressable style={isPressed ? styles.appuye : styles.pressable}
       onPressIn={() => setIsPressed(true)} onPressOut={() => setIsPressed(false)}>
         <Text style={isPressed ? styles.texteAppuye : styles.texteNormal}>{user}{flag}</Text>
         {setUser(user)} {flag == 1?setAdminConnecter(true):setAdminConnecter(false)}
     </Pressable>
     )};
  return (
    
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Accueil" component={AcceuilScreen} 
            options={{tabBarIcon: ({size, focused}) =>
            <Ionicons name="home" size={size} color={focused ? "blue" : "lightblue"} />}} />
         
          <Tab.Screen name="About" component={AboutScreen}
            options={{tabBarIcon: ({size, focused}) =>
            <Ionicons name="search" size={size} color={focused ? "blue" : "lightblue"} />}}/>

          <Tab.Screen name="Find us" component={FindUsScreen}
            options={{tabBarIcon: ({size, focused}) =>
            <Fontisto name="ship" size={size} color={focused ? "blue" : "lightblue"} />}}/>
        </Tab.Navigator>
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
});
