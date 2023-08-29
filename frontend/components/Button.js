import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StyledButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    width: 335,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#EFEFEF', // Directly using the color since React Native doesn't support CSS variables
    marginTop:20,
    marginBottom:40
    
}
});

export default StyledButton;
