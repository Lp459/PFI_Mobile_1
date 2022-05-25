import React, { useState } from "react";

import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Pressable,
  Image,
  Button
} from "react-native";
import { Database } from "../database";
import Produit from "./Produit";

const db = new Database("Shop");


function ListProduits({navigation , route}){
    
    const [produits, setProduits] = useState([]);
    const [langue , setLangue]= useState('fr');
  
    db.execute("SELECT id, nom , prix , image FROM produits;")
      .then((resultSet) => {
        setProduits(resultSet.rows);
      })
      .catch((m) => {
        console.log("Erreur exec Select " + m);
      });
  
    return (
      <View>
      <Button title='FR-CA' onPress={()=>{setLangue('fr')}} />
      <Button title='EN-CA' onPress={()=>{setLangue('en')}} />
        <FlatList
            data={produits}
            renderItem={({item}) => (
          
              <Produit
                id={item.id}
                nom={item.nom}
                prix={item.prix}
                image={item.image}
                navigation={navigation}
                enFr={langue}
              />
              
            )}
            keyExtractor={(item) => item.id.toString()}
            
          />
      </View>
    )
  
}

export default ListProduits;