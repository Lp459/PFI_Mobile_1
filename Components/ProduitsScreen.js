import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Produit = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerTitle: (props) => <View /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function ProduitsScreen({navigation}) {
  const [produits, setProduits] = useState([]);
  <Pressable
        onPress={() => navigate}>
        <Text>{props.nom} {props.prix} $</Text>
    </Pressable>
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nos produits</Text>
      <FlatList
        data={produits}
        renderItem={({ item }) => /*Produits */ null}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProduitsScreen;
