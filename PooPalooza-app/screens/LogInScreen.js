import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* 上方標題與返回箭頭 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
            source={require('../assets/icons/back.png')}
            style={styles.backIcon}
            resizeMode="contain"
        />
        </TouchableOpacity>
      </View>

      <View style={styles.titleRow}>
        <Text style={styles.title}>PooPalooza</Text>
        <Image
            source={require('../assets/poop-signin.png')}
            style={styles.imageSmall}
            resizeMode="contain"
        />
        </View>

      {/* 輸入欄位 */}
      <TextInput
        style={styles.input}
        placeholder="Poopalooza account"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Text style={styles.forgot}>forget password</Text>

      <TouchableOpacity
        style={styles.signButton}
        onPress={() => navigation.navigate('Home')}
      >
      <Text style={styles.signText}>Log</Text>
      </TouchableOpacity>


      {/* OR 分隔線 */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Apple Sign In */}
      <TouchableOpacity style={styles.oauthButton}>
        <AntDesign name="apple1" size={20} color="black" />
        <Text style={styles.oauthText}>USE Apple sign</Text>
      </TouchableOpacity>

      {/* Google Sign In */}
      <TouchableOpacity style={styles.oauthButton}>
        <AntDesign name="google" size={20} color="#EA4335" />
        <Text style={styles.oauthText}>USE Google sign</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EEDC',
    paddingHorizontal: 30,
    paddingTop: 60,
    alignItems: 'flex-end',
  },
  header: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    fontFamily: 'Fredoka',
    color: '#A67243',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#F3EAD4',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 14,
    fontFamily: 'Fredoka',
    fontSize: 20,
  },
  forgot: {
    width: '100%',
    textAlign: 'right',
    color: '#999',
    fontSize: 16,
    fontFamily: 'Fredoka',
    marginBottom: 20,
  },
  signButton: {
    backgroundColor: '#E9D9B0',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  signText: {
    fontSize: 18,
    fontFamily: 'Fredoka',
    fontWeight: 'bold',
    color: '#5E412F',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  orText: {
    marginHorizontal: 8,
    color: '#888',
    fontFamily: 'Fredoka',
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: '#ccc',
  },
  oauthButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 35,
    gap: 10,
  },
  oauthText: {
    fontFamily: 'Fredoka',
    fontSize: 16,
    color: '#333',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end', // ✅ 整排靠右
    marginBottom: 20,
    gap: 12,
    maxWidth: '100%',
  },
  imageSmall: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
  },
  backIcon: {
    width: 50,
    height: 50,
},


});
