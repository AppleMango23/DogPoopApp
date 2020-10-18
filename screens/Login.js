import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button
} from "react-native";


export default function App({navigation}) {
  const [tickAnimation, setTickAnimation] = useState("");

  const tickOrNo = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text>Testing</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Home')}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
