import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Database } from "../database";

const db = new Database("Shop");

const TextArea = (props) => {
  const [description] = props.value;

  return (
    <View style={styles.textArea}>
      <Text>{description}</Text>
    </View>
  )
}

function DetailScreen({ navigation, route }) {
  var id = route.params.id;
  const [nom, prix, image, quantite, description] = "";

  db.execute(`SELECT nom, prix, image, quantite, description FROM produits where id = ${id};`)
    .then((resultSet) => {
      [nom, prix, image, quantite, description] = resultSet.rows;
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nom}</Text>
      <Image
        style={styles.logo}
        source={{uri: image}}
      />
      <Text>{prix} $</Text>
      <Text>{quantite} restant</Text>
      <TextArea 
        value={description}
      />
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
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 5,
    margin: 10
  }
});

export default DetailScreen;
