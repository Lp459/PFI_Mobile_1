import React from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import AboutScreen from "./AboutScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OpenURLButton from "./OpenUrlButton";

const Stack = createNativeStackNavigator();

function AccueilScreen() {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.title}>Bienvenue dans NewEgg!</Text>
      <Image style={styles.logo} source={require("../assets/newEgg.jpg")} />
      <Text style={styles.text_accueil}>
        Voici une application mobile qui est semblable à NewEgg.ca dont vous
        pouvez acheter des composants d'appareils électronique.
      </Text>
      <View style={styles.buttonContainer}>
        <Text style={[styles.text_accueil, styles.text_lien]}>
          Le lien ci-dessous redirige vers la page Web de l'entreprise
        </Text>
        <OpenURLButton url={"https://newegg.ca"} titre="NewEgg.ca"/>
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
  },
  pressable: {
    color: "blue",
    backgroundColor: "#2be",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  logo: {
    width: 110,
    height: 90,
  },
  title: {
    borderRadius: 10,
    color: "#FF5733",
    fontSize: 24,
    margin: 3,
  },
  pressable_text: {
    fontSize: 15,
    alignItems: "center",
  },
  text_accueil: {
    justifyContent: "center",
    fontSize: 18,
    color: "black",
    textAlign: "center",
    margin: 7,
  },
  text_lien: {
    color: "#088F8F",
    fontFamily: "serif",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  buttonContainer: {
    alignContent: "center",
    alignItems: "center",
  },
  aboutContainer: {
    fontSize: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default AccueilScreen;
