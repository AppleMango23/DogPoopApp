import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StackActions } from "@react-navigation/native";
import { HomePhoto } from "../components/enlargeImage";
import {
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <HomePhoto size={"big"} />
      <View style={{ height: 210 }} />
      <View
        style={{
          alignSelf: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 150,
            height: 100,
            marginLeft: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.dispatch(StackActions.replace("Login"));
          }}
        >
          <FontAwesome5 name="user-edit" size={42} color="gray" />

          <Text
            style={{
              paddingTop: 10,
              fontFamily: "American Typewriter",
              fontSize: 15,
            }}
          >
            User info edit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 180,
            height: 100,
            marginLeft: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.dispatch(StackActions.replace("Login"));
          }}
        >
          <AntDesign name="edit" size={42} color="gray" />

          <Text
            style={{
              paddingTop: 10,
              fontFamily: "American Typewriter",
              fontSize: 15,
            }}
          >
            Doggo edit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 180,
            height: 100,
            marginLeft: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
          }}
          onPress={() => {
            navigation.dispatch(StackActions.replace("Login"));
          }}
        >
          <Octicons name="checklist" size={42} color="gray" />

          <Text
            style={{
              paddingTop: 10,
              fontFamily: "American Typewriter",
              fontSize: 15,
            }}
          >
            Terms and condition
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 150,
            height: 100,
            marginLeft: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
          }}
          onPress={() => {
            navigation.dispatch(StackActions.replace("Login"));
          }}
        >
          <MaterialIcons name="fingerprint" size={42} color="gray" />
          <Text
            style={{
              fontFamily: "American Typewriter",
              fontSize: 15,
            }}
          >
            Fingerprint Auth
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 350,
            height: 120,
            marginLeft: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
          }}
          onPress={() => {
            navigation.dispatch(StackActions.replace("Login"));
          }}
        >
          <MaterialCommunityIcons name="logout" size={42} color="gray" />

          <Text
            style={{
              paddingTop: 10,
              fontFamily: "American Typewriter",
              fontSize: 15,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
