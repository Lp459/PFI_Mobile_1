import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccueilScreen from "./AccueilScreen";
import FindUsScreen from "./FindUsScreen";
import { useState } from "react";
import ProduitsScreen from "./ProduitsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import PanierScreen from "./PanierScreen";
import { Database } from "../database";
import { MaterialIcons } from "@expo/vector-icons";
import AboutScreen from "./AboutScreen";

const Tab = createBottomTabNavigator();
const db = new Database("Shop");

function NavScreen(props) {
  const [id, setId] = useState([]);

  db.execute(
    "SELECT id FROM connexions where loggedin = 1;"
  )
  .then((resultSet) => {
    setId(resultSet.rows);
  })
  .catch((m) => {
    console.log("Erreur exec Select " + m);
  });

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Accueil"
        component={AccueilScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="home-circle"
              size={size}
              color={focused ? "blue" : "lightblue"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="information"
              size={size}
              color={focused ? "blue" : "lightblue"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Où nous trouver"
        component={FindUsScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="google-maps"
              size={size}
              color={focused ? "blue" : "lightblue"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Produits"
        component={ProduitsScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialIcons
              name="computer"
              size={size}
              color={focused ? "blue" : "lightblue"}
            />
          )
        }}
      />

      <Tab.Screen
        name="Panier"
        component={PanierScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="cart"
              size={size}
              color={focused ? "blue" : "lightblue"}
            />
          ),
          id: id
        }}
      />
    </Tab.Navigator>
  );
}
//{user.admin ? {TabAdmin}: {TabUser}}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    color: "white",
    backgroundColor: "#38f",
  },
  ligneCroisiere: {
    fontSize: 30,
    color: "white",
    padding: 7,
    margin: 7,
    backgroundColor: "blue",
  },
  croisiere: {
    fontSize: 15,
    fontWeight: "bold",
    color: "blue",
    padding: 4,
    margin: 4,
  },
  pressable: {
    color: "blue",
    backgroundColor: "#2be",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  pressable_text: {
    fontSize: 15,

    alignItems: "center",
  },

  appuye: {
    backgroundColor: "#26e",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  texteAppuye: {
    color: "lightblue",
    fontWeight: "bold",
  },
  texteNormal: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default NavScreen;
