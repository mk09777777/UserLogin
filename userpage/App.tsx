/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './components/login';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './components/signup';
import Details from './components/filldetails';
import Card from './components/detailcard';
import Editdetails from './components/editdetails';

function App(): React.JSX.Element {
const stack = createStackNavigator()
  return (
  <Fragment>
    <NavigationContainer >
      <stack.Navigator    initialRouteName="login"
            screenOptions={{ headerShown: false }}>
     
        <stack.Screen name="signup" component={Signup}/>
        <stack.Screen name="login" component={Login}/>
        <stack.Screen name="details" component={Details}/>
        <stack.Screen name="card" component={Card}/>
        <stack.Screen name="edit" component={Editdetails}/>
      </stack.Navigator>
    </NavigationContainer>
  </Fragment>
)};

export default App;
