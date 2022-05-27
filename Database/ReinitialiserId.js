function ReinitialiserId(db) {
    db.execute(
      `UPDATE connexions SET loggedin = 0;`
    ).catch(() => {
      console.log("Erreur Initialisation Id");
    });
  }
  
  export default ReinitialiserId;