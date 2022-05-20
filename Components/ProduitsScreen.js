import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Database } from "../database";
import DetailScreen from "./DetailScreen";

const Stack = createNativeStackNavigator();
const db = new Database("Shop");
const [produits, setProduits] = useState([]);
const [id, setId] = useState(0);

const Produit = (props) => {
  return (
    <Pressable
      onPress={() => {
        setId(props.id);
        props.navigation.navigate("Détail");
      }}
    >
      <Image style={styles.logo} source={require(props.image)} />
      <Text>{props.nom}</Text>
      <Text>{props.prix} $</Text>
    </Pressable>
  );
};

function ProduitsScreen({ navigation }) {

  db.execute("SELECT id, nom , prix , image FROM produits;")
    .then((resultSet) => {
      setProduits([...produits, resultSet.rows]);
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Text style={styles.title}>Nos produits</Text>
        <Stack.Screen
          name="Détail"
          component={DetailScreen}
          options={{ headerTitle: () => <View />, id: id }}
        />
        <FlatList
          data={produits}
          renderItem={({ item }) => (
            <Produit
              id={item.id}
              nom={item.nom}
              prix={item.prix}
              image={item.image}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 100,
  },
});

export default ProduitsScreen;
