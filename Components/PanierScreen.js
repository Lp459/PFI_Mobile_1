import React from "react";
import { View, StyleSheet, FlatList , useState } from "react-native";
import { Database } from "../database";
const db = new Database("Shop");
var items = [];
var prixTotal = 0;

var userId = 0;
    
db.execute("SELECT id FROM connexions where loggedin = 1;")
.then((resultSet) => {
    userId = resultSet.rows;
}).catch((m)=>{  console.log("Erreur exec Select " + m);})

db.execute(`select * from produits where userId = ${userId};`)
  .then((result) => {
    items.push(result.rows);
  })
  .catch((m) => {
    console.log("Erreur exec Select " + m);
  });

const AfficherListe = (props) => {
  if (props.liste.length == 0) {
    <Text>Il semble que votre panier soit vide...</Text>;
  } else {
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={(item) => /*Produit*/ null}
    />;
  }
};

const ProcederAuPaiement = () => {
    items = null;
    prixTotal = 0;
}

const CalculerTotal = () => {
    db.execute(`select prix from panier where userId = ${userId};`)
    .then((result) => {
        prixTotal += result.rows;
    })
    .catch((m) => {
     console.log("Erreur exec Select " + m);
    });
}

function PanierScreen(props) {
    {CalculerTotal}
  return (
    <View style={styles.container}>
      <Text>Votre panier ({props.nbItems} objets)</Text>
      <View>
        <AfficherListe liste={items} />
      </View>
      <Text>Résumé</Text>
      <Text>Sous-total: {prixTotal}$</Text>
      <Button title="Paiement sécurisé" onPress={ProcederAuPaiement}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bouton:{
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

export default PanierScreen;
