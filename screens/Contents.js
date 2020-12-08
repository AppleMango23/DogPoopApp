import React, { useState,useEffect,useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
  LogBox,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { Ionicons, Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useFirebaseData, pushTheData } from "../components/FirebaseControl";
import { HomePhoto,PhotoAnimation, MaleAvatar, FemaleAvatar } from "../components/enlargeImage";
import { ModalFeatures } from "../components/modalControl";


LogBox.ignoreAllLogs()

export default function App({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [condition, setCondition] = useState("");
  const [toggleLoading, setToggleLoading] = useState(true);
  const [prompt, setPrompt] = useState();
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

            {/* Join or create */}
            <TouchableOpacity style={{width:90,height:90,borderRadius:150,alignItems:"center",backgroundColor:"#DCDCDC",marginTop:5,alignItems:'center',justifyContent:'center'}}>
              <AntDesign name="plus" size={35} color="white" />
            </TouchableOpacity>

          </View>
        </ScrollView>

        
      
      {/* This is the loading indicator */}
      <ActivityIndicator size="large" color="black" animating= {toggleLoading} style={{marginTop:180, position:'absolute', alignSelf:'center'}}/>
      <View style={{height:10}}/>



      {/* This is flatlist location */}
      {prompt && <ModalFeatures condition={condition}/>}

      <FlatList
        data={data.sort((a, b) => {
          return b.key1.localeCompare(a.key1);
        })}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginTop: 15, marginLeft: 10, marginRight: 10, paddingTop:5, paddingBottom:5, backgroundColor:"white",borderRadius:10}}
            onPress={() => {
              // var output =
              //   "Dog: Angel\nAge: 7 years\nCondition: " +
              //   item.val1.Status +
              //   "\nDate: " +
              //   item.val1.Date +
              //   "\nTime: " +
              //   item.val1.Time;
              // alert(output);
              // alert("test")
              
             

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
                  <Text style={{fontFamily: 'American Typewriter',color:"gray"}}> {item.val1.Date}</Text>
                </View>
                <View flexDirection="row" style={{paddingTop:5}}>
                  <AntDesign name="clockcircleo" size={22} color="gray" />
                  <Text style={{fontFamily: 'American Typewriter',color:"gray"}}>  {item.val1.Time}</Text>
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
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: 300,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animatable.View
            animation={"fadeInUp"}
            iterationCount={1}
            direction="alternate"
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 35,
              borderTopRightRadius: 35,
              height: 300,
              width: "100%",
              alignItems: "center",
              paddingTop:25,
            }}
          >
            <>
              <ModalFeatures modalVisible={setModalVisible}/>
            </>
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
