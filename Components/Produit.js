import { View, Text, Pressable, Image, StyleSheet,Button } from "react-native";
import {useState} from 'react';
import Intl from 'intl';
import 'intl/locale-data/jsonp/fr-CA';
import 'intl/locale-data/jsonp/en-CA';

const trad = {
  fr: {
    prix:"prix:",
    nom:"nom:"
  },
  en: {
    prix:"price:",
    nom:"name:"
  }
}


function traduitProduit(enOrFr , nom , prix){
  if(enOrFr == 'fr'){
    return `${trad.fr.nom} ${nom}
            ${trad.fr.prix} ${prix}`;
  }
  if(enOrFr == 'en'){
    return `${trad.en.nom} ${nom}
            ${trad.en.prix} ${prix}`;
  }
}

const Produit = ({ id, nom, prix, image, navigation ,enFr}) => {
  
  return (
    <View style={styles.itemContainer}>
      
      <Pressable
        style={styles.itemBox}
        onPress={() => {
          navigation.navigate("Detail", { idObjet: id });
        }}
      >
        <Image style={styles.logo} source={{ uri: image }} />
        <Text>
        {traduitProduit(enFr , nom , prix)}
        </Text>
        
        
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
    margin: 5
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
