import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  MaleAvatar,
  FemaleAvatar,
  HomePhoto,
} from "../components/enlargeImage";
import { useFirebaseDataUsername } from "../components/FirebaseControl";

export default function App(props) {
  const [tickAnimation, setTickAnimation] = useState("");
  const data = useFirebaseDataUsername();
  // const data1 = useFirebaseDataDogInfo();
  console.log(data[0].val1);
  const tickOrNo = () => {};

  return (
    <View style={styles.container}>
      <HomePhoto size={"big"} />
      <MaleAvatar size={"big"} />
      <Text
        style={{
          paddingTop: 10,
          fontFamily: "AmericanTypewriter-Bold",
          fontSize: 24,
          paddingLeft: 8,
        }}
      >
        Mister {data[0].val1}
      </Text>
      <Text
        style={{
          paddingTop: 10,
          fontFamily: "American Typewriter",
          fontSize: 18,
          paddingLeft: 8,
        }}
      >
        Dog name: Angel Yek
      </Text>
      <Text
        style={{
          paddingTop: 10,
          fontFamily: "American Typewriter",
          fontSize: 18,
          paddingLeft: 8,
        }}
      >
        Dog age: 5
      </Text>
      {/* <Text
        style={{
          paddingTop: 10,
          fontFamily: "American Typewriter",
          fontSize: 18,
          paddingLeft: 8,
        }}
      >
        Status graph
      </Text>
      <Text
        style={{
          paddingTop: 10,
          fontFamily: "American Typewriter",
          fontSize: 18,
          paddingLeft: 8,
        }}
      >
        Walk quantity
      </Text>
      <Text
        style={{
          paddingTop: 10,
          fontFamily: "American Typewriter",
          fontSize: 18,
          paddingLeft: 8,
        }}
      >
        Walk goal
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
