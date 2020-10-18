import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contents from './screens/Contents.js';
import Login from './screens/Login.js';
import React from 'react';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Contents} />
        <Stack.Screen name="Details" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;








