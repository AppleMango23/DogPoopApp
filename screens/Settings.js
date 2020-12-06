import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { StackActions } from '@react-navigation/native';

export default function App({navigation}) {

  return (
    <View style={styles.container}>
      <Text>Settings screen</Text>
      <TouchableOpacity
      onPress={() => {
        navigation.dispatch(
          StackActions.replace('Login')
        )
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  
});
