import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";


export default function App({navigation}) {
  const [tickAnimation, setTickAnimation] = useState("");

  const tickOrNo = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to doggo App user!</Text>
      <Text>Login screen</Text>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate("Home")
        }}
      >
        <Text>Press me</Text>
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
