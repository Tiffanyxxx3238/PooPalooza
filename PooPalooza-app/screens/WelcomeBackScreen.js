import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WelcomeBackScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Welcome come Back{"\n"}Poop</Text>
      <Image
        source={require('../assets/poop-welcome.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.logoText}>PooPalooza</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEDC',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  topText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Fredoka',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 260,
    height: 260,
    marginBottom: 30,
  },
  logoText: {
    fontSize: 28,
    color: '#A67243',
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
  },
});
