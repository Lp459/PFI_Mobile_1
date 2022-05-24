import React from "react";
import { View, StyleSheet, Text, FlatList, Button  } from "react-native";
import { Database } from "../database";
import { useState } from "react";
import Produit from "./Produit";

const db = new Database("Shop");
var prixTotal = 0.0;

const AfficherListe = ({navigation , userId}) => {
  const [produits, setProduits] = useState([]);
  
  
  db.execute(`SELECT id, nom , prix , image FROM produits where id = ${userId} ;`)
    .then((resultSet) => {
      setProduits(resultSet.rows);
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });
    produits.forEach(element => {
      CalculerTotal(element.id);
    });
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
};

const ProcederAuPaiement = () => {
  items = [];
  prixTotal = 0;
  //delete from panier where userid = id
};

const CalculerTotal = (idProduit) => {
  const [prix , setPrix] = useState(0);
  db.execute(`select prix from produits where id = ${idProduit};`)
    .then((result) => {
      setPrix(result.rows);
      prix.forEach(element => {
        prixTotal += element.prix;  
      });
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });
};

function PanierScreen({navigation}) {
  const [user, setUser] = useState([]);
  const [id , setId] = useState(0);
  db.execute("SELECT id FROM connexions where loggedin = 1;")
    .then((resultSet) => {
      setUser(resultSet.rows);
      user.forEach(element => {
        
        setId(element.id);
        

      });
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });
    
  
 
  
  {
    CalculerTotal();
  }
  return (
    <View style={styles.container}>
      <View style={styles.panierContainer}>
        <AfficherListe userId={id} navigation={navigation} />
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
