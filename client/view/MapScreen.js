
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import * as Location from 'expo-location';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import imagePath from '../constants/imagePath';

const MapScreen = () => {
  const mapRef = useRef();
  const [location, setLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [history, setHistory] = useState([])
  const [home, setHome] = useState({
    latitude: 63.6744,
    longitude: 22.6966,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [droplocationCords, setDroplocationCords] = useState({
    latitude: 60.1699,
    longitude: 24.9384,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let locationCurrent = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: locationCurrent.coords.latitude,
        longitude: locationCurrent.coords.longitude,
        speed: locationCurrent.coords.speed,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);


  console.log("location  ", location)
  console.log("history   ",history)
  return (
    <View style={styles.container}>
      {Object.keys(location).length > 0 ? <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={location}
      >
        <Marker
          coordinate={location}
          image={imagePath.curLoc}
        />
        <Circle
        center={
          home
        }
        radius={10}
        />
        <Marker
          coordinate={droplocationCords}
          image={imagePath.greenMarker}
        />

        <MapViewDirections
          origin={location}
          destination={droplocationCords}
          apikey="AIzaSyA9APAjVFIop_O5T1grvgvRxNSDzwURXPc"
          strokeWidth={3}
          strokeColor='#f56042'
          optimizeWaypoints={true}
          onReady={result => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100
              }
            })
          }}
        />
      </MapView> : <Text>No Map</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
