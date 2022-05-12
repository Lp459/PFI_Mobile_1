import React from 'react';
import { View, StyleSheet , FlatList , Text } from 'react-native';
import { useState } from 'react';

function ProduitsScreen(props) {
    const [produits, setProduits] = useState([]);
    return (
        <View style={styles.container}><Text style={styles.title}>Nos produits</Text>
        <FlatList
          data={produits}
          renderItem={({item}) => /*Produits */ null}
          keyExtractor={(item, index) => index.toString()}/></View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})

export default ProduitsScreen;