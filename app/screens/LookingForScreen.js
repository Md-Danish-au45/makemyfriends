import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const LookingForScreen = ({ navigation }) => {
  const options = [
    { text: 'Long term partner', emoji: '❤️' },
    { text: 'Long term but short term', emoji: '🔄' },
    { text: 'Short term but long term', emoji: '⚡️' },
    { text: 'Short term fun', emoji: '🎉' },
    { text: 'New friends', emoji: '👫' },
    { text: 'Still figuring out', emoji: '🤔' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      navigation.navigate('DistancePreferenceScreen'); // Replace with your next screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What Are You Looking For?</Text>
      <Text style={styles.subtitle}>
        All good! If it changes, there's something for everyone.
      </Text>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              selectedOption === index && styles.selectedCard,
            ]}
            onPress={() => handleSelectOption(index)}
          >
            <Text style={styles.emoji}>{option.emoji}</Text>
            <Text style={styles.cardText}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={[
          styles.nextButton,
          selectedOption === null && styles.disabledNextButton,
        ]}
        onPress={handleNext}
        disabled={selectedOption === null}
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
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 24,
    color: '#666',
    textAlign: 'center',
  },
  cardsContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center', // Center items vertically
    marginBottom: 24,
  },
  card: {
    width: '48%', // Adjust width to create space between cards
    height: 150, // Uniform height for cards
    marginVertical: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, // Add padding for better spacing
  },
  selectedCard: {
    backgroundColor: '#ff6666',
    borderColor: '#ff6666',
  },
  emoji: {
    fontSize: 50, // Increased size for better visibility
  },
  cardText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginTop: 10, // Space between emoji and text
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
    marginTop: 20,
  },
  disabledNextButton: {
    backgroundColor: '#ccc',
  },
  nextButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default LookingForScreen;
