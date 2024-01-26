// App.js
import React, { useState } from 'react';
import { View } from 'react-native';
import MapComponent from './components/MapComponent';
import RouteForm from './components/RouteForm';

const App = () => {
  const [routeData, setRouteData] = useState(null);

  const handleOptimizeRoute = async (startLocation, endLocation) => {
    // Replace this logic with actual API calls to a routing service
    // For demonstration purposes, using hypothetical functions getRouteDistance and getRouteTime
    const distance = await getRouteDistance(startLocation, endLocation);
    const time = await getRouteTime(startLocation, endLocation);

    setRouteData({ distance, time });
  };

  // Hypothetical function to get route distance from a routing service
  const getRouteDistance = async (start, end) => {
    // Replace this with a real API call to get the distance
    // For demonstration purposes, return a random distance (in kilometers)
    return Math.floor(Math.random() * 50) + 1;
  };

  // Hypothetical function to get route time from a routing service
  const getRouteTime = async (start, end) => {
    // Replace this with a real API call to get the time
    // For demonstration purposes, return a random time (in minutes)
    return Math.floor(Math.random() * 120) + 30;
  };

  return (
    <View style={{ flex: 1 }}>
      <RouteForm onOptimizeRoute={handleOptimizeRoute} />
      {routeData && <MapComponent routeData={routeData} />}
    </View>
  );
};

export default App;
