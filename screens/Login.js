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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Facebook from "expo-facebook";
import { LoginPhoto, FacebookLoginButton } from "../components/enlargeImage";
import { StackActions } from "@react-navigation/native";

export default function App({ navigation }) {
  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");

  facebookLogIn = async () => {
    try {
      await Facebook.initializeAsync({
        appId: "2893493817548941",
      });

      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );

        let userInfo = await response.json();

        try {
          await AsyncStorage.setItem(
            "@MySuperStore:key2",
            userInfo.name
          ).then();
          await AsyncStorage.setItem("@MySuperStore:key1", userInfo.id).then(
            navigation.dispatch(StackActions.replace("Home"))
          );
        } catch (error) {
          console.log(error);
        }
      } else {
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <LoginPhoto />
        <View style={styles.containerInner}>
          <Text
            style={{
              paddingTop: 25,
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
              fontSize: 15,
            }}
          >
            You may key in to Log on Account
          </Text>
          <View style={styles.searchSection}>
            <MaterialCommunityIcons
              style={styles.searchIcon}
              name="account-cowboy-hat"
              size={25}
              color="#000"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter User Name..."
              underlineColorAndroid="transparent"
              onChangeText={(newText) => setUserName(newText)}
            />
          </View>
          <View style={styles.searchSection}>
            <MaterialCommunityIcons
              style={styles.searchIcon}
              name="lock-alert"
              size={25}
              color="#000"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter User Password..."
              underlineColorAndroid="transparent"
              secureTextEntry={true}
              onChangeText={(newText) => setPassword(newText)}
            />
          </View>

          {/* Button for username and password login */}
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={async () => {
              if (userName === "Aaa" && userPassword === "bbb") {
                await AsyncStorage.setItem(
                  "@MySuperStore:key2",
                  "Admin"
                ).then();
                await AsyncStorage.setItem(
                  "@MySuperStore:key1",
                  "abssadk12316123Fake"
                ).then(navigation.dispatch(StackActions.replace("Home")));
              }
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
          </TouchableOpacity>

          {/* Make another way for this styling */}
          <View style={{ height: 20 }} />

          {/* Using the photo taken from another file and will trigger the facebook log in feature */}
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

// Styling
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  containerInner: {
    alignItems: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: 380,
    height: 500,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
  loginBtn: {
    backgroundColor: "#66CCCC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 300,
    height: 45,
    marginTop: 20,
    alignItems: "center",
  },
  logoutBtn: {
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
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
    borderRadius: 10,
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
    borderRadius: 10,
  },
});
