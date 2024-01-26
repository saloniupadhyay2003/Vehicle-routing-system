// MapComponent.js
import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import MapStyles from '../styles/MapStyles';

const MapComponent = ({ routeData }) => {
  return (
    <View style={MapStyles.mapContainer}>
      <MapView
        style={MapStyles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Display route polyline */}
        <Polyline
          coordinates={[
            { latitude: 37.7749, longitude: -122.4194 },
            // Add more coordinates for the route
          ]}
          strokeColor="#3498db"
          strokeWidth={5}
        />

        {/* Display start and end markers */}
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title="Start"
          pinColor="green"
        />
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          title="End"
          pinColor="red"
        />
      </MapView>

      {/* Display distance and time */}
      <View style={MapStyles.routeInfo}>
        <Text>Distance: {routeData.distance} km</Text>
        <Text>Time: {routeData.time} mins</Text>
      </View>
    </View>
  );
};

export default MapComponent;
