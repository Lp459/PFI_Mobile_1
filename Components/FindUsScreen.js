import React, { useState } from "react";
import { StyleSheet, SafeAreaView, useWindowDimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from "react-native-maps";

const points = [
  { latitude: 45.6427567, longitude: -73.8378421 },
  { latitude: 45.63841464549566, longitude: -73.85657144203311 },
  { latitude: 45.61084636054002, longitude: -73.81323630980303 },
  { latitude: 45.5967908, longitude: -73.804214 },
];
function FindUsScreen() {
  const compagnieNewEgg = {
    latitude: 43.85721304144486,
    longitude: -79.38078468858814,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };
  const newEggOttawa = {
    latitude: 45.4425442,
    longitude: -75.7784885,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };
  const newEggLaval = {
    latitude: 45.5967908,
    longitude: -73.804214,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };
  const newEggAmos = {
    latitude: 48.56513213993173,
    longitude: -78.11858069473442,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };
  const lionel = {
    latitude: 45.6427567,
    longitude: -73.8378421,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };
  const initialRegion = {
    latitude: 43.857220777672325,
    longitude: -79.38392823757535,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  const { height, width } = useWindowDimensions();
  const [region, setRegion] = useState(initialRegion);

  return (
    <SafeAreaView style={{ flex: 1, height: height, width: width }}>
      <MapView
        style={styles.container}
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        <Marker
          title="NewEgg Entrepôt mère"
          pinColor="purple"
          description="L'entrepôt de l'entreprise NewEgg est situé ici"
          coordinate={compagnieNewEgg}
          onPress={() => setRegion(compagnieNewEgg)}
        />
        <Marker
          title="Lionel-Groulx"
          pinColor="blue"
          description="Le cégep Lionel-Groulx est situé ici"
          coordinate={lionel}
          onPress={() => setRegion(lionel)}
        />
        <Marker
          title="Newegg Entrepot d'Ottawa"
          pinColor="purple"
          description="L'entrepôt NewEgg dans la capitale du Canada"
          coordinate={newEggOttawa}
          onPress={() => setRegion(newEggOttawa)}
        />
        <Marker
          title="Newegg Entrepot de Laval"
          pinColor="purple"
          description="L'entrepôt NewEgg à Laval est situé ici"
          coordinate={newEggLaval}
          onPress={() => setRegion(newEggLaval)}
        />
        <Marker
          title="Newegg Entrepot d'Amos"
          pinColor="purple"
          description="L'entrepôt NewEgg d'Amos est situé ici"
          coordinate={newEggAmos}
          onPress={() => setRegion(newEggAmos)}
        />
        <Polyline coordinates={points} strokeWidth={8} strokeColor="orange" />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FindUsScreen;
