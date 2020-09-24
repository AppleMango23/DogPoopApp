import React, { useState,useEffect,useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  Animated,
  Image,
  ActivityIndicator,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

//if just no type {} means take the default one, put {} means take specific one
import { useFirebaseData, pushTheData } from "../components/FirebaseControl";
import { PhotoAnimation } from "../components/enlargeImage";
import { BotNav } from "../components/botomNav";
// import { ScrollView } from "react-native-gesture-handler";

console.disableYellowBox = true;

export default function App(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [condition, setCondition] = useState("");
  const [toggleLoading, setToggleLoading] = useState(true);
  const data = useFirebaseData();
  const firstUpdate = useRef(true);

  const [testingState, setTestingState] = useState();


  const iconColour = (status) => {
    if (status == "GOOD")
      return <Ionicons name="ios-checkmark-circle" size={48} color="green" />;
    else {
      return <Entypo name="circle-with-cross" size={48} color="red" />;
    }
  };
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    //here will only run once
    setTestingState(new Animated.Value(0))
    setToggleLoading(false)
  }, [data]);

  return (

    //Half way of working progress in youtube video 
    //#2 4:09
    <View style={{flex:1}}>
        <Animated.View style={{
          position: 'absolute',
          top:0,
          left:0,
          right:0,
          backgroundColor:'lightskyblue',
          height:120
        }}>

      </Animated.View>

      <ScrollView style={{flex:1}}
        onScroll={Animated.event(
          [{nativeEvent:{contentOffset: {y:testingState}}}]
        )}
      >
        <View style ={{
          height:120,
          width:120,
          borderRadius:80/2,
          borderColor:'white',
          borderWidth:3,
          overflow:'hidden'
        }}>
          <Image source={require("../assets/images/angelPro.jpg")}
          style={{flex:1,height:null,width:null}}
          />
        
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
