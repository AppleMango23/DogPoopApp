import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function BotNav(navigation) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.containerIcon}>
          <Ionicons name="md-list-box" size={25} color="grey" />
          <Text>List</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.path.navigate('Details');
        }}
      >
        <View style={styles.containerIcon}>
          <Ionicons name="md-settings" size={25} color="grey" />
          <Text>Setting</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 56,
    borderTopColor: "black",
    borderTopWidth: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingLeft: 76,
    paddingRight: 76,
  },
  containerIcon: {
    justifyContent: "center", 
    alignItems: "center"
  }
  
});
