import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Database } from "../database";
import InsertProduit from "../Database/InsertProduit";

const db = new Database("Shop");

var id = 0;
const valueNom = "";
const valuePrix = "0.0";
const valueImage = "https://";
const valueQuantite = "0";
const valueDescription = "";

const wait = (tempsLibre) => {
  return new Promise((reussi) => setTimeout(reussi, tempsLibre));
};

function AdminScreen() {
  //useState pour les champs d'entrées
  const [nom, onChangeNom] = useState(valueNom);
  const [prix, onChangePrix] = useState(valuePrix);
  const [image, onChangeImage] = useState(valueImage);
  const [quantite, onChangeQuantite] = useState(valueQuantite);
  const [description, onChangeDescription] = useState(valueDescription);

  const [refresh, setRefresh] = useState(false);

  //Remet les champs d'entrées à leur valeur de base
  const InitUseState = () => {
    onChangeNom(valueNom);
    onChangePrix(valuePrix);
    onChangeImage(valueImage);
    onChangeQuantite(valueQuantite);
    onChangeDescription(valueDescription);
  };

  //Fonction qui rafraichie les données lors qu'on glisse
  //vers le bas
  const onRefresh = useCallback(() => {
    setRefresh(true);
    wait(2000).then(() => {
      InitUseState();
      setRefresh(false);
    });
  }, []);

  const TrouverDernierId = () => {
    db.execute("SELECT MAX(id) as id from produits;")
      .then((result) => {
        let obj = result.rows[0];
        id = obj.id + 1;
      })
      .catch(() => {
        console.log("Erreur Trouver Id");
      });
  };

  const VerifierChamps = () => {
    console.log(nom.trim().length > 0);
    console.log(parseInt(prix) > 0);
    console.log(image.includes("https://"));
    console.log(parseInt(quantite) > 0);
    return (
      nom.trim().length > 0 &&
      parseInt(prix) > 0 &&
      image.includes("https://") &&
      parseInt(quantite) > 0
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.title}>Administrateur</Text>
        <View style={styles.fieldset}>
          <Text style={styles.legend}>Formulaire d'ajout de produit</Text>
          <Text>Nom</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNom}
            value={nom}
            placeholder="Entrez le nom..."
          />
          <Text>Prix</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePrix}
            value={prix}
            keyboardType="decimal-pad"
          />
          <Text>Image</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeImage}
            value={image}
            keyboardType="url"
            placeholder="https://image.jpg"
          />
          <Text>La quantité</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeQuantite}
            value={quantite}
            keyboardType="number-pad"
          />
          <Text>La description</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeDescription}
            value={description}
          />
        </View>
        <View style={styles.submitButton}>
          <Button
            title="Soumettre"
            color="#87CEEB"
            onPress={() => {
              if (VerifierChamps()) {
                InitUseState();
                TrouverDernierId();
                InsertProduit(db, id, nom, prix, image, quantite, description);
                alert("Votre produit a été ajouté avec succès!");
              } else {
                alert("Un ou des champs sont invalides! Réessayez.");
              }
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    borderRadius: 7,
    width: 200,
    color: "red",
    fontSize: 24,
    margin: 3,
    backgroundColor: "black",
    justifyContent: "center",
    paddingLeft: 20,
    marginLeft: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 30,
  },
  legend: {
    fontFamily: "serif",
    fontSize: 15,
    margin: 8,
  },
});

export default AdminScreen;
