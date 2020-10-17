import React, { useState,useEffect,useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

//if just no type {} means take the default one, put {} means take specific one
import { useFirebaseData, pushTheData } from "../components/FirebaseControl";
import { PhotoAnimation } from "../components/enlargeImage";
import { BotNav } from "../components/botomNav";
console.disableYellowBox = true;

export default function App(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [condition, setCondition] = useState("");
  const [toggleLoading, setToggleLoading] = useState(true);
  const data = useFirebaseData();
  const firstUpdate = useRef(true);

  // This function is to toggle the color on the icon in flatlist
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
    setToggleLoading(false)
  }, [data]);

  return (
    <View style={styles.container}>
      {/* Photo section */}
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{ backgroundColor: "white" }}
      >
        <PhotoAnimation hello={"test"} />
      </TouchableOpacity>

      {/* This is the loading indicator */}
      <ActivityIndicator size="large" color="black" animating= {toggleLoading} style={{marginTop:10, flex:1}}/>

      {/* This is flatlist location */}
      <FlatList
        data={data.sort((a, b) => {
          return b.key1.localeCompare(a.key1);

        })}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginTop: 15, marginLeft: 24 }}
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
                <Ionicons name="md-person" size={42} color="black" />
              </View>

              <View style={{ marginLeft: 24, marginTop: 2 }}>
                <View style={{ borderRadius: 20, backgroundColor: "black" }}>
                  <Text style={{ color: "white" }}>
                    {" "}
                    Condition: {item.val1.Status}
                  </Text>
                </View>
                <Text>Date: {item.val1.Date}</Text>
                <Text>Time: {item.val1.Time}</Text>
                <Text></Text>
              </View>
              <View style={{ position: "absolute", right: 35, marginTop: 10 }}>
                {iconColour(item.val1.Status)}
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 0.5,
                backgroundColor: "grey",
                paddingTop: 0,
                marginTop: -4,
                marginBottom: 0,
              }}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key1}
      />

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
      
      {/* This is the bottom navigation bar*/}
      <BotNav />
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
