import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Pressable } from "react-native";
import { useState } from "react";
import { Database } from "../database";

const db = new Database("Shop");

function ButtonCompleterAchat({ userId }) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        style={isPressed ? styles.appuye : styles.pressable}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={() => {
          db.execute(`DELETE from panier where userId = ${userId};`)
            .then(() => {
              alert("Achat compléter");
            })

            .catch(() => {
              console.log("Erreur");
            });
        }}
      >
        <Text style={isPressed ? styles.texteAppuye : styles.texteNormal}>
          Sécuriser votre commande
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9BA1AB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
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
  texteAppuye: {
    color: "lightblue",
    fontWeight: "bold",
    fontSize: 19,
    margin: 0
  },
  texteNormal: {
    color: "salmon",
    fontWeight: "bold",
    fontSize: 19,
  },
});

export default ButtonCompleterAchat;
