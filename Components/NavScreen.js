import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccueilScreen from "./AccueilScreen";
import FindUsScreen from "./FindUsScreen";
import ProduitsScreen from "./ProduitsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PanierScreen from "./PanierScreen";
import { Database } from "../database";
import { MaterialIcons } from "@expo/vector-icons";
import AboutScreen from "./AboutScreen";
import NettoyerComposant from "./NettoyerComposant";

const Tab = createBottomTabNavigator();
const db = new Database("Shop");

function NavScreen({ route }) {

  const { user } = route.params;
  const [id, setId] = useState([]);

  NettoyerComposant(setId, []);

  db.execute("SELECT id FROM connexions where loggedin = 1;")
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
        initialParams={{ user: user }}
        name="Produits"
        component={ProduitsScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialIcons
              name="computer"
              size={size}
              color={focused ? "blue" : "lightblue"}
            />
          ),
        }}
      />

      <Tab.Screen
        initialParams={{ user: user }}
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
          id: id,
        }}
      />
    </Tab.Navigator>
  );
}

export default NavScreen;
