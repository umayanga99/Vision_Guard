import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const DPComponent = () => {
  const imageUrl = "../../assets/dp.png";  // Replace with your image URL

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require(imageUrl)} 
        resizeMode="cover"
        style={styles.imageBackground}
      >
        {/* Fallback Background */}
        <Svg height="100%" width="100%">
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="#C4C4C4"
          />
        </Svg>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 53,
    height: 53,
    flexShrink: 0
  },
  imageBackground: {
    flex:1
  }
});

export default DPComponent;
