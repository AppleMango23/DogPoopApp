import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
            width: 60,
            borderRadius: 15,
            height: 25,
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
          <Text
            style={{
              fontFamily: "American Typewriter",
              color: "white",
              marginTop: 2,
            }}
          >
            Poop
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginRight: 20,
            marginLeft: 20,
            backgroundColor: condition == "No Poop" ? "red" : "grey",
            width: 70,
            borderRadius: 15,
            height: 25,
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
          <Text
            style={{
              fontFamily: "American Typewriter",
              color: "white",
              marginTop: 2,
            }}
          >
            No Poop
          </Text>
        </TouchableOpacity>
      </View>

      <View flexDirection="row" style={{ marginTop: 5 }}>
        <TouchableOpacity
          onPress={() => {
            // True statement is for register
            pushTheData({ status: condition, firstAttempt: true })
          }}
          style={{ marginRight: 35 }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="ios-sunny" size={35} color="black" />
            <Text style={{ fontFamily: "American Typewriter" }}>
              Morning walk
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            
          }}
          style={{ marginRight: 15, marginLeft: 15 }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="ios-cloudy-night" size={35} color="black" />
            <Text style={{ fontFamily: "American Typewriter" }}>
              Night walk
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            
          }}
          style={{ marginLeft: 35 }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="ios-walk" size={35} color="black" />
            <Text style={{ fontFamily: "American Typewriter" }}>
              Extra walk
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
