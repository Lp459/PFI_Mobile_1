
function updateLoggedIn(db) {
  console.log("update login");
  db.execute(`UPDATE connexions set loggedin = 0`);
}

export default updateLoggedIn
