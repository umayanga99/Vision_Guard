import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomCircularButton from './BottomCircularButton';  // Adjust this import according to your file structure

const CommonBottomComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftblock}>
        <Text style={styles.headertext}>Quick remote access</Text>
        <Text style={styles.subtext} numberOfLines={2}>Turn right to get fast access to your</Text>
        <Text style={styles.subtext}>active camera </Text>

      </View>
      <View style={styles.rightblock}>
        <BottomCircularButton
          onPress={() => { console.log("Button Circular button pressed") }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 39,
    paddingHorizontal: 38,
    flexDirection: 'row',  // Changed to row
    justifyContent: 'space-between',  // Added this line
    alignItems: 'center',
    backgroundColor: '#2666DE',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  text: {
    color: 'white',
  },
  leftblock: {
    justifyContent: 'flex-start',
    flexDirection:"column"
  },
  rightblock: {
    justifyContent: 'flex-end',
  },
  headertext:{
    fontWeight:"500",
    fontSize:20,
    color:"white",
    marginVertical:10
  },
  subtext:{
    fontWeight:"400",
    fontSize:14,
    color:"white"
  }
});

export default CommonBottomComponent;
