import * as React from 'react'
import { Text, SafeAreaView, StyleSheet,View } from 'react-native';
import BiologyScreen from './screen/biologyScreen'
import ChemistryScreen from './screen/chemistryScreen'
import MathsScreen from './screen/mathScreen'
import PhysicsScreen from './screen/physicsScreen'
import VideoScreen from './screen/videoScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screen/homeScreen'

const Stack = createStackNavigator();

const StackNav = () => {
  return(
  <Stack.Navigator initialRouteName="HomeScreen"  screenOptions={{
    headerShown: false,
    gestureEnabled: false
  }}>
    <Stack.Screen name="BiologyScreen" component={BiologyScreen} />
    <Stack.Screen name="ChemistryScreen" component={ChemistryScreen} />
    <Stack.Screen name="PhysicsScreen" component={PhysicsScreen} />
    <Stack.Screen name="MathsScreen" component={MathsScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name ="VideoScreen" component= {VideoScreen} />

  </Stack.Navigator>)
}


export default function App() {
return(
  <NavigationContainer>
  <StackNav/>
  </NavigationContainer>
)
}