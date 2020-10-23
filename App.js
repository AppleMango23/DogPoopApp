import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contents from './screens/Contents.js';
import Profile from './screens/Profile.js';
import Settings from './screens/Settings.js';
import React from 'react';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Contents} />
      <Stack.Screen name="Details" component={Settings} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
        {/* Profile here */}
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <AntDesign name="profile" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
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


