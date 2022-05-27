import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import PressableLogin from "./PressableLogin";
import { Database } from "../database";
import ReinitialiserId from "../Database/ReinitialiserId";
import NettoyerComposant from "./NettoyerComposant";

const db = new Database("Shop");

function LoginScreen({ navigation }) {
  const [connexions, setConnexion] = useState([]);

  useEffect(() => {
    return () => {
      ReinitialiserId(db);
      setConnexion([]);
    };
  }, []);

  db.execute("SELECT id, nom , admin , loggedin FROM connexions;")
    .then((resultSet) => {
      setConnexion(resultSet.rows);
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexions</Text>
      {connexions.map((n) => (
        <PressableLogin
          key={n.id}
          onPress={() => {
            db.execute(
              `UPDATE connexions set loggedin = 1 where nom='${n.nom}'`
            );
            n.admin
              ? navigation.navigate("Admin", { user: n })
              : navigation.navigate("Login", { user: n });
          }}
          user={n.nom}
        />
      ))}
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
    fontSize: 35,
    color: "white",
    backgroundColor: "#00CED1",
    margin: 20,
    borderRadius: 5,
    padding: 5
  }
});

export default LoginScreen;
