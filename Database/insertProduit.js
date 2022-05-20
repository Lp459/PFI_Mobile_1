function insertProduit(db, id, nom, prix, image, quantite) {
    db.execute(
        `INSERT INTO produits VALUES (${id}, '${nom}', ${prix}, '${image}', ${quantite});`
    )
    .catch(() => {
        console.log("Insertion de produit échoué");
    });

}

export default insertProduit;