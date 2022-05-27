import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Database } from "../database";
import { useState } from "react";
import Produit from "./Produit";
import ButtonCompleterAchat from "./ButtonCompleterAchat";
import NettoyerComposant from "./NettoyerComposant";

const db = new Database("Shop");
const taxes = 0.15;

const AfficherListe = ({ navigation, produits }) => {
  if (produits.length == 0) {
    return (
      <View>
        <Text style={styles.text}>Il semble que votre panier soit vide...</Text>
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={produits}
          renderItem={({ item }) => (
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
    );
  }
};

//prixTotal => Le prix total sans les taxes
const CalculerSousTotal = (prixTotal) => {
  let totalTaxes = prixTotal * taxes;
  return prixTotal + totalTaxes;
};

function PanierScreen({ navigation, route }) {
  const { user } = route.params;
  let prixTotal = 0;
  const [produits, setProduits] = useState([]);

  NettoyerComposant(setProduits, []);

  db.execute(
    `SELECT idProduit,nom,prix,image FROM panier where userId = ${user.id};`
  )
    .then((resultSet) => {
      setProduits(resultSet.rows);
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });

  produits.map((n) => {
    prixTotal += n.prix;
  });

  return (
    <View style={styles.container}>
      <View style={styles.panierContainer1}>
        <AfficherListe
          navigation={navigation}
          produits={produits}
        />
      </View>

      <View style={styles.panierContainer2}>
        <Text>Résumé</Text>
        <Text>Sous-total: {CalculerSousTotal(prixTotal)} $</Text>
        <View style={styles.bouton}>
          <ButtonCompleterAchat userId={user.id} />
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
    margin: 5,
  },
  panierContainer1: {
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  panierContainer2: {
    flex: 1,
    borderWidth: 2,
    backgroundColor: "#9BA1AB",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    marginRight: 5
  },
  bouton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default PanierScreen;
