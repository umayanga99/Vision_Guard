import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DPComponent from './DP';

const CommonHeaderComponent = ({ title }) => {
  // Get today's date
  const today = new Date();
  let topMargin=20
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  return (
    <View style={styles.headerContainer}>
      <View style={[styles.innerContainer,{alignItems:"center"}]}>
        <View style={styles.lefthand}>
          <Text style={[styles.herdernormal,{marginTop:topMargin}]}>{formattedDate}</Text>
          <Text style={styles.headerText}>{title}</Text>
          <View style={{flexDirection:"row", alignItems: 'center'}}>
            <View style={styles.greenDot} />  
            <Text style={styles.herdernormal}>  10 cameras running</Text>
          </View>

        </View>
        <View style={[styles.righthand,{marginTop:topMargin}]}>
          <DPComponent/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 180,
    flexShrink: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: 'rgba(0, 0, 0, 0.21)',
    borderWidth: 1,
    backgroundColor: '#FFF',
    elevation: Platform.OS === 'android' ? 5 : 0,  // Add elevation for Android
    shadowColor: Platform.OS === 'ios' ? '#000' : 'transparent',
    shadowOffset: { width: 0, height: 4 },  // For iOS shadow
    shadowOpacity: Platform.OS === 'ios' ? 0.25 : 0,  // For iOS shadow
    shadowRadius: Platform.OS === 'ios' ? 4 : 0,  // For iOS shadow
    alignItems: 'flex-start', // Align items to the start (left)
    justifyContent: 'center', // Center items vertically
    paddingHorizontal: 15, // Add some padding to left and right
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Add this line
    width: '100%', // Add this line
    paddingLeft:"5%",
    paddingRight: "5%" // Add some padding to the right
  },
  lefthand: {
    justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  righthand: {
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:10
  },
  herdernormal:{
    fontSize:13,
    fontWeight:"normal"
  },
  greenDot: {
    width: 10,  // You can adjust the size as needed
    height: 10,  // You can adjust the size as needed
    borderRadius: 5,  // Setting it to half of the size makes it a circle
    backgroundColor: 'green',  // Setting the background color to green
  }
});

export default CommonHeaderComponent;
