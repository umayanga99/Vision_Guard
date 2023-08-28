import React from 'react';
import { StyleSheet, TextInput, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const TextBox = ({content}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder={content} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: width * 0.9,  // Set to 90% of the screen's width, adjust as needed
    padding: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 8,
    backgroundColor: '#F5F5F5',  // Directly set the background color
    // To simulate the "gap" property, use marginBottom on child components
  },
});

export default TextBox;
