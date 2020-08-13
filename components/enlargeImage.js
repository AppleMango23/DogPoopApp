import React from 'react'
import { Animated, View } from 'react-native'

const backgroundImage =require("../assets/images/angelPro.jpg")

export function PhotoAnimation(props) {

  return (
    <View >        
        <Animated.Image
            source={backgroundImage}
            resizeMode='cover'
            style={{
                width: 235,
                height: 235,
                borderRadius: 150,
                alignSelf: "center",
                marginTop: 24,
            }}
        />

    </View>
)
}

