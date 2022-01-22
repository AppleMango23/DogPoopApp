import { useState, useEffect } from "react";
import * as firebase from "firebase";
import { Audio } from "expo-av";
import { AsyncStorage } from "react-native";

//API key for Firebase connection
const config = {
  apiKey: "AIzaSyA6iPmdMQFyBmH7aPiukZ71srz9vHw0uSs",
  authDomain: "angelapp-6b5e0.firebaseapp.com",
  databaseURL: "https://angelapp-6b5e0.firebaseio.com",
  projectId: "angelapp-6b5e0",
  storageBucket: "angelapp-6b5e0.appspot.com",
  messagingSenderId: "154350512943",
  appId: "1:154350512943:web:76db72c57a2132b726cfda",
  measurementId: "G-G8KDJNWBDG",
};

// Checking it is logged in or not
try {
  firebase.initializeApp(config);
  console.log("Logged into app");
} catch (e) {
  console.log("App reloaded, so firebase did not re-initialize");
}

//Read for the flatlist
export function useFirebaseData() {
  const [data, setData] = useState([]);
  function test2() {
    firebase
      .database()
      .ref("List/abcdefg/dogs/dogA/dogStatus/")
      .on("value", function (snapshot) {
        const items = [];
        snapshot.forEach((child1) => {
          items.push({ val1: child1.val(), key1: child1.key });
        });
        setData(items);
      });
  }
  useEffect(() => {
    test2();
  }, []);
  return data;
}

//Read the group members
export function useFirebaseDataGroup() {
  const [data, setData] = useState([]);
  function test2() {
    firebase
      .database()
      .ref("List/abcdefg/users")
      .on("value", function (snapshot) {
        const items = [];
        snapshot.forEach((child1) => {
          items.push({ val1: child1.val(), key1: child1.key });
        });
        setData(items);
      });
  }
  useEffect(() => {
    test2();
  }, []);
  return data;
}

//Read user name
export function useFirebaseDataUsername() {
  const [data, setData] = useState([]);
  function test2() {
    firebase
      .database()
      .ref("List/abcdefg/dogs/dogA/userName")
      .on("value", function (snapshot) {
        setData(snapshot.val());
      });
  }
  useEffect(() => {
    test2();
  }, []);
  return data;
}

//Read dog age
export function useFirebaseDataDogAge() {
  const [data, setData] = useState([]);
  function test2() {
    firebase
      .database()
      .ref("List/abcdefg/dogs/dogA/dogAge")
      .on("value", function (snapshot) {
        setData(snapshot.val());
      });
  }
  useEffect(() => {
    test2();
  }, []);
  return data;
}

//Read dog name
export function useFirebaseDataDogName() {
  const [data, setData] = useState([]);
  function test2() {
    firebase
      .database()
      .ref("List/abcdefg/dogs/dogA/dogName")
      .on("value", function (snapshot) {
        setData(snapshot.val());
      });
  }
  useEffect(() => {
    test2();
  }, []);
  return data;
}

//Push the data to the cloud
export async function pushTheData(props) {
  let userIDForSave = "";
  let userNameGiven = "";

  if (props.firstAttempt == true) {
    // alert("Working on the register!")
    // working on the random naming things

    // Group random words generator codes
    // var randomChars =
    //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // var result = "";
    // for (var i = 0; i < 10; i++) {
    //   result += randomChars.charAt(
    //     Math.floor(Math.random() * randomChars.length)
    //   );
    // }
    const newReference = firebase.database().ref("List/abcdefg/dogs/");
    newReference.set({
      dogA: {
        dogAge: props.dogage,
        dogName: props.dogname,
        userName: props.username,
      },
    });
    // await AsyncStorage.setItem("@MySuperStore:GroupCode", result);
    try {
      const userId = await AsyncStorage.getItem("@MySuperStore:key1");
      const userName = await AsyncStorage.getItem("@MySuperStore:key2");
        
        userIDForSave = userId;
        userNameGiven = userName;
      
    } catch (error) {console.log(error)}

    // User registering
    const newReference1 = firebase
      .database()
      .ref("List/abcdefg/users/" + userIDForSave);
    newReference1
      .set({
        userName: userNameGiven,
        userPhotos: "-",
      })
      .then();
  } else {
    // ------------------This one is if it is not first attempt----------------------------
    var unix = Math.round(+new Date() / 1000);
    const newReference = firebase
      .database()
      .ref("List/abcdefg/dogs/dogA/dogStatus/" + unix);
    var today = new Date();
    var date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    var Hour = today.getHours();
    var AmOrPM = Hour >= 12 ? "PM" : "AM";
    var time =
      (Hour > 12 ? Hour - 12 : Hour) + ":" + today.getMinutes() + AmOrPM;

    newReference
      .set({
        Date: date,
        Status: props.status == "Poop" ? "GOOD" : "BAD",
        Time: time,
        Comments: props.text,
      })
      .then(async () => {
        // Sounds
        const soundObject = new Audio.Sound();
        try {
          // Dog sounds
          await soundObject.loadAsync(require('../assets/dogWoff.mp3'));
          await soundObject.playAsync();
          alert("Saved new record")
        } catch (error) {}
      });
  }
}
