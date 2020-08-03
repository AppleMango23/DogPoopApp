import React, { useState, useEffect } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useFirebaseData, pushTheData } from "../components/FirebaseControl";
import { PhotoAnimation } from "../components/enlargeImage";

//if just no type {} means take the default one
//if got put {} means take specific one
//import {TabBarIcon} from "../components/TabBarIcon";

console.disableYellowBox = true;

export default function App(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [tickAnimation, setTickAnimation] = useState("");
  const data = useFirebaseData();

  //Dont know why this will disable the sorting
  // useEffect(() => {
  //   console.log("changes happened!")
  // }, [data]);

  const iconColour = (test) => {
    if(test == "GOOD")
    return(
      <Ionicons name="ios-checkmark-circle" size={45} color="green" />
    )

    else{
      return(
        <Entypo name="circle-with-cross" size={45} color="red" />
      )
    }


  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{ backgroundColor: "white" }}
      >
        <PhotoAnimation hello={"test"}/>
      </TouchableOpacity>
      <ScrollView
      onScroll={()=>{}}
      >
      <FlatList
        data={data.sort((a, b) => {
          return a.val1.Date.localeCompare(b.Date)
        })}
        renderItem={({ item }) => (
          <TouchableOpacity 
          style={{ marginTop: 15, marginLeft: 24 }} 
          onPress={() => {
            // setModalVisible(true);
            // alert("Dog: Angel\nAge: 7 years\nCondition:",item.val1.Status)
          }} >
            <View flexDirection="row">
              <View>
                <Text>Condition:   {item.val1.Status}</Text>
                <Text>Date:            {item.val1.Date}</Text>
                <Text>Time:           {item.val1.Time}</Text>
                <Text></Text>
              </View>  
              <View style={{position: 'absolute', right: 35, marginTop:10}}>
                {iconColour(item.val1.Status)}
              </View>
            </View>
            <View
              style={{
                width: 155,
                height: 2,
                backgroundColor: "grey",
                paddingTop: 0,
                marginTop: 2,
                marginBottom: 0,
              }}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key1}
      />
      </ScrollView>

      {/* This is set and then throw the props to the file */}
      {/* <OverlayUI1 onTick={() => setTickAnimation()}/> */}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setTickAnimation("");
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
            setTickAnimation("");
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
                pushTheData();
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Ionicons name="ios-sunny" size={35} color="black" />
                <Text>Morning walk</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                pushTheData();
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Ionicons name="ios-cloudy-night" size={35} color="black" />
                <Text>Night walk</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                pushTheData();

                //This will come out something that we previously use for overlay
                // setTickAnimation("rubberBand");
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Ionicons name="ios-walk" size={35} color="black" />
                <Text>Extra walk</Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </Modal>

      {/* Bottom navigation */}
      <View
        style={{
          backgroundColor: "white",
          height: 56,
          borderTopColor: "black",
          borderTopWidth: 0.2,
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 5,
          paddingLeft: 76,
          paddingRight: 76,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            alert("test");
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Ionicons name="md-list-box" size={25} color="grey" />
            <Text>List</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            pushTheData();
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Ionicons name="md-settings" size={25} color="grey" />
            <Text>Setting</Text>
          </View>
        </TouchableOpacity>
      </View>
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
