import React from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { Database } from "../database";
import { useState } from "react";
import Produit from "./Produit";
import ButtonCompleterAchat from "./ButtonCompleterAchat";

const db = new Database("Shop");

const AfficherListe = ({ navigation, user, produits }) => {
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

function PanierScreen({ navigation, route }) {
  const { user } = route.params;
  const [prixTotal, setPrixTotal] = useState(0);
  const [produits, setProduits] = useState([]);

  db.execute(
    `SELECT idProduit,nom,prix,image FROM panier where userId = ${user.id};`
  )
    .then((resultSet) => {
      setProduits(resultSet.rows);
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });

  let prix = 0;
  produits.map((n) => {
    prix += n.prix;
  });

  return (
    <View style={styles.container}>
      <View style={styles.panierContainer1}>
        <AfficherListe
          navigation={navigation}
          user={user}
          produits={produits}
        />
      </View>

      <View style={styles.panierContainer2}>
        <Text>Résumé</Text>
        <Text>Sous-total: {prix} $</Text>
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
    alignSelf: "flex-end",
    margin: 10,
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
  },
  bouton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PanierScreen;
