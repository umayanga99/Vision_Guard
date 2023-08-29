import React from 'react';
import { Text, StyleSheet } from 'react-native';

const LogoText = ({ cText,cColor }) => {
  const textStyle=[styles.text,{color:cColor}]
  return (
    <Text style={textStyle}>{cText}</Text>
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
    letterSpacing: -1.101,
  }
});

export default LogoText;
