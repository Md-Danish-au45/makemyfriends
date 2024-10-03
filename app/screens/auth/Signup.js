import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/authcss/signup'; 
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Signup = () => {
  return (
    <View style={styles.container}>
      {/* Google Signup Button */}
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="google" size={24} color="#DB4437" style={styles.icon} />
        <Text style={styles.buttonText}>Sign up with Google</Text>
      </TouchableOpacity>

      {/* Facebook Signup Button */}
      <TouchableOpacity style={[styles.button, styles.facebookButton]}>
        <FontAwesome name="facebook" size={24} color="#3b5998" style={styles.icon} />
        <Text style={styles.buttonText}>Sign up with Facebook</Text>
      </TouchableOpacity>

      {/* Apple Signup Button */}
      <TouchableOpacity style={[styles.button, styles.appleButton]}>
        <MaterialCommunityIcons name="apple" size={24} color="#000000" style={styles.icon} />
        <Text style={styles.buttonText}>Sign up with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
