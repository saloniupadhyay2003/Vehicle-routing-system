// Import necessary modules from React and React Native
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Define the main App component
const App = () => {
  // Define state variables using the useState hook
  const [counter, setCounter] = useState(0);

  // Function to handle button press and update counter
  const handlePress = () => {
    setCounter(counter + 1);
  };

  // Return the UI components using JSX
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native App</Text>
      <Text style={styles.text}>Counter: {counter}</Text>
      <Button title="Press me" onPress={handlePress} />
    </View>
  );
};

// Define styles using the StyleSheet API
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

// Export the App component for use in other files
export default App;
