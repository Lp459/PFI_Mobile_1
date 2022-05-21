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

const Produit = ({id , nom , prix , image , navigation}) => {

  return (
    <Pressable style={styles.itemBox}
      onPress={() => {
        
        navigation.navigate("Detail" , {id: id});
      }}
    >
      <Image style={styles.logo} source={{uri:image}} />

      <Text>{nom}</Text>
      <Text>prix :{prix} $</Text>
    </Pressable>
  );
};

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
function ListProduits({navigation}){
  const [produits, setProduits] = useState([]);
  

  db.execute("SELECT id, nom , prix , image FROM produits;")
    .then((resultSet) => {
      setProduits(resultSet.rows);
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });

  return (
    <View>
      <FlatList
          data={produits}
          renderItem={({item}) => (
        
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
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#9BA1AB',
    borderWidth:0.5,
  },
  logo: {
    width: 130,
    height: 100,
  },
});

export default ProduitsScreen;
