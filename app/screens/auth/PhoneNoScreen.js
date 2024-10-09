import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-input';

const PhoneNoScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Can we get your number?</Text>
      
      {/* Phone Input with Country Picker */}
      <PhoneInput
        initialCountry="us"
        value={phoneNumber}
        onChangePhoneNumber={setPhoneNumber}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Otp', { phone: phoneNumber })}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 35,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PhoneNoScreen;

