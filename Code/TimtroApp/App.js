import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import HomeScreen from './Screen/HomeScreen';
import ForgetPassWordScreen from './Screen/FogetPasswordScreen';
import ChangePasswordScreen from './Screen/ChangePasswordScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "" }} />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "" }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "" }} />

        <Stack.Screen
          name="Forget"
          component={ForgetPassWordScreen}
          options={{ title: "" }} />

        <Stack.Screen
          name="Change"
          component={ChangePasswordScreen}
          options={{ title: "" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
