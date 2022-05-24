import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./DetailScreen";
import ListProduits from "./ListProduits";

const Stack = createNativeStackNavigator();

function ProduitsScreen({ navigation }) {

  return (
  
      <Stack.Navigator>
        <Stack.Screen
          name="ListProduits"
          component={ListProduits}
          options={{ headerShown: false}} 
        />
        
        <Stack.Screen name="Detail"
          component={DetailScreen}
          options={{ headerShown: false}}
           />
      </Stack.Navigator>
  );
}

export default ProduitsScreen;
