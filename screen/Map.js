import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';


const mapDelta = 0.0122
const coordinate = {
  latitude: 13.720338,
  longitude: 100.501769,
  latitudeDelta: mapDelta,
  longitudeDelta: (Dimensions.get('window').width / Dimensions.get('window').height) * mapDelta
}

const Map = () => {
  return (
    <MapView style={styles.map} initialRegion={coordinate}>
      <MapView.Marker
        coordinate={coordinate}
        title={'the summit'}
        />





    </MapView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
});

export default Map