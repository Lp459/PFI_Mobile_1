import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Database } from "../database";
import BoutonAcheter from "./BoutonAcheter";
import { useState } from "react";
const db = new Database("Shop");

const TextArea = (props) => {
  return (
    <View style={styles.textArea}>
      <Text>{props.value}</Text>
    </View>
  );
};

function DetailScreen({ navigation, route }) {
  const [user, setUser] = useState([]);

  db.execute("SELECT id FROM connexions where loggedin = 1;")
    .then((resultSet) => {
      setUser(resultSet.rows);
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });
  const { id } = route.params;
  const [donner, setDonner] = useState([]);
  var [nom, prix, image, quantite, description] = "";
  db.execute(
    `SELECT nom, prix, image, quantite, description FROM produits where id = ${id};`
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
        idUser={user.id}
        idObjet={id}
        onPress={(m) => {
          console.log("ici on va call fonction valider achat");
        }}
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
    backgroundColor: "white"
  },
});

export default DetailScreen;
