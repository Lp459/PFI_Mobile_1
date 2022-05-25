import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Pressable } from "react-native";
import { useState } from "react";
import { Database } from "../database";
import BoutonAcheter from "./BoutonAcheter";
const db = new Database("Shop");
function ButtonCompleterAchat({ userId }) {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        style={isPressed ? styles.appuye : styles.pressable}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={(m) => {
          db.execute(`DELETE from panier where userId =${userId};`)
            .then((resultSet) => {
              alert("achat compléter");
            })

            .catch(() => {
              console.log("error");
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

export default ButtonCompleterAchat;
