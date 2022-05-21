
function ajouterProduits(db) {
  db.execute(
    "INSERT INTO produits VALUES (1, 'Asus GeForce GTX 1060 6GB', 686.00, 'https://c1.neweggimages.com/ProductImage/ADFR_1_20170922339927387.jpg', 10, 'Carte graphique Asus Geforce GTX 1060 6 Go avec double fan.');"
  );
  db.execute(
    "INSERT INTO produits VALUES (2, 'NVIDIA GeForce RTX 2080 Ti', 2269.00, 'https://c1.neweggimages.com/ProductImage/A6V6_131892134822443207UHmuOK7nLc.jpg', 8, 'Carte graphique NVIDIA GeForce RTX 2080 Ti Founders Edition 11 Go GDDR6. Vitesse de base à 1635 MHz.');"
  );
  db.execute(
    "INSERT INTO produits VALUES (3, 'MSI Gaming RTX 3080 10GB', 1299.00, 'https://c1.neweggimages.com/ProductImage/14-137-677-V07.jpg', 12, 'Carte graphique MSI Gaming GeForce RTX 3080 GDDR6 PCI Express 4.0 pour des cartes mères ATX. Vitesse maximal à 1830 MHz.');"
  );
  db.execute(
    "INSERT INTO produits VALUES (4, 'GIGABYTE Gaming OC GeForce RTX 3060 12GB', 639.00, 'https://c1.neweggimages.com/ProductImageCompressAll60/14-932-433-V10.jpg', 27, 'Carte vidéo GIGABYTE Gaming OC RTX 3060 PCI 4.0 Express. Vitesse maximal à 1837 MHz. Carte performante et silencieuse, parfait pour le gaming.');"
  );
  db.execute(
    "INSERT INTO produits VALUES (5, 'ASUS ROG Strix Z590-E Gaming', 329.00, 'https://c1.neweggimages.com/ProductImageCompressAll60/13-119-367-V04.jpg', 37, 'Carte mère Asus ROG Strix Z590-E Gaming LGA 1200 11e génération. Compatible avec les processeurs Intel Core de la 11e génération.');"
  );
  db.execute(
    "INSERT INTO produits VALUES (6, 'MSI MPG Z490 Gaming Edge', 189.99, 'https://c1.neweggimages.com/ProductImage/13-144-302-V01.jpg', 85, 'Carte mère ATX MSI Z490 Gaming Edge LGA 1200 SATA 6Gb/s. Compatible avec la 10e et 11e génération Intel Core.');"
  );
  db.execute(
    "INSERT INTO produits VALUES (7, 'NZXT Kraken Z Series Z73 360mm', 324.99, 'https://c1.neweggimages.com/ProductImage/35-146-070-V01.jpg', 57, 'Refroidisseur liquide pour processeur AIO RGB de NZXT Kraken Z Series Z73 360 mm. Possède un écran LCD personnalisable et la pompe améliorée permet un refroidissement silencieux et performant.');"
  );
  db.execute(
    "INSERT INTO produits VALUES (8, 'CORSAIR iCUE H100i ELITE LCD', 339.99, 'https://c1.neweggimages.com/ProductImage/35-181-264-V01.jpg', 152, 'Refroidisseur liquide pour processeur avec un écran LCD IPS Corsair iCUE H100i ELITE haut de gamme. Donner un nouveau look à votre ordinateur Corsair.');"
  );
}

export default ajouterProduits;
