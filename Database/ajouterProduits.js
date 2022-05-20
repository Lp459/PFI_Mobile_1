
function ajouterProduits(db) {
  db.execute(
    "INSERT INTO Produits VALUES (1, 'Asus GeForce GTX 1060 6GB', 686.00, '../assets/gtx1060.jpg', 10);"
  );
  db.execute(
    "INSERT INTO Produits VALUES (2, 'NVIDIA GeForce RTX 2080 Ti', 2269.00, '../assets/rtx2080.jpg', 8);"
  );
  db.execute(
    "INSERT INTO Produits VALUES (3, 'MSI Gaming RTX 3080 10GB', 1299.00, '../assets/rtx3080.jpg', 12);"
  );
  db.execute(
    "INSERT INTO Produits VALUES (4, 'GIGABYTE Gaming OC GeForce RTX 3060 12GB', 639.00, '../assets/rtx3060.jpg', 27);"
  );
  db.execute(
    "INSERT INTO Produits VALUES (5, 'ASUS ROG Strix Z590-E Gaming', 329.00, '../assets/z590.jpg', 37);"
  );
  db.execute(
    "INSERT INTO Produits VALUES (6, 'MSI MPG Z490 Gaming Edge', 189.99, '../assets/z490EGDE.jpg', 85);"
  );
  db.execute(
    "INSERT INTO Produits VALUES (7, 'NZXT Kraken Z Series Z73 360mm', 324.99, '../assets/krakenSeriesZ73.jpg', 57);"
  );
  db.execute(
    "INSERT INTO Produits VALUES (8, 'CORSAIR iCUE H100i ELITE LCD', 339.99, '../assets/corsairH100iELITE.jpg', 152);"
  );
}

export default ajouterProduits;
