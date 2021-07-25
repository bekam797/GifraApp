import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import GifraContainer from './src/pages/GifraContainer';
import GifraElectedImageContainer from './src/pages/GifraElectedImageContainer';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthProvider} from './src/context/InitialContext';

const THEME_COLOR = '#000000';
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000000',
  },
};

const App = () => {
  return (
    <>
      <AuthProvider>
        <SafeAreaView style={styles.SafeArea}>
          <StatusBar barStyle="light-content" />
          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Home" component={GifraContainer} />
              <Stack.Screen
                name="Details"
                component={GifraElectedImageContainer}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </AuthProvider>
    </>
  );
};

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
});

export default App;
