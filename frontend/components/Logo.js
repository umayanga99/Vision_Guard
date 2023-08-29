import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo-white.png')} 
        style={styles.image} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'  // Fallback color if the image does not load or has transparency
  },
  image: {
    width: 78,           // Using the provided width
    height: 91,          // Using the provided height
    flexShrink: 0,       // Making sure the image does not shrink
    resizeMode: 'cover'  // This ensures the image covers the dimensions and might crop if needed
  },
});

export default Logo;
