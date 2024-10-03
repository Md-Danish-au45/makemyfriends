import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const StudyingPage = ({ navigation }) => {
  const [schoolName, setSchoolName] = useState('');
  const [status, setStatus] = useState('Current');

  const handleNext = () => {
    // Navigate to the next screen, passing the school name and status
    navigation.navigate('NextScreen', { schoolName, status });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>If study is your thing</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter school name"
        value={schoolName}
        onChangeText={setSchoolName}
      />

      {/* <View style={styles.statusContainer}>
        <Text style={styles.statusLabel}>Past or Current:</Text>
        <TextInput
          style={styles.statusInput}
          placeholder="Current or Past"
          value={status}
          onChangeText={setStatus}
        />
      </View> */}

      <Text style={styles.subtitle}>This is how it'll appear on profile:</Text>

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
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '90%',
    padding: 15,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  statusContainer: {
    width: '90%',
    marginBottom: 20,
  },
  statusLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  statusInput: {
    padding: 15,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
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

export default StudyingPage;
