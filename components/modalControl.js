import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { pushTheData } from "../components/FirebaseControl";

export function ModalFeatures(props) {
  const [condition, setCondition] = useState(props.condition);
  const [textInputValue, setTextInputValue] = useState("");

  return (
    <>
      {/* Modal for add record to the database */}
      <Text style={{ fontFamily: "American Typewriter", fontSize: 22 }}>
        Activity Dog Today
      </Text>
      
      {/* Poop or not the button will back to initial color if press twice */}
      <View flexDirection="row" style={{ marginTop: 15 }}>
        <TouchableOpacity
          style={{
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: condition == "Poop" ? "green" : "grey",
            width: 85,
            borderRadius: 15,
            height: 28,
            alignItems: "center",
          }}
          onPress={() => {
            if (condition == "Poop") {
              setCondition("");
            } else {
              setCondition("Poop");
            }
          }}
        >
          <View flexDirection="row">
            <FontAwesome5
              name="poop"
              size={15}
              color="white"
              style={{ marginTop: 5 }}
            />
            <Text
              style={{
                fontFamily: "American Typewriter",
                color: "white",
                marginTop: 2,
                fontSize: 18,
                paddingLeft: 5,
              }}
            >
              Poop
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginRight: 20,
            marginLeft: 20,
            backgroundColor: condition == "No Poop" ? "red" : "grey",
            width: 100,
            borderRadius: 15,
            height: 28,
            alignItems: "center",
          }}
          onPress={() => {
            if (condition == "No Poop") {
              setCondition("");
            } else {
              setCondition("No Poop");
            }
          }}
        >
          <View flexDirection="row">
            <FontAwesome5
              name="poop"
              size={15}
              color="white"
              style={{ marginTop: 5 }}
            />
            <Text
              style={{
                fontFamily: "American Typewriter",
                color: "white",
                marginTop: 2,
                fontSize: 18,
                paddingLeft: 5,
              }}
            >
              No Poop
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      
      {/* The user can type some extra notes here */}
      <View
        style={{ flex: 1, marginTop: 5 }}
        flexDirection="column"
        justifyContent="space-around"
      >
        <View style={styles.input}>
          <TextInput
            style={{ paddingTop: 15, paddingLeft: 20 }}
            placeholder="Extra notes to comments the condition."
            onChangeText={(searchString) => {
              setTextInputValue(searchString);
            }}
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            pushTheData({ status: condition, text: textInputValue });
            props.modalVisible(false);
          }}
        >
          <View
            style={{ alignItems: "center", paddingBottom: 20, paddingTop: 20 }}
          >
            <Ionicons name="md-send" size={35} color="black" />
            <Text style={{ fontFamily: "American Typewriter" }}>Upload</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export function ModalSettingUpUser(props) {
  const [userNameState, setUsername] = useState();
  const [dogNameState, setDogName] = useState();
  const [dogAgeState, setDogAge] = useState();

  return (
    <>
      {/* Modal for register to database */}
      <Text style={{ fontFamily: "American Typewriter", fontSize: 22 }}>
        Welcome to Setting up Screen
      </Text>

      {/* Greetings */}
      <Text
        style={{
          fontFamily: "American Typewriter",
          fontSize: 14,
          padding: 15
        }}
      >
        It is a honor to serve you as our first beta users and we will be having
        a good time with our doggo and change the whole feeling into another
        level!
      </Text>
      
      {/* Text input for data insertion */}
      <View style={{ flexDirection: "column", paddingTop: 10, justifyContent:'space-between', alignItems:'flex-end', height: "30%"  }}>
        <View>
          <Text
            style={{
              fontFamily: "American Typewriter",
              fontSize: 14,
              paddingTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            Please key in the User name:
          </Text>
          <TextInput
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: 10,
              marginRight: 5,
              width: 300
            }}
            placeholder="Enter User name..."
            onChangeText={(username) => {
              setUsername(username);
            }}
            underlineColorAndroid="transparent"
          />
        </View>

        <View>
          <Text
            style={{
              fontFamily: "American Typewriter",
              fontSize: 14,
              paddingTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            What is your dog name:
          </Text>
          <TextInput
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: 10,
              marginRight: 5,
              width: 300
            }}
            placeholder="Enter dog's name..."
            onChangeText={(dogname) => {
              setDogName(dogname);
            }}
            underlineColorAndroid="transparent"
          />
        </View>

        <View>
          <Text
            style={{
              fontFamily: "American Typewriter",
              fontSize: 14,
              paddingTop: 5,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            What about your dog age:
          </Text>
          <TextInput
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              paddingLeft: 10,
              paddingRight: 10,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              borderRadius: 10,
              marginRight: 5,
              width: 300
            }}
            placeholder="Enter dog age..."
            onChangeText={(dogage) => {
              setDogAge(dogage);
            }}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
      
      {/* Button to submit */}
      <TouchableOpacity
        onPress={() => {
          pushTheData({
            firstAttempt: true,
            username: userNameState,
            dogage: dogAgeState,
            dogname: dogNameState,
          });
          props.closeUp(false);
        }}
      >
        <View
          style={{ alignItems: "center", paddingBottom: 20, paddingTop: 100 }}
        >
          <Ionicons name="md-send" size={35} color="black" />
          <Text style={{ fontFamily: "American Typewriter" }}>Confirm!</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    width: 370,
    paddingRight: 5,
    paddingBottom: 5,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "#424242",
    borderRadius: 30,
  },
});
