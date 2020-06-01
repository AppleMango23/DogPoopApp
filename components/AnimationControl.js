import React from "react";

export function tickOrNo() {
  if (tickAnimation == "rubberBand") {
    return (
      <>
        <Animatable.View
          animation={tickAnimation}
          iterationCount={1}
          direction="alternate"
          style={{ alignItems: "center" }}
        >
          <Ionicons name="ios-checkmark-circle" size={125} color="#00FF00" />
        </Animatable.View>
        <Text style={{ color: "white", fontSize: 20 }}>
          Thank you for telling us that!
        </Text>
      </>
    );
  } else {
    null;
  }
}