import React, { useState } from "react";
import {
  View,
  FlatList,
  Button,
  StyleSheet
} from "react-native";
import { Database } from "../database";
import NettoyerComposant from "./NettoyerComposant";
import Produit from "./Produit";

const db = new Database("Shop");


function ListProduits({ navigation }){
    
    const [produits, setProduits] = useState([]);
    const [langue , setLangue]= useState('fr');

    NettoyerComposant(setProduits, []);
    NettoyerComposant(setLangue, '');
  
    db.execute("SELECT id, nom , prix , image FROM produits;")
      .then((resultSet) => {
        setProduits(resultSet.rows);
      })
      .catch((m) => {
        console.log("Erreur exec Select " + m);
      });
  
    return (
      <View style={styles.container}> 
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
            style={styles.flatList}
          />
      </View>
    )
  
}

const styles = StyleSheet.create({
  flatList: {
    margin: 8,
    marginBottom: 100
  },
  container: {
    width: 300,
    alignSelf: "center"
  }
});
export default ListProduits;