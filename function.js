
import React from 'react';
export class Fonctions extends React.Component{

    init_tab = (db) =>{
        db.execute("drop table if exists produits;");
        db.execute("create table produits (id, nom, prix, image);");
        db.execute("drop table if exists connexion;");
        db.execute("create table connexion (usager, motdepasse, admin);");

        db.execute("insert into produits values (1, 'Pain 800g' , 10 , image.jpg);");
        db.execute("insert into Connexion values ('LPR' , '123456' , 1);");
    }
  }