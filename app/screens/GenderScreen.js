import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GenderScreen = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleNext = () => {
    if (selectedGender) {
      navigation.navigate('SexualOrientationScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your gender?</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'Male' && styles.selectedOption,
          ]}
          onPress={() => handleGenderSelect('Male')}
        >
          <Text style={styles.optionText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'Female' && styles.selectedOption,
          ]}
          onPress={() => handleGenderSelect('Female')}
        >
          <Text style={styles.optionText}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === 'More' && styles.selectedOption,
          ]}
          onPress={() => handleGenderSelect('More')}
        >
          <Text style={styles.optionText}>More</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          styles.nextButton,
          !selectedGender && styles.disabledNextButton,
        ]}
        onPress={handleNext}
        disabled={!selectedGender}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedOption: {
    backgroundColor: '#ff6666',
    borderColor: '#ff6666',
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#ff6666',
    paddingVertical: 12,
    paddingHorizontal: 24,
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
  disabledNextButton: {
    backgroundColor: '#ccc',
  },
  nextButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default GenderScreen;
