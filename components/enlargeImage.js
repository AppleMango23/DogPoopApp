import React, { Component } from 'react'
import { Animated, View, TouchableOpacity, Easing, Text } from 'react-native'


const backgroundImage =require("../assets/images/angelPro.jpg")


export default function App(props) {
 
  const animatedValue = new Animated.Value(0)

  const handleAnimation = () => {
    Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease
    }).start()
  }
  

  return (
    <View style={{ flex: 1 }}>
        <Text></Text>
        
        <Animated.Image
            source={backgroundImage}
            resizeMode='cover'
            style={{
                position: 'absolute',
                left: 40,
                top: 100,
                height: 250,
                width: 250,
                transform: [
                    {
                        translateX: animatedValue.interpolate({
                            inputRange: [1, 2],
                            outputRange: [2, 0.2]
                        })
                    },
                    {
                        translateY:animatedValue.interpolate({
                            inputRange: [1, 1],
                            outputRange: [0, 0.2]
                        })
                    },
                    {
                        scale:animatedValue.interpolate({
                            inputRange: [0, 1.2],
                            outputRange: [1, 0.1]
                        })
                    }
                ]
            }}
        />
        <TouchableOpacity onPress={()=>{handleAnimation()}}>
            <Text>Transform</Text>
        </TouchableOpacity>
    </View>
)
}

