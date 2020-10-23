import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";


export default function App({navigation}) {
  const [tickAnimation, setTickAnimation] = useState("");

  const tickOrNo = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text>Settings screen</Text>
      <TouchableOpacity
      onPress={() => {
        navigation.navigate("Login")
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
