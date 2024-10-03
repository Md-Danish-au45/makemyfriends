import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SexualOrientationScreen = ({ navigation }) => {
  const options = [
    'Straight',
    'Gay',
    'Lesbian',
    'Bisexual',
    'Asexual',
    'Demi-Sexual',
    'Pansexual',
    'Queer',
    'Bi-Curious',
    'Aromatic',
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else if (selectedOptions.length < 3) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleNext = () => {
    // Here you can handle the next action, like saving the selected options
    navigation.navigate('InterestedScreen'); // Replace with your next screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Sexual Orientation</Text>
      <Text style={styles.subtitle}>Select up to three:</Text>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              selectedOptions.includes(option) && styles.selectedOption,
            ]}
            onPress={() => handleSelectOption(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[
          styles.nextButton,
          selectedOptions.length === 0 && styles.disabledNextButton,
        ]}
        onPress={handleNext}
        disabled={selectedOptions.length === 0}
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
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 24,
    color: '#666',
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    margin: 5,
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

export default SexualOrientationScreen;
