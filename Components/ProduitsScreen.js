import React from 'react';
import { View, StyleSheet , FlatList , Text } from 'react-native';

function ProduitsScreen(props) {
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