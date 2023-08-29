import React from 'react';
import { View, StyleSheet,Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const Card = ({children}) => {
  return <View style={styles.card}>
    {children}
    </View>;
};

const styles = StyleSheet.create({
  card: {
    // position:"relative",
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    height:517,
    marginBottom:40,
    width:"85%",
    // marginRight:"15%",
    // marginLeft:"15%",
    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.01,
    shadowRadius: 3.84,
    // Android shadow properties
    elevation: 1,
    margin: 10,
    
  },
});

export default Card;
