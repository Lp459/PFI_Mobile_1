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
        onPress={(m) => {
          db.execute(
            `INSERT INTO panier(userId , idProduit , nom , prix , image) VALUES (${user.id},${idObjet} ,'${nom}' ,${prix} ,'${image}');`
          )
            .then(() => {
              console.log("insertion fait");
            })

            .catch(() => {
              console.log(user.id, idObjet);
              console.log("Insertion de produit échoué");
            });
        }}
      >
        <Text style={isPressed ? styles.texteAppuye : styles.texteNormal}>
          Ajouter au Panier
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  appuye: {
    backgroundColor: "#26e",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  pressable: {
    color: "blue",
    backgroundColor: "#2be",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
});

export default BoutonAcheter;
