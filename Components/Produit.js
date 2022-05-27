import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import Intl from "intl";
import "intl/locale-data/jsonp/fr-CA";
import "intl/locale-data/jsonp/en-CA";

const argentEN = new Intl.NumberFormat('en-CA', {style:"currency", currency: "CAD"});
const argentFR = new Intl.NumberFormat('fr-CA', {style:"currency", currency: "CAD"});

const trad = {
  fr: {
    prix: "Prix:",
    nom: "Nom:",
  },
  en: {
    prix: "Price:",
    nom: "Name:",
  },
};

function TraduitProduit(enOrFr, nom, prix) {
  if (enOrFr == "fr") {
    return `${trad.fr.nom} ${nom}
            ${trad.fr.prix} ${argentFR.format(prix)}`;
  }
  if (enOrFr == "en") {
    return `${trad.en.nom} ${nom}
            ${trad.en.prix} ${argentEN.format(prix)}`;
  }
}

const Produit = ({ id, nom, prix, image, navigation, enFr }) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.itemBox}
        onPress={() => {
          navigation.navigate("Detail", { idObjet: id });
        }}
      >
        <Image style={styles.logo} source={{ uri: image }} />
        <Text>{TraduitProduit(enFr, nom, prix)}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  itemBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9BA1AB",
    borderWidth: 0.5,
    width: 250,
    minWidth: 200,
    height: 180,
    minHeight: 170,
  },
  logo: {
    width: 130,
    height: 100,
  },
});

export default Produit;
