import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Pressable } from "react-native";
import { useState } from "react";
import { Database } from "../database";

const db = new Database("Shop");

function BoutonAcheter({ user, idObjet, nom, prix, image }) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        style={isPressed ? styles.appuye : styles.pressable}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={() => {
          db.execute(
            `INSERT INTO panier(userId , idProduit , nom , prix , image) VALUES (${user.id},${idObjet} ,'${nom}' ,${prix} ,'${image}');`
          )
            .then(() => {
              console.log("Insertion de produit réussi");
            })

            .catch(() => {
              console.log(`Insertion de produit échoué: { ${user.id}, ${idObjet} }`);
            });
        }}
      >
        <Text style={isPressed ? styles.texteAppuye : styles.texteNormal}>
          Ajouter au panier
        </Text>
      </Pressable>
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
  pressable: {
    color: "blue",
    backgroundColor: "#2be",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  appuye: {
    backgroundColor: "#26e",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  texteAppuye: {
    color: "lightblue",
    fontWeight: "bold",
    fontSize: 19
  },
  texteNormal: {
    color: "salmon",
    fontWeight: "bold",
    fontSize: 19
  },
});

export default BoutonAcheter;
