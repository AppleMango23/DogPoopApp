import React, { Component,useState, useEffect } from 'react'
import { Animated, View, TouchableOpacity, Easing, Text } from 'react-native'


const backgroundImage =require("../assets/images/angelPro.jpg")


export function PhotoAnimation(props) {
  const animatedValue = new Animated.Value(0)
//   const [shorter, setShorter] = useState(235);

  const handleAnimation = async() => {
    Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease
    }).start()
  }

//   const shorterTheHeight = () => {
//     setShorter(100)
//   }

  useEffect(() => {
    // console.log("Welcome props")
    // console.log(props.hello);
  }, []);
  

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
                transform: [
                    {
                        translateX: animatedValue.interpolate({
                            inputRange: [1, 3],
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
        {/* <TouchableOpacity onPress={()=>{
            handleAnimation()
        }} style = {{marginTop:20}}>
            <Text>Transform</Text>
        </TouchableOpacity> */}
    </View>
)
}

