import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contents from './screens/Contents.js';
import Login from './screens/Login.js';
import React from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Testing() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Contents} />
      <Stack.Screen name="Details" component={Login} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      

      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Testing}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
        {/* Profile here */}
        <Tab.Screen
          name="Settings"
          component={Login}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-settings" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

    
  );
}

export default App;


