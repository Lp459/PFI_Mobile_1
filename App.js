import { StyleSheet, View } from "react-native";
import { Database } from "./database";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavScreenAdmin from "./Components/NavScreenAdmin";
import NavScreen from "./Components/NavScreen";
import Init_Tab from "./Database/Init_Tab";
import UpdateLoggedIn from "./Database/UpdateLoggedIn";
import LoginScreen from "./Components/LoginScreen";
const db = new Database("Shop");
const Stack = createNativeStackNavigator();

Init_Tab(db);

export default function App() {
  UpdateLoggedIn(db);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Connexion"
          component={LoginScreen}
          options={{ headerTitle: () => <View /> }}
        />
        <Stack.Screen name="Login" component={NavScreen} />
        <Stack.Screen
          name="Admin"
          component={NavScreenAdmin}
          options={{ headerTitle: () => <View /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

