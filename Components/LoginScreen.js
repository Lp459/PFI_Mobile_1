import React from "react";
import { View, StyleSheet } from "react-native";
import PressableLogin from "./PressableLogin";

function LoginScreen({ navigation }) {
  const [connexions, setConnexion] = useState([]);
  db.execute("SELECT usager , admin , loggedin FROM connexions;")
  .then((resultSet) => {
    setConnexion([...connexions, resultSet.rows]);
  })
  .catch((m) => {
    setErreur("Erreur exec Select " + m);
  });

  return (
    <View style={styles.container}>
      {connexions.map((n) => (
        <PressableLogin
          onPress={() => {
            db.execute(
              `UPDATE connexions set loggedin = 1 where usager='${n.usager}'`
            );
            n.admin ? navigation.navigate("Admin") : navigation.navigate("Navigation");
          }}
          user={n.usager}
          flag={n.admin}
          loggedin={n.loggedin}
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
    backgroundColor: "#38f",
  },
  ligneCroisiere: {
    fontSize: 30,
    color: "white",
    padding: 7,
    margin: 7,
    backgroundColor: "blue",
  },
  croisiere: {
    fontSize: 15,
    fontWeight: "bold",
    color: "blue",
    padding: 4,
    margin: 4,
  },
  pressable: {
    color: "blue",
    backgroundColor: "#2be",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  pressable_text: {
    fontSize: 15,
    alignItems: "center",
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
  },
  texteNormal: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default LoginScreen;
