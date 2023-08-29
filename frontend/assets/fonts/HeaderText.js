import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const HeaderText = ({ text }) => {
  return (
    <View style={styles.container}> 
      <Text style={styles.header}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position:"absolute",
    backgroundColor: 'white',
    // flex: 1,
    justifyContent: 'flex-start',  // Align vertically at the top
    alignItems: 'flex-start',      // Align horizontally to the left
    // padding: 10,  
    paddingBottom:10                // Some padding to ensure it's not right against the screen edge
  },
  header: {
    color: '#1A1B2D',
    fontFamily: 'Roboto',  // Make sure the 'Roboto' font is linked in your project
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 48, 
    letterSpacing: -0.96,
    // paddingTop:20,
    // paddingLeft:20
  }
});

export default HeaderText;
