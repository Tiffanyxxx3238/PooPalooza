import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Welcome to</Text>
      <Text style={styles.logoText}>PooPalooza</Text>

      <Image
        source={require('../assets/poop-family.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonText}>sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.buttonText}>log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEDC',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  topText: {
    fontSize: 55,
    color: '#5E412F',
    fontFamily: 'Fredoka',
    marginBottom: 5,
  },
  logoText: {
    fontSize: 65,
    color: '#A67243',
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  image: {
    width: 400,
    height: 320,
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    color: '#5E412F',
  },
});
