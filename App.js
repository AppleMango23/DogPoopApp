import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contents from './screens/Contents.js';
import Profile from './screens/Profile.js';
import Settings from './screens/Settings.js';
import Login from './screens/Login.js';
import React from 'react';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Contents}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={30} />
            ),
          }}
        />
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
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerLeft: false, headerTitle:"Doggo App"}} name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Details" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


