import React from "react";
import { View, StyleSheet, Text } from "react-native";
import OpenURLButton from "./OpenUrlButton";

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>À propos de nous</Text>
      <Text style={styles.text}>Louis-philippe Rousseau</Text>
      <View style={styles.lien}>
        <OpenURLButton
          url={"mailto:louis-philippe_rousseau@gmail.com"}
          titre={"louis-philippe_rousseau@gmail.com"}
        />
      </View>
      <Text style={styles.text}>Alexandre Carle</Text>
      <View style={styles.lien}>
        <OpenURLButton
          url={"mailto:a.carle2019@gmail.com"}
          titre={"a.carle2019@gmail.com"}
        />
      </View>
      <Text style={styles.text_date}>Dernière modification le 26 mai 2022</Text>
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
  title: {
    fontSize: 24,
    fontFamily: "serif",
    color: "purple",
    margin: 8,
    marginBottom: 20
  },
  text: {
    fontSize: 19,
    margin: 4
  },
  text_date: {
    fontSize: 15,
    marginTop: 20
  },
  lien: {
    marginBottom: 18
  }
});

export default AboutScreen;
