import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AdditionalQuestionsPage = () => {
  const [answers, setAnswers] = useState({
    communication: '',
    love: '',
    education: '',
    starSign: '',
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
      navigation.navigate('RecentPicsPage');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('RecentPicsPage')}>
        <Text style={styles.buttonText}>Skip</Text>
      </TouchableOpacity>
      <Text style={styles.heading}>What else makes you, you?</Text>
      <Text style={styles.subHeading}>Don't hold back. Authenticity attracts authenticity.</Text>

      <View style={styles.questionSection}>
        <Text style={styles.question}>1. What's your communication style?</Text>
        {['I stay on WhatsApp all day', 'Big time texter', 'Phone caller', 'Video chatter', 'I\'m slow to answer on WhatsApp', 'Bad texter', 'Better in person'].map(option => (
          <TouchableOpacity key={option} style={answers.communication === option ? styles.optionButtonSelected : styles.optionButton} onPress={() => handleSelect('communication', option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.questionSection}>
        <Text style={styles.question}>2. How do you receive love?</Text>
        {['Thoughtful gesture', 'Presents', 'Touch', 'Compliments', 'Time together'].map(option => (
          <TouchableOpacity key={option} style={answers.love === option ? styles.optionButtonSelected : styles.optionButton} onPress={() => handleSelect('love', option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.questionSection}>
        <Text style={styles.question}>3. What is your education level?</Text>
        {['Bachelor degree', 'At uni', 'Highschool', 'PhD', 'On a graduate program', 'Master degree', 'Trade school'].map(option => (
          <TouchableOpacity key={option} style={answers.education === option ? styles.optionButtonSelected : styles.optionButton} onPress={() => handleSelect('education', option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.questionSection}>
        <Text style={styles.question}>4. What's your star sign?</Text>
        {['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'].map(option => (
          <TouchableOpacity key={option} style={answers.starSign === option ? styles.optionButtonSelected : styles.optionButton} onPress={() => handleSelect('starSign', option)}>
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

export default AdditionalQuestionsPage;
