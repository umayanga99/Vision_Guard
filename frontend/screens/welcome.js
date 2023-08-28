import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../assets/logo-white.png")} 
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2666DE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.3, // 50% of screen width
    height: height * 0.3, // 50% of screen height
    resizeMode: 'contain',
  },
});

export default Welcome;