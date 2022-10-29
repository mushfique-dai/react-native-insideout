import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// SCREENS
import SplashScreen from './screens/splash';
import LoginScreen from './screens/login';

// Reducer
import {StateProvider} from './state/StateProvider';
import reducer, {initialState} from './state/reducer';

import {TailwindProvider} from 'tailwindcss-react-native';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <TailwindProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </StateProvider>
    </TailwindProvider>
  );
}