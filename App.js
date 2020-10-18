// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Contents from './screens/Contents.js';
import Login from './screens/Login.js';

import React, {Component} from 'react';


// const AppNavigator = createStackNavigator(
//   {
//     Contents: Contents,
//     //This still in development...
//     // Login:Login,
    
//   },
//   {
//     initialRouteName: "Contents",
//     //The visible of header part
//     // headerMode: 'none',
//   }
// );

// export default createAppContainer(AppNavigator);


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Contents} />
        {/* <Stack.Screen name="Details" component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;








