import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Database} from "./database";

const db = new Database("Shop");

db.execute("drop table if exists produits;");
db.execute("create table produits (id, nom, prix, image);");
db.execute("drop table if exists connexion;");
db.execute("create table connexion (usager, motdepasse, admin);");
db.execute("insert into produits values (1, 'Pain 800g' , 10 , image.jpg);");
db.execute("insert into Connexion values ('LPR' , '123456' , 1);");

export default function App() {
  const [produits, setProduits] = useState([]);
  const [connexions , setConnexion] = useState([]);
  db.execute("select * from produits;")
  .then((resultSet) => {
      setProduits(resultSet.rows)
  }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
    db.execute("select * from connexions;")
    .then((resultSet) => {
        setConnexion(resultSet.rows)
    }).catch((m)=>{  setErreur("Erreur exec Select " + m);})
      
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
