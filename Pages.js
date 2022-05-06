import React from 'react';
class AdminScreen extends React.Component{
    constructor(db){
        this.db = db;
    }
    render() {
        return (
            <View>
            <Text style={styles.title}>Administrateur</Text>
            {db.execute("insert")}
            </View>
        )
        }
  }