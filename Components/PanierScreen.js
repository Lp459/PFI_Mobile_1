import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Database } from "../database";

const db = new Database("Shop");
var items = [];
var prixTotal = 0.0;
var userId = 0;

db.execute("SELECT id FROM connexions where loggedin = 1;")
  .then((resultSet) => {
    userId = resultSet.rows;
  })
  .catch((m) => {
    console.log("Erreur exec Select " + m);
  });

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
    <Text>Il semble que votre panier soit vide...</Text>;
  } else {
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
    />;
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
  const userId = route.params.id;
  {
    InitListeItems(userId);
  }
  return (
    <View style={styles.container}>
      <Text>Votre panier contient {items} objets</Text>
      <View>
        <AfficherListe liste={items} navigation={navigation} />
      </View>
      <Text>Résumé</Text>
      <Text>Sous-total: {prixTotal} $</Text>
      <Button
        title="Sécurisé votre paiement"
        color="blue"
        onPress={ProcederAuPaiement}
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
  bouton: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
  }
});

export default PanierScreen;
