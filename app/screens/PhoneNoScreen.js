import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

const PhoneNoScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('US');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withCallingCode, setWithCallingCode] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Can we get your number?</Text>
      <CountryPicker
        {...{
          countryCode,
          withFlag,
          withCountryNameButton,
          withCallingCode,
          withEmoji,
          onSelect: (country) => {
            setCountryCode(country.cca2);
            setCountry(country);
          },
        }}
        containerButtonStyle={styles.countryPicker}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OtpScreen', { phone, country })}>
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
  countryPicker: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    justifyContent: 'center',
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
