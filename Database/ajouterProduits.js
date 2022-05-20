
function ajouterProduits(db) {
  db.execute(
    "INSERT INTO Produits VALUES (1, 'Asus GeForce GTX 1060 6GB', 686.00, 'gtx1060.jpg');"
  );
  db.execute(
    "INSERT INTO Produits VALUES (2, 'NVIDIA GeForce RTX 2080 Ti', 2269.00, 'rtx2080.jpg');"
  );
  db.execute(
    "INSERT INTO Produits VALUES (3, 'MSI Gaming RTX 3080 10GB', 1299.00, 'rtx3080.jpg');"
  );
  db.execute(
    "INSERT INTO Produits VALUES (4, 'GIGABYTE Gaming OC GeForce RTX 3060 12GB', 639.00, 'rtx3060.jpg');"
  );
  db.execute(
    "INSERT INTO Produits VALUES (5, 'ASUS ROG Strix Z590-E Gaming', 329.00, 'z590.jpg');"
  );
  db.execute(
    "INSERT INTO Produits VALUES (6, 'MSI MPG Z490 Gaming Edge', 189.99, 'z490EGDE.jpg');"
  );
  db.execute(
    "INSERT INTO Produits VALUES (7, 'NZXT Kraken Z Series Z73 360mm', 324.99, 'krakenSeriesZ73.jpg');"
  );
  db.execute(
    "INSERT INTO Produits VALUES (8, 'CORSAIR iCUE H100i ELITE LCD', 339.99, 'corsairH100iELITE.jpg');"
  );
}

export default ajouterProduits;
