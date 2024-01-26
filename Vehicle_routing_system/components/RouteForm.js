// RouteForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import RouteFormStyles from '../styles/RouteFormStyles';

const RouteForm = ({ onOptimizeRoute }) => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');

  return (
    <View style={RouteFormStyles.container}>
      <Text style={RouteFormStyles.header}>Vehicle Routing System</Text>

      {/* Form for user input */}
      <View style={RouteFormStyles.inputContainer}>
        <TextInput
          style={RouteFormStyles.input}
          placeholder="Start Location"
          value={startLocation}
          onChangeText={(text) => setStartLocation(text)}
        />
        <TextInput
          style={RouteFormStyles.input}
          placeholder="End Location"
          value={endLocation}
          onChangeText={(text) => setEndLocation(text)}
        />
      </View>

      {/* Button to trigger route optimization */}
      <Button
        title="Optimize Route"
        onPress={() => onOptimizeRoute(startLocation, endLocation)}
        disabled={!startLocation || !endLocation}
      />
    </View>
  );
};

export default RouteForm;
