import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Database } from "../database";
import BoutonAcheter from "./BoutonAcheter";
import { useState } from "react";
import NettoyerComposant from "./NettoyerComposant";

const db = new Database("Shop");

const TextArea = (props) => {
  return (
    <View style={styles.textArea}>
      <Text>{props.value}</Text>
    </View>
  );
};

function DetailScreen({ route }) {
  const { user } = route.params;

  const { idObjet } = route.params;
  const [donner, setDonner] = useState([]);

  NettoyerComposant(setDonner, []);

  var [nom, prix, image, quantite, description] = "";
  db.execute(
    `SELECT nom, prix, image, quantite, description FROM produits where id = ${idObjet};`
  )
    .then((resultSet) => {
      setDonner(resultSet.rows);
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });

  return (
    <View style={styles.container}>
      {donner.map((m) => {
        nom = m.nom;
        prix = m.prix;
        image = m.image;
        quantite = m.quantite;
        description = m.description;
      })}
      <Text style={styles.title}>{nom}</Text>
      <Image style={styles.logo} source={{ uri: image }} />
      <Text>{prix} $</Text>
      <Text>{quantite} restant</Text>
      <TextArea value={description} />
      <BoutonAcheter
        nom={nom}
        user={user}
        idObjet={idObjet}
        prix={prix}
        image={image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9BA1AB",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 140,
    height: 110,
  },
  title: {
    borderRadius: 10,
    color: "#FF5733",
    fontSize: 24,
    margin: 3,
  },
  textArea: {
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 5,
    margin: 10,
    padding: 5,
    backgroundColor: "white",
  },
});

export default DetailScreen;
