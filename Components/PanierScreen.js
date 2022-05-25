import React from "react";
import { View, StyleSheet, Text, FlatList, Button  } from "react-native";
import { Database } from "../database";
import { useState } from "react";
import Produit from "./Produit";


const db = new Database("Shop");
var prixTotal = 0.0;

const AfficherListe = ({navigation , user}) => {
  const [produits, setProduits] = useState([]);

    db.execute(`SELECT idProduit,nom,prix,image FROM panier where userId = ${user.id};`)
    .then((resultSet) => {
      
      setProduits(resultSet.rows);  
      
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });

    prixTotal = 0;
    console.log(produits);
    produits.forEach(element=>{
      prixTotal += element.prix;
    })
  

 
  if (produits.length == 0) {
    return (
      <View>
        <Text>Il semble que votre panier soit vide...</Text>
      </View>
    );
  } else {
    
  return (
    <View>
      <FlatList
          data={produits}
          renderItem={({item}) => (
        
            <Produit
              id={item.idProduit}
              nom={item.nom}
              prix={item.prix}
              image={item.image}
              navigation={navigation}
            />
            
          )}
          keyExtractor={(item) => item.idProduit.toString()}
          
        />
    </View>
  )
  }
};

const ProcederAuPaiement = () => {
  
  prixTotal = 0;
  //delete from panier where userid = id
};



function PanierScreen({navigation , route}) {
  const {user} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.panierContainer}>
        <AfficherListe navigation={navigation} user={user} />
      </View>
      <View style={styles.panierContainer}>
        <Text>Résumé</Text>
        <Text>Sous-total: {prixTotal} $</Text>
        <View style={styles.bouton}>
          <Button
            title="Sécurisé votre paiement"
            color="blue"
            onPress={ProcederAuPaiement}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    alignSelf: "flex-end",
    margin: 10,
  },
  panierContainer: {
    justifyContent: "center",
    alignSelf: "flex-start"
  },
  bouton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PanierScreen;
