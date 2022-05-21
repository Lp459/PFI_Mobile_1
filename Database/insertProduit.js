function insertProduit(db, id, nom, prix, image, quantite, description) {
    db.execute(
        `INSERT INTO produits VALUES (${id}, '${nom}', ${prix}, '${image}', ${quantite}, '${description}');`
    )
    .catch(() => {
        console.log("Insertion de produit échoué");
    });

}

export default insertProduit;