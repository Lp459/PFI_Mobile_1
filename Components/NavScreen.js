import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AcceuilScreen from './AcceuilScreen';
import AboutScreen from './AboutScreen';
import FindUsScreen from './FindUsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Fontisto } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
function NavScreen(props) {
    return (
    
        <Tab.Navigator>      
          <Tab.Screen name="Accueil" component={AcceuilScreen} 
            options={{tabBarIcon: ({size, focused}) =>
            <Ionicons name="home" size={size} color={focused ? "blue" : "lightblue"} />}} />
          
          <Tab.Screen name="About" component={AboutScreen}
            options={{tabBarIcon: ({size, focused}) =>
            <Ionicons name="search" size={size} color={focused ? "red" : "lightblue"} />}}/>

          <Tab.Screen name="Find us" component={FindUsScreen}
            options={{tabBarIcon: ({size, focused}) =>
            <Fontisto name="ship" size={size} color={focused ? "red" : "lightblue"} />}}/>
        </Tab.Navigator>

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

export default NavScreen;