import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InterestedScreen = ({ navigation }) => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  const handleSelectInterest = (interest) => {
    setSelectedInterest(interest);
  };

  const handleNext = () => {
    if (selectedInterest) {
      navigation.navigate('LookingForScreen'); // Replace with your next screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you interested in seeing?</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedInterest === 'Women' && styles.selectedOption,
          ]}
          onPress={() => handleSelectInterest('Women')}
        >
          <Text style={styles.optionText}>Women</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedInterest === 'Men' && styles.selectedOption,
          ]}
          onPress={() => handleSelectInterest('Men')}
        >
          <Text style={styles.optionText}>Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.option,
            selectedInterest === 'Everyone' && styles.selectedOption,
          ]}
          onPress={() => handleSelectInterest('Everyone')}
        >
          <Text style={styles.optionText}>Everyone</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[
          styles.nextButton,
          !selectedInterest && styles.disabledNextButton,
        ]}
        onPress={handleNext}
        disabled={!selectedInterest}
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
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  option: {
    flex: 1,
    paddingVertical: 20,
    margin: 5,
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
    fontSize: 20,
    textAlign: 'center',
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

export default InterestedScreen;
