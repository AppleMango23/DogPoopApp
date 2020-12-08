import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity,Modal, } from "react-native";
import { StackActions } from "@react-navigation/native";
import { HomePhoto } from "../components/enlargeImage";
import {
  MaterialIcons,
  Octicons,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { ModalFeatures, ModalSettingUpUser} from "../components/modalControl";

export default function App({ navigation }) {
  const [modalVisible, setModalVisible] = useState(true);

  

  return (
    <View style={styles.container}>
      <HomePhoto size={"big"} />
      <View style={{ height: 210 }} />
      <View
        style={{
          alignSelf: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 150,
            height: 100,
            marginLeft: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "rgba(0,0,0, .4)", // IOS
            shadowOffset: { height: 1, width: 3 }, // IOS
            shadowOpacity: 3, // IOS
            shadowRadius: 3, //IOS
            backgroundColor: "#fff",
          }}
          onPress={() => {
            setModalVisible(true)
          }}
        >
          <FontAwesome5 name="user-edit" size={42} color="gray" />

          <Text
            style={{
              paddingTop: 10,
              fontFamily: "American Typewriter",
              fontSize: 15,
            }}
          >
            User info edit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 180,
            height: 100,
            marginLeft: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "rgba(0,0,0, .4)", // IOS
            shadowOffset: { height: 1, width: 3 }, // IOS
            shadowOpacity: 3, // IOS
            shadowRadius: 3, //IOS
            backgroundColor: "#fff",
          }}
          onPress={() => {
            alert("Still in development");
          }}
        >
          <AntDesign name="edit" size={42} color="gray" />

          <Text
            style={{
              paddingTop: 10,
              fontFamily: "American Typewriter",
              fontSize: 15,
            }}
          >
            Add photo
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 180,
            height: 100,
            marginLeft: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
            shadowColor: "rgba(0,0,0, .4)", // IOS
            shadowOffset: { height: 1, width: 3 }, // IOS
            shadowOpacity: 3, // IOS
            shadowRadius: 3, //IOS
            backgroundColor: "#fff",
          }}
          onPress={() => {
            alert("Still in development")            
          }}
        >
          <Octicons name="checklist" size={42} color="gray" />

          <Text
            style={{
              paddingTop: 10,
              fontFamily: "American Typewriter",
              fontSize: 15,
            }}
          >
            Terms and condition
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 150,
            height: 100,
            marginLeft: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
            shadowColor: "rgba(0,0,0, .4)", // IOS
            shadowOffset: { height: 1, width: 3 }, // IOS
            shadowOpacity: 3, // IOS
            shadowRadius: 3, //IOS
            backgroundColor: "#fff",
          }}
          onPress={() => {
            alert("Still in development");
          }}
        >
          <AntDesign name="delete" size={42} color="gray" />
          <Text
            style={{
              fontFamily: "American Typewriter",
              fontSize: 15,
            }}
          >
            Clear storage
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 350,
            height: 120,
            marginLeft: 8,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
            shadowColor: "rgba(0,0,0, .4)", // IOS
            shadowOffset: { height: 1, width: 3 }, // IOS
            shadowOpacity: 3, // IOS
            shadowRadius: 3, //IOS
            backgroundColor: "#fff",
          }}
          onPress={() => {
            navigation.dispatch(StackActions.replace("Login"));
          }}
        >
          <MaterialCommunityIcons name="logout" size={42} color="gray" />

          <Text
            style={{
              paddingTop: 10,
              fontFamily: "American Typewriter",
              fontSize: 15,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>


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
          
        >
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: 900,
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
              height: 450,
              width: "100%",
              alignItems: "center",
              paddingTop:25,
            }}
          >
            <>
              <ModalSettingUpUser closeUp = {setModalVisible}/>

            </>
          </Animatable.View>
        </View>
      </Modal>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  
});
