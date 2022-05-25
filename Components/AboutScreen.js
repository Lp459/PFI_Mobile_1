import React from "react";
import { View, StyleSheet, Text } from "react-native";
import OpenURLButton from "./OpenUrlButton";

function AboutScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>À propos de nous</Text>
      <Text>Louis-philippe Rousseau</Text>
      <OpenURLButton
        url={"mailto:louis-philippe_rousseau@gmail.com"}
        titre={"louis-philippe_rousseau@gmail.com"}
      />
      <Text>Alexandre Carle</Text>
      <OpenURLButton
        url={"mailto:a.carle2019@gmail.com"}
        titre={"a.carle2019@gmail.com"}
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
  title: {
    fontSize: 18,
    fontFamily: "serif",
    color: "purple",
    margin: 8,
  },
});

export default AboutScreen;
