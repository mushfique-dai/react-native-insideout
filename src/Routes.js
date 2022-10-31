import React from 'react';
import { Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TailwindProvider} from 'tailwindcss-react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

// SCREENS
import SplashScreen from './screens/splash';
import LoginScreen from './screens/login';
import Home from './screens/home';
import Profile from './screens/profile';

// Reducer
import {StateProvider} from './state/StateProvider';
import reducer, {initialState} from './state/reducer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "ios-home" : "ios-home-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "ios-person" : "ios-person-outline";
        } 

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={24} color={color} />;
      },
      tabBarLabel: ({ focused, color, size }) => {
        let name;

        if (route.name === "Home") {
          name = "Home";
        } else if (route.name === "Profile") {
          name = "Profile";
        } 

        // You can return any component that you like here!
        return (
          <Text
            className={`text-[10px] ${
              focused ? "font-bold" : ""
            }`}
            style={{ color }}
          >
            {name}
          </Text>
        );
      },
      tabBarActiveTintColor: "#066db5",
      tabBarInactiveTintColor: "gray",
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <TailwindProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Main"
              component={MyTabs}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </StateProvider>
    </TailwindProvider>
  );
}
