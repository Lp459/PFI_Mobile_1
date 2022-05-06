import React from 'react';
import { View, StyleSheet , Text } from 'react-native';

function AdminScreen(props) {
    return (
        <View style={styles.container}><Text style={styles.title}>Administrateur</Text>
        {db.execute("insert")}</View>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})

export default AdminScreen;
