import React from 'react';
import { View, StyleSheet } from 'react-native';

const SmallBox = () => {
  return <View style={styles.box}></View>;
};

const ThreeBoxesRow = () => {
  return (
    <View style={styles.rowContainer}>
      <SmallBox />
      <SmallBox />
      <SmallBox />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 47.359,
    height: 47.359,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#EFEFEF',
    backgroundColor: '#FCFCFC',
    flexShrink: 0,
    margin: 10  // Optional: added for some spacing between boxes
  },
  rowContainer: {
    flexDirection: 'row',   // Lays out children in a row
    justifyContent: 'center',  // Centers children horizontally
    alignItems: 'center',      // Centers children vertically
  }
});

export default ThreeBoxesRow;
