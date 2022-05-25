import { useCallback } from "react";
import { Linking, Button } from "react-native";

// Fonction pour créer un bouton qui ouvre l'URL spécifié en paramètre
// dans le navigateur
const OpenURLButton = ({ url, titre }) => {
  const boutonUrl = useCallback(async () => {
    // Regarde si le lien est supporter
    const supporter = await Linking.canOpenURL(url);

    if (supporter) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Le lien n'a pas pu s'ouvrir dans votre navigateur: ${url}`);
    }
  }, [url]);
  return <Button color="#87CEEB" title={titre} onPress={boutonUrl} />;
};

export default OpenURLButton;
