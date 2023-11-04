
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/splashScreen';
import SignIn from './src/auth/signIn';
import SignUp from './src/auth/signUp';
import WatchListScreen from './src/screens/watchListScreen';
import FavoriteListScreen from './src/screens/favoriteListscreen';
import DetailScreen from './src/screens/detailScreen';
import Navigation from './src/navigation/tabNavigation';
const Stack = createStackNavigator();
function App() {


  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Navigation" component={Navigation} options={{ headerShown: false }} />
        <Stack.Screen name="WatchListScreen" component={WatchListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FavoriteListScreen" component={FavoriteListScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />

      </Stack.Navigator>

    </NavigationContainer>


  );
}


export default App;
