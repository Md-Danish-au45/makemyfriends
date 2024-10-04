import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LifestyleHabitsPage = () => {
  const [answers, setAnswers] = useState({
    drinking: '',
    smoking: '',
    exercise: '',
    pets: '',
  });

  const navigation = useNavigation();

  const handleSelect = (question, answer) => {
    setAnswers(prevState => ({
      ...prevState,
      [question]: answer,
    }));
  };

  const isAnySelected = Object.values(answers).some(answer => answer !== '');

  const handleNext = () => {
    if (isAnySelected) {
      navigation.navigate('AdditionalQuestionsPage');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>Let's Talk Lifestyle Habits</Text>
      <Text style={styles.subHeading}>Do their habits match yours? You go first.</Text>

      <View style={styles.questionSection}>
        <Text style={styles.question}>1. How often do you drink?</Text>
        {['Not for me', 'Newly Teetotal', 'Sober Curious', 'On special occasions', 'Social at weekends', 'Most nights'].map(option => (
          <TouchableOpacity key={option} style={answers.drinking === option ? styles.optionButtonSelected : styles.optionButton} onPress={() => handleSelect('drinking', option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.questionSection}>
        <Text style={styles.question}>2. How often do you smoke?</Text>
        {['Social smoker', 'Smoke when drinking', 'Non-smoker', 'Smoker', 'Trying to quit'].map(option => (
          <TouchableOpacity key={option} style={answers.smoking === option ? styles.optionButtonSelected : styles.optionButton} onPress={() => handleSelect('smoking', option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.questionSection}>
        <Text style={styles.question}>3. Do you exercise?</Text>
        {['Everyday', 'Often', 'Sometimes', 'Never'].map(option => (
          <TouchableOpacity key={option} style={answers.exercise === option ? styles.optionButtonSelected : styles.optionButton} onPress={() => handleSelect('exercise', option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.questionSection}>
        <Text style={styles.question}>4. Do you have any pets?</Text>
        {['Dog', 'Cat', 'Reptile', 'Amphibian', 'Bird', 'Fish', 'Don\'t have but love', 'Other', 'Turtle', 'Hamster', 'Rabbit', 'Pet free', 'All the pets', 'Want a pet', 'Allergic to pets'].map(option => (
          <TouchableOpacity key={option} style={answers.pets === option ? styles.optionButtonSelected : styles.optionButton} onPress={() => handleSelect('pets', option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        {isAnySelected && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  questionSection: {
    marginBottom: 20,
    width: '100%',
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  optionButton: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  optionButtonSelected: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007BFF',
    marginBottom: 10,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  nextButton: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  skipButton: {
    alignSelf: 'flex-end',
    padding: 10,
    backgroundColor: '#aaa',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LifestyleHabitsPage;
