import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RulesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeIcon} onPress={() => navigation.goBack()}>
        <Ionicons name="close" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Welcome to Make My Friend</Text>
      <Text style={styles.subtitle}>Please follow these rules:</Text>
      <View style={styles.ruleContainer}>
        <Text style={styles.ruleTitle}>Be Yourself</Text>
        <Text style={styles.ruleText}>Make sure your photo, age, and bio are true to who you are.</Text>
      </View>
      <View style={styles.ruleContainer}>
        <Text style={styles.ruleTitle}>Stay Safe</Text>
        <Text style={styles.ruleText}>Don't be too quick to give out personal information.</Text>
      </View>
      <View style={styles.ruleContainer}>
        <Text style={styles.ruleTitle}>Play it Cool</Text>
        <Text style={styles.ruleText}>Respect others and treat them as you would like to be treated.</Text>
      </View>
      <View style={styles.ruleContainer}>
        <Text style={styles.ruleTitle}>Be Proactive</Text>
        <Text style={styles.ruleText}>Always report bad behavior.</Text>
      </View>
      <TouchableOpacity style={styles.agreeButton} onPress={() => navigation.navigate('NameScreen')}>
        <Text style={styles.agreeButtonText}>I Agree</Text>
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
  closeIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  ruleContainer: {
    marginBottom: 20,
  },
  ruleTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  ruleText: {
    fontSize: 16,
    color: '#555',
  },
  agreeButton: {
    backgroundColor: '#ff4d4d',
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
  agreeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RulesScreen;
