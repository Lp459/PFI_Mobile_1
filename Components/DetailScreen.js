import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Database } from "../database";

const db = new Database("Shop");

function DetailScreen({ navigation, route }) {
  var id = route.params.id;
  const [nom, prix, image, quantite] = "";

  db.execute(`SELECT nom, prix, image, quantite FROM produits where id = ${id};`)
    .then((resultSet) => {
      [nom, prix, image] = resultSet.rows;
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nom}</Text>
      <Image
        style={styles.logo}
        source={require(image)}
      />
      <Text>{prix} $</Text>
      <Text>{quantite} restant</Text>
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
});

export default DetailScreen;
