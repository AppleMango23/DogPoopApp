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

  return (
    <>
      
        <Text style={{ fontFamily: "American Typewriter", fontSize: 22 }}>
          Activity Dog Today
        </Text>
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

        <View
          style={{ flex: 1, marginTop: 5 }}
          flexDirection="column"
          justifyContent="space-around"
        >
          <View style={styles.input}>
          <TextInput
            style={{paddingTop:15, paddingLeft:20}}

            placeholder="Extra notes to comments the condition."
            // onChangeText={(searchString) => {this.setState({searchString})}}
            underlineColorAndroid="transparent"
          />
          </View>

          <TouchableOpacity
            onPress={() => {
              // True statement is for register
              pushTheData({ status: condition, firstAttempt: true });
              props.modalVisible(false);
            }}
            style={{}}
          >
            <View style={{ alignItems: "center",paddingBottom:20,paddingTop:20}}>
              <Ionicons name="md-send" size={35} color="black" />
              <Text style={{ fontFamily: "American Typewriter" }}>Upload</Text>
            </View>
          </TouchableOpacity>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white'
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    width:370,
    paddingRight: 5,
    paddingBottom: 5,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "#424242",
    borderRadius: 30,
  },
});
