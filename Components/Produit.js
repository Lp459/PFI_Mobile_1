import { View, Text, Pressable, Image, StyleSheet } from "react-native";

const Produit = ({ id, nom, prix, image, navigation }) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.itemBox}
        onPress={() => {
          navigation.navigate("Detail", { id: id });
        }}
      >
        <Image style={styles.logo} source={{ uri: image }} />

        <Text>{nom}</Text>
        <Text>Prix: {prix} $</Text>
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
