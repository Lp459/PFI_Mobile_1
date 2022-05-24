import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { Database } from "../database";
import insertProduit from "../Database/insertProduit";

const db = new Database("Shop");

const valueId = null;
const valueNom = "";
const valuePrix = 0.0;
const valueImage = "https://";
const valueQuantite = 0;
const valueDescription = "";

function AdminScreen() {
  const [id, onChangeId] = useState(valueId);
  const [nom, onChangeNom] = useState(valueNom);
  const [prix, onChangePrix] = useState(valuePrix);
  const [image, onChangeImage] = useState(valueImage);
  const [quantite, onChangeQuantite] = useState(valueQuantite);
  const [description, onChangeDescription] = useState(valueDescription);
  const [isSend, SetIsSend] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Administrateur</Text>
        <View style={styles.fieldset}>
          <Text style={styles.legend}>Formulaire d'ajout de produit</Text>
          <Text>Identifiant</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeId}
            value={id}
            placeholder="Entrez l'identifiant ici.."
            keyboardType="number-pad"
          />
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
                    SetIsSend(true);
                    onChangeId(valueId);
                    onChangeNom(valueNom);
                    onChangePrix(valuePrix);
                    onChangeImage(valueImage);
                    onChangeQuantite(valueQuantite);
                    onChangeDescription(valueDescription);
                    /*Faire fonction DB pour verifier entrées*/ insertProduit(
                    db,
                    id,
                    nom,
                    prix,
                    image,
                    quantite,
                    description
                    )
                }
            }
            />
        </View>
        <Text style={{color: "green", alignSelf: "center"}}>{isSend ? "Votre produit a été ajouté." : "Envoi échoué!"}</Text>
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
    marginLeft: 15
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
    marginBottom: 30
  },
  legend: {
      fontFamily: "serif",
      fontSize: 15,
      margin: 8
  }
});

export default AdminScreen;
