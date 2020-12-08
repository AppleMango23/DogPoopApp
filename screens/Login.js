import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Facebook from "expo-facebook";
import { LoginPhoto, FacebookLoginButton } from "../components/enlargeImage";
import { StackActions } from "@react-navigation/native";

export default function App({ navigation }) {

  facebookLogIn = async () => {
    // try {
    //   await Facebook.initializeAsync({
    //     appId: "2893493817548941",
    //   });

    //   const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    //     permissions: ["public_profile"],
    //   });
    //   if (type === "success") {
    //     const response = await fetch(
    //       `https://graph.facebook.com/me?access_token=${token}`
    //     );

    //     let userInfo = await response.json();
    //     alert(`Welcome to My Doggo App!\n ${userInfo.name}, remember give us a good rating and enjoy having a great time with your doggo!`);
    //     try {
    //       await AsyncStorage.setItem(
    //         "@MySuperStore:key1",
    //         userInfo.id
    //       )
    //       .then(navigation.dispatch(StackActions.replace("Home")));
    //     } catch (error) {
    //       // Error saving data
    //     }
        
    //   } else {
    //   }
    // } catch ({ message }) {
    //   alert(`Facebook Login Error: ${message}`);
    // }

    navigation.dispatch(StackActions.replace("Home"))
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <LoginPhoto />
        <View style = {styles.containerInner}>
        <Text
          style={{
            paddingTop: 18,
            fontFamily: "AmericanTypewriter-Bold",
            fontSize: 28,
          }}
        >
          My Doggo App
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontFamily: "American Typewriter",
            fontSize: 18,
          }}
        >
          Please Log in
        </Text>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons
            style={styles.searchIcon}
            name="contact-mail-outline"
            size={25}
            color="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="User Nickname"
            // onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.searchSection}>
          <AntDesign
            style={styles.searchIcon}
            name="lock"
            size={25}
            color="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            // onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => {
            alert("Still in development");
          }}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
        </TouchableOpacity>

        <View style={{ height: 20 }} />

        <TouchableOpacity
          onPress={() => {
            facebookLogIn();
          }}
        >
          <FacebookLoginButton />
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white'
  },
  containerInner:{
    alignItems: "center",
    borderTopRightRadius:35,
    borderTopLeftRadius:35,
    width:380,
    height:500,
    backgroundColor:'rgba(0, 0, 0, 0.1)'
  },
  loginBtn: {
    backgroundColor: "#66CCCC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 80,
    width: 300,
    height: 45,
    marginTop: 20,
    alignItems: "center",
  },
  logoutBtn: {
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  searchSection: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 150,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
    borderRadius: 150,
  },
});
