// SignInScreen.js

import React from 'react';
import { View, StyleSheet, Image, Dimensions ,Text} from 'react-native';
import LogoText from '../assets/fonts/LogoText';
import HeaderText from '../assets/fonts/HeaderText';
import Card from '../components/Card';
import TextBox from '../components/textBox';
import StyledButton from '../components/Button';
import ThreeBoxesRow from '../components/SmallBox';
import GuestContinueButton from '../components/GuestContinueButton';

const { width, height } = Dimensions.get('window');

const SignInScreen = () => {
  return (
    <>
    <View style={styles.logoContainer}>
      <Image 
        source={require("../assets/logo-blue.png")}
        style={styles.image}/>
      <LogoText cText='VISION GUARD' cColor='blue'/>
      </View>
      <View style={styles.signContainer}>
      {/* <HeaderText children="Sign In"/> */}
    </View>
    <View style={{width: '100%', alignItems: 'center'}}>
    <Card>
        <HeaderText text='Sign In'/>
        <Text style={styles.label}>Phone Number</Text>
        <TextBox  content="Phone Number" />
        <StyledButton
        title ="SIgn In"
        onPress={()=>{console.log("Hello")}}/>
        <Text style={[styles.label, {textAlign: 'center'}]}>Sign in With</Text>
        <ThreeBoxesRow/>
        <View style={{justifyContent:"center"}}>
          <GuestContinueButton 
        onPress={()=>{console.log("login as a guest")}}/>
        </View>
    </Card>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    // flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.2,
    height: height * 0.2,
    resizeMode: 'contain',
    marginTop: 30, // Moves the image 20 pixels down from its current position
  },
  signContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  }
});

export default SignInScreen;
