import React, { useState, useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from 'expo-auth-session';


WebBrowser.maybeCompleteAuthSession();

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
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:     '276493308812-59bflufu86p3o7qteavmo0oeqdem2abq.apps.googleusercontent.com',
    iosClientId:      '276493308812-et1s5gf5t4mjr2f6flpf447d9qupnlgt.apps.googleusercontent.com',
    androidClientId:  '276493308812-5n97mc1io9n4a7mflvb3acdbd4iqlv5v.apps.googleusercontent.com',
    webClientId:      '276493308812-ivh1bmllvmh7c6euqc53lan2bti47ku4.apps.googleusercontent.com',
    redirectUri: 'https://auth.expo.io/@tiffanyxxx32/PooPalooza-app',
  });


  useEffect(() => {
    const uri = makeRedirectUri({ useProxy: true });
    console.log('🔍 實際使用的 redirect URI:', uri);

    // ✅ 把 URI 印在畫面上方便手機除錯
    setUserInfo({ redirectUri: uri });

    if (response?.type === 'success') {
      const { authentication } = response;
      fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${authentication.accessToken}` },
      })
        .then(res => res.json())
        .then(data => {
          setUserInfo(data);
          console.log('Google 使用者資料:', data);
          navigation.navigate('Home');
        });
    }
  }, [response]);


  return (
    
    <View style={styles.container}>
      {userInfo?.redirectUri && (
        <Text style={{ color: 'red', fontSize: 12, marginBottom: 10 }}>
          Redirect URI: {userInfo.redirectUri}
        </Text>
      )}

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
        <Text style={styles.signText}>Sign</Text>
      </TouchableOpacity>

      {/* OR 分隔線 */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Apple Sign In */}
      {AppleAuthentication.isAvailableAsync && (
        <AppleAuthentication.AppleAuthenticationButton
          buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
          buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
          cornerRadius={8}
          style={{ width: '100%', height: 44, marginBottom: 16 }}
          onPress={async () => {
            try {
              const credential = await AppleAuthentication.signInAsync({
                requestedScopes: [
                  AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                  AppleAuthentication.AppleAuthenticationScope.EMAIL,
                ],
              });
              console.log('Apple 登入成功:', credential);
              navigation.navigate('Home');
            } catch (e) {
              if (e.code === 'ERR_CANCELED') console.log('使用者取消 Apple 登入');
              else console.error(e);
            }
          }}
        />
      )}

      {/* Google Sign In */}
      <TouchableOpacity
        style={styles.oauthButton}
        disabled={!request}
        onPress={() => promptAsync()}
      >
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
    alignSelf: 'flex-end',
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
