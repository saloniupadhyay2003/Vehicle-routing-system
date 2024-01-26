// MapStyles.js
import { StyleSheet } from 'react-native';

const MapStyles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    flex: 1,
  },
  routeInfo: {
    backgroundColor: 'white',
    padding: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default MapStyles;
