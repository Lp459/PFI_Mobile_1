
  import React from 'react';
  import { View, StyleSheet } from 'react-native';
  
  function init_tab(db){
    db.execute("drop table if exists produits;");
    db.execute("create table produits (id, nom, prix, image);");
    db.execute("drop table if exists connexion;");
    db.execute("create table connexion (id , usager, motdepasse, admin);");

    db.execute("insert into produits values (1, 'Pain 800g' , 10 , image.jpg);");
    db.execute("insert into Connexion values (1 , 'LPR' , '123456' , 1);");
}
const styles = StyleSheet.create({
    container: {
    }
})
  
  export default init_tab();