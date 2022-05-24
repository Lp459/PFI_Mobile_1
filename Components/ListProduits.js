import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  Image,
} from "react-native";
import { Database } from "../database";
import Produit from "./Produit";

const db = new Database("Shop");


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

export default ListProduits;