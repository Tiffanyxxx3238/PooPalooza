import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/HomeScreen';

import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import LogInScreen from './screens/LogInScreen';
import WelcomeBackScreen from './screens/WelcomeBackScreen';
import CameraScreen from './screens/CameraScreen';
import ResultScreen from './screens/ResultScreen';
import CalendarScreen from './screens/CalendarScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Fredoka: require('./assets/fonts/Fredoka.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="WelcomeBack" component={WelcomeBackScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
