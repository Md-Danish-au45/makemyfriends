import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'; // Import Slider from the new package

const DistancePreferenceScreen = ({ navigation }) => {
  const [distance, setDistance] = useState(10); // Default distance in km

  const handleNext = () => {
    navigation.navigate('StudyingPage', { distance }); // Pass the selected distance to the next screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Distance Preference?</Text>
      <Text style={styles.subtitle}>
        Use the slider to set the maximum distance you would like potential matches to be located.
      </Text>
      
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>{distance} km</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={100}
          step={1}
          value={distance}
          onValueChange={setDistance}
          minimumTrackTintColor="#FF6F61"
          maximumTrackTintColor="#DDDDDD"
          thumbTintColor="#FF6F61"
        />
      </View>

      <Text style={styles.infoText}>
        Select a distance from 1 km to 100 km. This will help you find matches within your preferred range.
      </Text>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 24,
    color: '#666',
    textAlign: 'center',
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  sliderLabel: {
    fontSize: 24,
    color: '#333',
    marginBottom: 8,
  },
  slider: {
    width: '90%',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  nextButton: {
    backgroundColor: '#FF6F61',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default DistancePreferenceScreen;
