import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LogoText = ({ children }) => {
  return (
    <Text style={styles.text}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#2666DE',
    textAlign: 'center',
    fontFamily: 'Roboto',  // Make sure the 'Inter' font is linked in your project
    fontSize: 36.701,
    fontStyle: 'normal',
    fontWeight: '700',
    // React Native doesn't have a "normal" line-height, you would typically use a numeric value
    // e.g., lineHeight: 40,
    letterSpacing: -1.101,
  },
});

export default LogoText;
