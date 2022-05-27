function UpdateLoggedIn(db) {
  db.execute(`UPDATE connexions set loggedin = 0`);
}

export default UpdateLoggedIn;
