import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  initialLocation = {
    longitude: -122.0312186,
    latitude: 37.33233141,
  };
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      {/* <Polyline coordinates={locations.map((loc) => loc.coords)} /> */}
      <Polyline coordinates={locations.map((loc) => loc.coords)}
      strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
      strokeColors={[
        '#7F0000',
        '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
        '#B24112',
        '#E5845C',
        '#238C23',
        '#7F0000'
      ]}
      strokeWidth={6} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
