import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const OtpScreen = ({ route }) => {
  const [otp, setOtp] = useState('');
  const { phone, country } = route.params;

  const handleOtpSubmit = () => {
    alert(`OTP submitted for ${country?.callingCode[0]} ${phone}: ${otp}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.phoneNumber}>Sent to {country?.callingCode[0]} {phone}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />
      <TouchableOpacity style={styles.button} onPress={handleOtpSubmit}>
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
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  phoneNumber: {
    fontSize: 18,
    color: '#555555',
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

export default OtpScreen;
