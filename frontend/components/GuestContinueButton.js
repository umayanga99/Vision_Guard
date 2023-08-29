import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GuestContinueButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text>Continue as a Guest</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    
    display: 'flex',  // This is the default in React Native, so it's optional
    width: 239,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#EFEFEF',
    backgroundColor: '#FCFCFC',
    // No gap property in React Native. Use margin or padding on inner items if needed
  }
});

export default GuestContinueButton;
