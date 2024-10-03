import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BirthdayScreen = ({ navigation }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleNext = () => {
    if (day && month && year) {
      navigation.navigate('GenderScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>Your Birthday</Text>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="DD"
          value={day}
          onChangeText={setDay}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          style={styles.input}
          placeholder="MM"
          value={month}
          onChangeText={setMonth}
          keyboardType="numeric"
          maxLength={2}
        />
        <TextInput
          style={styles.input}
          placeholder="YYYY"
          value={year}
          onChangeText={setYear}
          keyboardType="numeric"
          maxLength={4}
        />
      </View>
      {(day && month && year) && (
        <Text style={styles.subtitle}>
          Your profile shows your age, not your date of birth.
        </Text>
      )}
      <TouchableOpacity
        style={[styles.nextButton, { backgroundColor: (day && month && year) ? '#ff4d4d' : '#ccc' }]}
        onPress={handleNext}
        disabled={!(day && month && year)}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '30%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 1,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    color: '#555',
  },
  nextButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BirthdayScreen;
