import { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";

export function OverlayUI1(props) {
  const [tickAnimation, setTickAnimation] = useState("");
  const { onTick } = props; 
  
    <View
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: 150,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animatable.View
        animation={"rubberBand"}
        iterationCount={1}
        direction="alternate"
        style={{
          backgroundColor: "white",
          justifyContent: "space-between",
          flexDirection: "row",
          borderRadius: 10,
          height: 100,
          width: "90%",
          alignItems: "center",
          paddingLeft: 15,
          paddingRight: 25,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            // pushTheData();
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="ios-sunny" size={35} color="black" />
            <Text>Morning walk</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            alert("test");
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="ios-cloudy-night" size={35} color="black" />
            <Text>Night walk</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onTick()
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="ios-walk" size={35} color="black" />
            <Text>Extra walk</Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    </View>;

}
