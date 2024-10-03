import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const OtpScreen = ({ navigation, route }) => {
  const { phone, country } = route.params;
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputs[index + 1].focus();
    }
  };

  const inputs = [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the OTP sent to {phone}</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            maxLength={1}
            keyboardType="number-pad"
            ref={(input) => (inputs[index] = input)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmailVerificationScreen', { phone, country })}>
        <Text style={styles.buttonText}>Submit</Text>
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
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    elevation: 1,
    marginHorizontal: 5, // Adding space between the input boxes
  },
  button: {
    backgroundColor: '#ff0000', // Changing the button color to red
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OtpScreen;
