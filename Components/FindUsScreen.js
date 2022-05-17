import React from "react";
import { View, StyleSheet, Text, SafeAreaView, useWindowDimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

function FindUsScreen(props) {
  const compagnieNewEgg = {
    latitude: 43.85721304144486,
    longitude: -79.38078468858814,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };
  const initialRegion = {
    latitude: 43.857220777672325,
    longitude: -79.38392823757535,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };
  const [region, setRegion] = useState(initialRegion);
  const [height, width] = useWindowDimensions();

  return (
    <SafeAreaView style={{ flex: 1, height: height - 200, width: width - 200 }}>
      <MapView
        style={{ flex: 1 }}
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        initialRegion={region}>
        <Marker
          title="NewEgg"
          pinColor="purple"
          description="L'entrepôt de l'entreprise NewEgg est situé ici"
          coordinate={compagnieNewEgg}
          onPress={() => setRegion(compagnieNewEgg)}
        />
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
});

export default FindUsScreen;
