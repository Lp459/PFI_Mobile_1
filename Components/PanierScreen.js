import React from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import { Database } from "../database";

const db = new Database("Shop");
var items = [];
var prixTotal = 0.0;

const InitListeItems = (userId) => {
  db.execute(`select * from panier where userId = ${userId};`)
    .then((result) => {
      items.push(result.rows);
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });
};

const AfficherListe = (props) => {
  if (props.liste.length == 0) {
    return (
      <View>
        <Text>Il semble que votre panier soit vide...</Text>
      </View>
    );
  } else {
    return (
      <View style={{ alignSelf: "flex-start" }}>
        <FlatList
          data={props.liste}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => (
            <Produit
              id={item.id}
              nom={item.nom}
              prix={item.prix}
              image={item.image}
              navigation={props.navigation}
            />
          )}
        />
      </View>
    );
  }
};

const ProcederAuPaiement = () => {
  items = [];
  prixTotal = 0;
};

const CalculerTotal = () => {
  db.execute(`select prix from panier where userId = ${userId};`)
    .then((result) => {
      prixTotal += result.rows;
    })
    .catch((m) => {
      console.log("Erreur exec Select " + m);
    });
};

function PanierScreen({ navigation, route }) {
  {
    CalculerTotal;
  }
  const userId = route.params;
  {
    InitListeItems(userId);
  }
  return (
    <View style={styles.container}>
      <View style={styles.panierContainer}>
        <AfficherListe liste={items} navigation={navigation} />
      </View>
      <View style={styles.panierContainer}>
        <Text>Résumé</Text>
        <Text>Sous-total: {prixTotal} $</Text>
        <View style={styles.bouton}>
          <Button
            title="Sécurisé votre paiement"
            color="blue"
            onPress={ProcederAuPaiement}
          />
        </View>
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
    flexDirection: "row",
  },
  text: {
    alignSelf: "flex-end",
    margin: 10,
  },
  panierContainer: {
    justifyContent: "center",
    alignSelf: "flex-start"
  },
  bouton: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PanierScreen;
