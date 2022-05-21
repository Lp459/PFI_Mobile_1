import {
  StyleSheet,
  View
} from "react-native";
import { Database } from "./database";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavScreenAdmin from "./Components/NavScreenAdmin";
import NavScreen from "./Components/NavScreen";
import init_tab from "./Database/init_tab";
import updateLoggedIn from "./Database/updateLoggedIn";
import LoginScreen from "./Components/LoginScreen";
const db = new Database("Shop");
const Stack = createNativeStackNavigator();

init_tab(db);

export default function App() {

  updateLoggedIn(db);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Connexion"
          component={LoginScreen}
          options={{ headerTitle: () => <View /> }}
        />
        <Stack.Screen name="Login" component={NavScreen} />
        <Stack.Screen name="Admin" component={NavScreenAdmin} options={{ headerTitle: () => <View />}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    color: "white",
    backgroundColor: "#38f",
  },
  ligneCroisiere: {
    fontSize: 30,
    color: "white",
    padding: 7,
    margin: 7,
    backgroundColor: "blue",
  },
  croisiere: {
    fontSize: 15,
    fontWeight: "bold",
    color: "blue",
    padding: 4,
    margin: 4,
  },
  pressable: {
    color: "blue",
    backgroundColor: "#2be",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  pressable_text: {
    fontSize: 15,

    alignItems: "center",
  },

  appuye: {
    backgroundColor: "#26e",
    padding: 6,
    margin: 4,
    borderRadius: 10,
  },
  texteAppuye: {
    color: "lightblue",
    fontWeight: "bold",
  },
  texteNormal: {
    color: "blue",
    fontWeight: "bold",
  },
});
