import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccueilScreen from './AccueilScreen';
import AboutScreen from './AboutScreen';
import FindUsScreen from './FindUsScreen';
import { useState } from 'react';
import ProduitsScreen from './ProduitsScreen';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AdminScreen from './AdminScreen';
import PanierScreen from './PanierScreen';
import { Database } from '../database';

const Tab = createBottomTabNavigator();
const db = new Database("Shop")

function afficherBonneTab(users)
{
    users.forEach(n => {

        if(n.loggedin == 1){
            if(n.admin == 1){
                console.log('an admin');
                return true;
            }
            else{
                console.log('not admin');

                return false;
            }
        }
    });
    
}

function NavScreen(props) {
    const [user , setUser] = useState([]);
    const [erreur , setErreur] = useState([]);
    db.execute("SELECT id , usager , admin , loggedin FROM connexions;")
    .then((resultSet) => {
        setUser(resultSet.rows);
    }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
    return (
    
        <Tab.Navigator>  
            
          <Tab.Screen name="Accueil" component={AccueilScreen} 
            options={{tabBarIcon: ({size, focused}) =>
            <MaterialCommunityIcons name="home" size={size} color={focused ? "blue" : "lightblue"} />}} />
          
          <Tab.Screen name="About" component={AboutScreen}
            options={{tabBarIcon: ({size, focused}) =>
            <MaterialCommunityIcons name="information-outline" size={size} color={focused ? "blue" : "lightblue"} />}}/>

          <Tab.Screen name="Find us" component={FindUsScreen}
            options={{tabBarIcon: ({size, focused}) =>
            <MaterialCommunityIcons name="google-maps" size={size} color={focused ? "blue" : "lightblue"} />}}/>
        
        {afficherBonneTab(user) ? <Tab.Screen name="Admin" component={AdminScreen}
                options={{tabBarIcon: ({size, focused}) =>
                <MaterialCommunityIcons name="admin-panel-settings" size={size} color={focused ? "blue" : "lightblue"} />}}/> :<Tab.Screen name="Magasin" component={ProduitsScreen}
                options={{tabBarIcon: ({size, focused}) =>
            <MaterialCommunityIcons name="store" size={size} color={focused ? "blue" : "lightblue"} />}}/>}

        {afficherBonneTab(user) ?  null :<Tab.Screen name="Panier" component={PanierScreen}
        options={{tabBarIcon: ({size, focused}) =>
        <MaterialCommunityIcons name="cart" size={size} color={focused ? "blue" : "lightblue"} />}}/>}
        </Tab.Navigator>
        
    );
}
//{user.admin ? {TabAdmin}: {TabUser}}
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

export default NavScreen;