import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProduitsScreen from "./ProduitsScreen";
import AdminScreen from "./AdminScreen";
import { Database } from "../database";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function NavScreen({ navigation, route }) {
  const { user } = route.params;

  return (
    <Tab.Navigator>
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
        name="Admin"
        component={AdminScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialIcons
              name="admin-panel-settings"
              size={size}
              color={focused ? "blue" : "lightblue"}
            />
          ),
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
