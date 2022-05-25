import ajouterProduits from "../Database/ajouterProduits";

function init_tab(db) {
  db.execute("drop table if exists produits;");
  db.execute(
    "create table produits (id , nom, prix, image, quantite, description);"
  );
  db.execute("drop table if exists connexions;");
  db.execute(
    "create table connexions (id , nom, motdepasse, admin , loggedin);"
  );
  db.execute("drop table if exists panier");
  db.execute(
    "create table panier (id INTEGER primary key autoincrement, userId, idProduit , nom , prix , image);"
  );

  ajouterProduits(db);

  db.execute("insert into connexions values (1 , 'LPR' , 'admin_123456' , 1 , 0);");
  db.execute("insert into connexions values (2 , 'Jack' , '123456' , 0 , 0);");
  db.execute("insert into connexions values (3 , 'Marc' , '123456' , 0 , 0);");
  db.execute("insert into connexions values (4 , 'Paul' , '123456' , 0 , 0);");
  db.execute("insert into connexions values (5 , 'Lina' , 'admin_123456' , 1 , 0);");
}

export default init_tab;
