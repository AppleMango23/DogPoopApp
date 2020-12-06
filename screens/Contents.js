import React, { useState,useEffect,useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons, Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { BlurView } from 'expo-blur';
import { useFirebaseData, pushTheData } from "../components/FirebaseControl";
import { HomePhoto,PhotoAnimation, MaleAvatar, FemaleAvatar } from "../components/enlargeImage";
import { YellowBox } from 'react-native'
import { StackActions } from '@react-navigation/native';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default function App({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [condition, setCondition] = useState("");
  const [toggleLoading, setToggleLoading] = useState(true);
  const data = useFirebaseData();
  const firstUpdate = useRef(true);
  
  // This function is to toggle the color on the icon in flatlist
  const iconColour = (status) => {
    if (status == "GOOD")
      return (
      <View style={{justifyContent:'center'}}>
        <Ionicons name="ios-checkmark-circle" size={48} color="green" />
      </View>
      );
    else {
      return(
        <View style={{justifyContent:'center'}}>
        <Ionicons name="ios-close-circle" size={48} color="red" />
      </View>
      );
    }
  };

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        alert("User logout success.")
      }),
    [navigation]
  );


  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setToggleLoading(false)
  }, [data]);

  return (
    <View style={styles.container}>
      {/* Photo section */}
      <ScrollView>
      <HomePhoto/>
        <ScrollView horizontal={true}>
          <View style={{height:105,paddingTop:5}} flexDirection="row" justifyContent="space-around">
            <TouchableOpacity style={{width:90,height:90,borderRadius:150,alignItems:"center",backgroundColor:"white"}}>
              <MaleAvatar/>
            </TouchableOpacity>

            <TouchableOpacity style={{width:100,height:100,alignItems:"center"}}>
              <FemaleAvatar/>
            </TouchableOpacity>

            <TouchableOpacity style={{width:100,height:100,alignItems:"center"}}>
              <MaleAvatar/>
            </TouchableOpacity>

            <TouchableOpacity style={{width:100,height:100,alignItems:"center"}}>
              <FemaleAvatar/>
            </TouchableOpacity>

            <TouchableOpacity style={{width:90,height:90,borderRadius:150,alignItems:"center",backgroundColor:"#DCDCDC",marginTop:5,alignItems:'center',justifyContent:'center'}}>
              <AntDesign name="plus" size={35} color="white" />
            </TouchableOpacity>

          </View>
        </ScrollView>
      
      {/* This is the loading indicator */}
      {/* <ActivityIndicator size="large" color="black" animating= {toggleLoading} style={{marginTop:10, flex:1}}/> */}
      <View style={{height:10}}/>

      {/* This is flatlist location */}
      <FlatList
        data={data.sort((a, b) => {
          return b.key1.localeCompare(a.key1);
        })}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginTop: 15, marginLeft: 10, marginRight: 10, paddingTop:5, paddingBottom:5, backgroundColor:"white",borderRadius:10}}
            onPress={() => {
              var output =
                "Dog: Angel\nAge: 7 years\nCondition: " +
                item.val1.Status +
                "\nDate: " +
                item.val1.Date +
                "\nTime: " +
                item.val1.Time;
              alert(output);
            }}
          >
            <View flexDirection="row">
              <View style={{ marginTop: 6 }}>
                <PhotoAnimation/>
              </View>

              <View style={{ marginLeft: 24, marginTop: 2 }}>
                <View >
                  <Text style={{ color: "black", fontWeight:"bold",fontSize:16 }}>
                    Condition: {item.val1.Status}
                  </Text>
                </View>
                <View flexDirection="row" style={{paddingTop:5}}>
                  <MaterialIcons name="date-range" size={22} color="gray" />
                  <Text style={{color:"gray"}}> {item.val1.Date}</Text>
                </View>
                <View flexDirection="row" style={{paddingTop:5}}>
                  <AntDesign name="clockcircleo" size={22} color="gray" />
                  <Text style={{color:"gray"}}>  {item.val1.Time}</Text>
                </View>
                
                <Text></Text>
              </View>
              <View style={{ position: "absolute", right: 35, marginTop: 10 }}>
                {iconColour(item.val1.Status)}
              </View>
            </View>
            
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key1}
      />
      </ScrollView>

      {/* This is the whole modal transfer this to .js file */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableOpacity
          activeOpacity={1.0}
          style={[
            styles.containerModal,
            { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          ]}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          {/* {tickOrNo()} */}
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: 150,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animatable.View
            animation={"bounceInUp"}
            iterationCount={1}
            direction="alternate"
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              height: 150,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 22 }}>Activity Dog Today</Text>
            <View flexDirection="row" style={{ marginTop: 15 }}>
              <TouchableOpacity
                style={{
                  marginLeft: 20,
                  marginRight: 20,
                  backgroundColor: condition == "Poop" ? "green" : "grey",
                  width: 60,
                  borderRadius: 15,
                  height: 25,
                  alignItems:'center'
                }}
                onPress={() => {
                  if (condition == "Poop") {
                    setCondition("");
                  } else {
                    setCondition("Poop");
                  }
                }}
              >
                <Text style={{ color: "white", marginTop: 2 }}> Poop</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  marginRight: 20,
                  marginLeft: 20,
                  backgroundColor: condition == "No Poop" ? "red" : "grey",
                  width: 70,
                  borderRadius: 15,
                  height: 25,
                  alignItems:'center'
                }}
                onPress={() => {
                  if (condition == "No Poop") {
                    setCondition("");
                  } else {
                    setCondition("No Poop");
                  }
                }}
              >
                <Text style={{ color: "white", marginTop: 2 }}> No Poop</Text>
              </TouchableOpacity>
            </View>

            <View flexDirection="row" style={{ marginTop: 5 }}>
              <TouchableOpacity
                onPress={() => {
                  pushTheData({ status: condition });
                  setModalVisible(false);
                }}
                style={{ marginRight: 35 }}
              >
                <View style={{ alignItems: "center" }}>
                  <Ionicons name="ios-sunny" size={35} color="black" />
                  <Text>Morning walk</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  pushTheData({ status: condition });
                  setModalVisible(false);
                }}
                style={{ marginRight: 15, marginLeft: 15 }}
              >
                <View style={{ alignItems: "center" }}>
                  <Ionicons name="ios-cloudy-night" size={35} color="black" />
                  <Text>Night walk</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  pushTheData({ status: condition });
                  setModalVisible(false);
                }}
                style={{ marginLeft: 35 }}
              >
                <View style={{ alignItems: "center" }}>
                  <Ionicons name="ios-walk" size={35} color="black" />
                  <Text>Extra walk</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </Modal>
      
      {/* Floating button */}
      <TouchableOpacity
        style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:60,
            position: 'absolute',                                          
            bottom: 5,                                                    
            right: 24,
            height:60,
            backgroundColor:'#fff',
            borderRadius:100,
          }}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Entypo name="plus" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#C3E4ED',
    flex: 1,
  },
  containerModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
