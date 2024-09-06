import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/layout/SplashScreen';
import LoginScreen from './components/pages/security/Login';
import Dashboard from './components/pages/components/Dashboard';
import { RootStackParamList } from './interface/types';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, headerLeft: () => null }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, headerLeft: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
