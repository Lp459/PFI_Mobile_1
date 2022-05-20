import ajouterProduits from "../Database/ajouterProduits"

function init_tab(db) {
    db.execute("drop table if exists produits;");
    db.execute("create table produits (id, nom, prix, image);");
    db.execute("drop table if exists connexions;");
    db.execute(
      "create table connexions (id , nom, motdepasse, admin , loggedin);"
    );
  
    ajouterProduits(db);
  
    db.execute("insert into connexions values (1 , 'LPR' , '123456' , 1 , 0);");
    db.execute("insert into connexions values (2 , 'JACK' , '123456' , 0 , 0);");
    db.execute("insert into connexions values (3 , 'OK' , '123456' , 0 , 0);");
}

export default init_tab;