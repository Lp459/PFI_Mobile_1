import React, { useState } from 'react';
import { View, StyleSheet , Text, TextInput, Button } from 'react-native';
import { Database } from '../database';
import insertProduit from '../Database/insertProduit';

const db = new Database("Shop");

const [id, onChangeId] = useState(null);
const [nom, onChangeNom] = useState("");
const [prix, onChangePrix] = useState(0.00);
const [image, onChangeImage] = useState("");
const [quantite, onChangeQuantite] = useState(0);

function AdminScreen() {
    return (
        <View style={styles.container}>
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
                    placeholder="../assets/image.jpg..."
                />
                <Text>La quantité</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeQuantite}
                    value={quantite}
                    keyboardType="number-pad"
                />
            </View>
            <Button
              title='Soumettre'
              color="#87CEEB"
              onPress={() => /*Faire fonction DB pour verifier entrées*/insertProduit(db, id, nom, prix, image, quantite)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        borderRadius: 10,
        color: "red",
        fontSize: 24,
        margin: 3,
        backgroundColor: 'black'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default AdminScreen;
