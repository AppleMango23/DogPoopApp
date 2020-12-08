import React, { useState } from "react";
import { Animated, View } from "react-native";

const image = require("../assets/dog1.jpg");
const image2 = require("../assets/dogPark.png");
const image3 = require("../assets/doglogo.jpg");
const image4 = require("../assets/facebookButton.jpg");
const image5 = require("../assets/avatar1.png");
const image6 = require("../assets/avatar2.png");

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
  let heighVolume = 140;

  if (props.size == "big") {
    heighVolume = 200;
  }
  return (
    <View>
      <Animated.Image
        source={image2}
        resizeMode="cover"
        style={{
          width: "100%",
          height: heighVolume,
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
  let size1 = 370;
  let size2 = 300;
  let borderEdge = 0;

  if (props.size == "small") {
    size1 = 70;
    size2 = 30;
    borderEdge = 300;
  }

  return (
    <View>
      <Animated.Image
        source={image3}
        resizeMode="cover"
        style={{
          width: size1,
          height: size2,
          borderRadius: borderEdge,
          alignSelf: "center",
          marginLeft: props.size == "small" ? 15 : 0,
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
  let size1 = 75;
  let size2 = 75;

  if (props.size == "big") {
    size1 = 220;
    size2 = size1;
  }

  return (
    <View>
      <Animated.Image
        source={image5}
        style={{
          width: size1,
          height: size2,
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
          width: 75,
          height: 75,
          alignSelf: "center",
        }}
      />
    </View>
  );
}
