import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  MaleAvatar,
  AsyncStorage,
  HomePhoto,
} from "../components/enlargeImage";
import {
  useFirebaseDataUsername,
  useFirebaseDataDogAge,
  useFirebaseDataDogName,
} from "../components/FirebaseControl";


export default function App(props) {
  const userName = useFirebaseDataUsername();
  const dogAge = useFirebaseDataDogAge();
  const dogName = useFirebaseDataDogName();

  return (
    <View style={styles.container}>
      <HomePhoto size={"big"} />
      <MaleAvatar size={"big"} />
      <View
        style={{
          marginTop: 15,
          marginLeft: 10,
          marginBottom: 2,
          marginRight: 10,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 10,
          shadowColor: "rgba(0,0,0, .4)", // IOS
          shadowOffset: { height: 1, width: 3 }, // IOS
          shadowOpacity: 3, // IOS
          shadowRadius: 3, //IOS
          backgroundColor: "#fff",
          height: 120,
        }}
      >
        <Text
          style={{
            paddingTop: 10,
            fontFamily: "AmericanTypewriter-Bold",
            fontSize: 24,
            paddingLeft: 8,
          }}
        >
          Mister {userName}
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontFamily: "American Typewriter",
            fontSize: 18,
            paddingLeft: 8,
          }}
        >
          Dog name: {dogName}
        </Text>
        <Text
          style={{
            paddingTop: 10,
            fontFamily: "American Typewriter",
            fontSize: 18,
            paddingLeft: 8,
          }}
        >
          Dog age: {dogAge}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
