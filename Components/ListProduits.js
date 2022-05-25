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
    const [enFR , setEnFr]= useState('fr');
  
    db.execute("SELECT id, nom , prix , image FROM produits;")
      .then((resultSet) => {
        setProduits(resultSet.rows);
      })
      .catch((m) => {
        console.log("Erreur exec Select " + m);
      });
  
    return (
      <View>
      <Button title='FR-CA' onPress={()=>{setEnFr('fr')}} ></Button>
      <Button title='EN-CA' onPress={()=>{setEnFr('en')}} ></Button>
        <FlatList
            data={produits}
            renderItem={({item}) => (
          
              <Produit
                id={item.id}
                nom={item.nom}
                prix={item.prix}
                image={item.image}
                navigation={navigation}
                enFr={enFR}
              />
              
            )}
            keyExtractor={(item) => item.id.toString()}
            
          />
      </View>
    )
  
}

export default ListProduits;