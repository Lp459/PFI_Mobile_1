import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./DetailScreen";
import ListProduits from "./ListProduits";

const Stack = createNativeStackNavigator();

function ProduitsScreen({ route }) {
  const { user } = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        initialParams={{ user: user }}
        name="ListProduits"
        component={ListProduits}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        initialParams={{ user: user }}
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default ProduitsScreen;
