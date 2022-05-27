import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProduitsScreen from "./ProduitsScreen";
import AdminScreen from "./AdminScreen";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function NavScreen({ route }) {
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
        name="Administrateur"
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

export default NavScreen;
