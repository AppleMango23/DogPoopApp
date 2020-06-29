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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useFirebaseData, pushTheData } from "../components/FirebaseControl";

//if just no type {} means take the default one
//if got put {} means take specific one
//import {TabBarIcon} from "../components/TabBarIcon";

const IS_IPHONE_X = 812;
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

console.disableYellowBox = false;

export default function App(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [tickAnimation, setTickAnimation] = useState("");
  const data = useFirebaseData();

  const tickOrNo = () => {
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
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{ backgroundColor: "white" }}
      >
        <Image
          source={require("../assets/images/angelPro.jpg")}
          style={{
            width: 310,
            height: 310,
            borderRadius: 150,
            alignSelf: "center",
            marginTop: 24,
          }}
        />
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginTop: 15, marginLeft: 24 }}>
            <Text>{item.Status}</Text>
            <Text>{item.Date}</Text>
            <Text>{item.Time}</Text>
            <Text></Text>
            <View
              style={{
                width: 120,
                height: 3,
                backgroundColor: "red",
                paddingTop: 0,
                marginTop: 2,
                marginBottom: 0,
              }}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
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
          {tickOrNo()}
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
                alert("test");
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Ionicons name="ios-cloudy-night" size={35} color="black" />
                <Text>Night walk</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setTickAnimation("rubberBand");
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
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent",
  },
  navBar: {
    paddingTop: 27,
    height: NAV_BAR_HEIGHT,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
  },
  titleStyle: {
    paddingTop: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  boxContainer: {
    backgroundColor: "#3BD0F5",
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
