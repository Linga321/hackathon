import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator, View, TextInput } from "react-native";
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
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
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
        <Polyline coordinates={locations.map((loc) => loc.coords)} />
      </MapView>
      <View style={{ position: "absolute", top: 10, width: "100%" }}>
        <TextInput
          style={{
            borderRadius: 10,
            margin: 10,
            color: "#000",
            borderColor: "#666",
            backgroundColor: "#FFF",
            borderWidth: 1,
            height: 45,
            paddingHorizontal: 10,
            fontSize: 18,
          }}
          placeholder={"Search"}
          placeholderTextColor={"#666"}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
