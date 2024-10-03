import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

const Signin1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://res.cloudinary.com/dn3pfxep6/image/upload/v1696421982/4c4755f791f2a209f0b64ac6faf7b7b1.png' }} 
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Sign in with Google')}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => alert('Sign in with Facebook')}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PhoneNoScreen')}>
        <Text style={styles.buttonText}>Sign in with Phone No.</Text>
      </TouchableOpacity>
      <Text style={styles.troubleText}>Trouble in signing in?</Text>
      <Text style={styles.termsText}>
        By tapping sign in, you agree to our 
        <Text style={styles.linkText} onPress={() => Linking.openURL('https://example.com/terms')}>
          terms
        </Text>
        . Learn how we process your data in our 
        <Text style={styles.linkText} onPress={() => Linking.openURL('https://example.com/privacy')}>
          privacy policy
        </Text>
        and 
        <Text style={styles.linkText} onPress={() => Linking.openURL('https://example.com/cookies')}>
          cookies policy
        </Text>
        .
      </Text>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
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
  troubleText: {
    marginTop: 20,
    color: '#333333',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  termsText: {
    marginTop: 30,
    color: '#333333',
    fontSize: 12,
    textAlign: 'center',
  },
  linkText: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
});

export default Signin1;
