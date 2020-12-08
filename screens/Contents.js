import React, { useState, useEffect, useRef } from "react";
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
import {
  useFirebaseData,
  useFirebaseDataUsername,
  useFirebaseDataDogName,
  useFirebaseDataDogAge,
  useFirebaseDataGroup,
} from "../components/FirebaseControl";
import {
  HomePhoto,
  PhotoAnimation,
  MaleAvatar,
  FemaleAvatar,
} from "../components/enlargeImage";
import { ModalFeatures, ModalSettingUpUser } from "../components/modalControl";

LogBox.ignoreAllLogs();

export default function App({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [condition, setCondition] = useState("");
  const [toggleLoading, setToggleLoading] = useState(true);
  const [prompt, setPrompt] = useState();
  const data = useFirebaseData();
  const dataGroup = useFirebaseDataGroup();
  const userName = useFirebaseDataUsername();
  const dogAge = useFirebaseDataDogAge();
  const dogName = useFirebaseDataDogName();
  const firstUpdate = useRef(true);

  // This function is to toggle the color on the icon in flatlist
  const iconColour = (status) => {
    if (status == "GOOD")
      return (
        <View style={{ justifyContent: "center"}}>
          <Ionicons name="ios-checkmark-circle" size={55} color="green" />
        </View>
      );
    else {
      return (
        <View style={{ justifyContent: "center" }}>
          <Ionicons name="ios-close-circle" size={55} color="red" />
        </View>
      );
    }
  };

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        alert("User logout success.");
      }),
    [navigation]
  );

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setToggleLoading(false);
  }, [data]);

  return (
    <View style={styles.container}>
      {/* Photo section */}

      <ScrollView>
        <HomePhoto />
        <ScrollView horizontal={true}>
          <View
            style={{ height: 105, paddingTop: 5 }}
            flexDirection="row"
            justifyContent="space-around"
          >
            <FlatList
              horizontal={true}
              data={dataGroup}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ width: 100, height: 100, alignItems: "center" }}
                  onPress={() => {}}
                >
                  <MaleAvatar />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.key1}
            />

            {/* Join or create */}
            <TouchableOpacity
              style={{
                width: 75,
                height: 75,
                borderRadius: 150,
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="plus" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* This is the loading indicator */}
        <ActivityIndicator
          size="large"
          color="black"
          animating={toggleLoading}
          style={{ marginTop: 180, position: "absolute", alignSelf: "center" }}
        />
        <View style={{ height: 10 }} />

        {/* {prompt && <ModalFeatures condition={condition}/>} */}
        {prompt && <ModalSettingUpUser />}

        <FlatList
          data={data.sort((a, b) => {
            return b.key1.localeCompare(a.key1);
          })}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                marginTop: 15,
                marginLeft: 10,
                marginBottom: 2,
                marginRight: 10,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 10,
                shadowColor: "rgba(0,0,0, .4)", // IOS
                shadowOffset: { height: 1, width: 3 }, // IOS
                shadowOpacity: 3, // IOS
                shadowRadius: 3, //IOS
                backgroundColor: "#fff",
                height: 105,
              }}
              onPress={() => {
                var output =
                  "Dog name: " +
                  dogName +
                  "\nDog age: " +
                  dogAge +
                  "\nCondition: " +
                  item.val1.Status +
                  "\nDate: " +
                  item.val1.Date +
                  "\nTime: " +
                  item.val1.Time +
                  "\nUser involved: " +
                  userName +
                  "\nDescription: " +
                  item.val1.Comments;
                alert(output);
              }}
            >
              <View flexDirection="row">
                <View style={{ marginTop: 6 }}>
                  <PhotoAnimation />
                </View>

                <View style={{ marginLeft: 24, marginTop: 2 }}>
                  <View>
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 16,
                      }}
                    >
                      Condition: {item.val1.Status}
                    </Text>
                  </View>
                  <View flexDirection="row" style={{ paddingTop: 5 }}>
                    <MaterialIcons name="date-range" size={22} color="gray" />
                    <Text
                      style={{
                        fontFamily: "American Typewriter",
                        color: "gray",
                      }}
                    >
                      {" "}
                      {item.val1.Date}
                    </Text>
                  </View>
                  <View flexDirection="row" style={{ paddingTop: 5 }}>
                    <AntDesign name="clockcircleo" size={22} color="gray" />
                    <Text
                      style={{
                        fontFamily: "American Typewriter",
                        color: "gray",
                      }}
                    >
                      {" "}
                      {item.val1.Time}
                    </Text>
                  </View>

                  <Text></Text>
                </View>
                <View
                  style={{ position: "absolute", right: 20, marginTop: 15 }}
                >
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
        ></TouchableOpacity>

        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: 450,
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
              paddingTop: 25,
            }}
          >
            <>
              <ModalFeatures modalVisible={setModalVisible} />
              {/* <ModalSettingUpUser/> */}
            </>
          </Animatable.View>
        </View>
      </Modal>

      {/* Floating button */}
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 60,
          position: "absolute",
          bottom: 5,
          right: 24,
          height: 60,
          backgroundColor: "#fff",
          borderRadius: 100,
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
