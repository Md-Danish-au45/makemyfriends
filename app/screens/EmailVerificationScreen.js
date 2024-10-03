import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EmailVerificationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const isEmailValid = email.includes('@');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Don't lose access to your account</Text>
      <Text style={styles.subtitle}>Verify your email</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity
        style={[styles.button, !isEmailValid && styles.disabledButton]}
        onPress={() => navigation.navigate('RulesScreen')}
        disabled={!isEmailValid}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={() => { /* handle Google sign in */ }}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 1,
  },
  button: {
    backgroundColor: '#34b7f1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: '#db4a39',
  },
});

export default EmailVerificationScreen;
