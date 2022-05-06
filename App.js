import { StyleSheet, Text, View , FlatList , Pressable } from 'react-native';
import {Database} from "./database";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Fontisto } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import {AdminScreen ,} from './Pages';
import { MaterialIcons } from '@expo/vector-icons';
import Fonctions from './function'
const db = new Database("Shop");
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



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

  const LoginScreen = ({})=>{return (<View>
    {connexions.map((n)=><PressableLogin user={n.user} motdepasse={user.motdepasse} flag={n.flag}></PressableLogin>)}
    </View>)}
  
   const AcceuilScreen = ({navigation}) => {return (
   <View>

     <Text style={styles.title}>Magasin!</Text>
        <Stack.Navigator>
          <Stack.Screen name="All tracks" component={StackScreen} 
          options={{headerTitle: (navigation) => <View/>}}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
   </View>)}

   const StackScreen = ({navigation})=>{return<View>
     <Pressable  style={styles.pressable} 
         onPress={() => navigation.navigate("Login", {/*  */})}>
         <Text style={styles.pressable_text}>Login</Text>
       </Pressable>
      {userConnected ? 
       <Pressable  style={styles.pressable} 
         onPress={() => navigation.navigate("ProduitsScreen", {/*  */})}>
         <Text style={styles.pressable_text}>Magasin</Text>
         <MaterialIcons name="computer" size={24} color="black" />
       </Pressable> : null}
      {adminConnecter ?
       <Pressable  style={styles.pressable} 
        onPress={() => navigation.navigate("AdminScreen", {db})}>
        <Text style={styles.pressable_text}>Admin</Text>
       </Pressable> : null}
   </View>}

    const AboutScreen = ({navigation}) => {return (
    <View>
      <Text style={styles.title}>À propos de nous</Text>
      <Text>Louis-philippe Rousseau</Text>
      <Text>louis-philippe_rousseau@gmail.com</Text>
      <Text>Alexandre Carle</Text>
      <Text>alexCarle@gmail.com</Text>
      
    </View>)}

    const FindUsScreen = ({navigation}) => {return (<View>
      <Text style={styles.title}>Find us</Text>
    
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
         {setUser(user)}{setUserConnected(true)} {flag == 1?setAdminConnecter(true):setAdminConnecter(false)}
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
