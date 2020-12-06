import React, { useState } from "react";
import { Animated, View } from "react-native";

const image = require("../assets/images/angelPro.jpg");
const image2 = require("../assets/dogPark.png");
const image3 = require("../assets/doglogo.jpg");
const image4 = require("../assets/facebookButton.jpg");
const image5 = require("../assets/male.png");
const image6 = require("../assets/female.png");

export function PhotoAnimation(props) {
  return (
    <View>
      <Animated.Image
        source={image}
        resizeMode="cover"
        style={{
          width: 80,
          height: 80,
          borderRadius: 12,
          alignSelf: "center",
          marginTop: -1,
          marginLeft: 5,
        }}
      />
    </View>
  );
}

export function HomePhoto(props) {
  return (
    <View>
      <Animated.Image
        source={image2}
        resizeMode="cover"
        style={{
          width: "100%",
          height: 140,
          borderRadius: 0,
          alignSelf: "center",
          marginTop: 0,
          position: "absolute",
        }}
      />
    </View>
  );
}

export function LoginPhoto(props) {
  let size1 = 280;
  let size2 = 265;

  if (props.size == "small") {
    size1 = 70;
    size2 = 30;
  }

  return (
    <View>
      <Animated.Image
        source={image3}
        resizeMode="cover"
        style={{
          width: size1,
          height: size2,
          borderRadius: 300,
          alignSelf: "center",
          marginLeft: (props.size == "small" ? 15 : 0),
        }}
      />
    </View>
  );
}

export function FacebookLoginButton(props) {
  return (
    <View>
      <Animated.Image
        source={image4}
        style={{
          width: 220,
          height: 28,
          borderRadius: 5,
          alignSelf: "center",
        }}
      />
    </View>
  );
}

export function MaleAvatar(props) {
  return (
    <View>
      <Animated.Image
        source={image5}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
        }}
      />
    </View>
  );
}

export function FemaleAvatar(props) {
  return (
    <View>
      <Animated.Image
        source={image6}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
        }}
      />
    </View>
  );
}
