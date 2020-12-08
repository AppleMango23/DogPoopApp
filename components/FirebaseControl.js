import { useState, useEffect } from "react";
import * as firebase from "firebase";
import { Audio } from "expo-av";
import { AsyncStorage } from "react-native";

//Setting up Firebase connection
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

try {
  firebase.initializeApp(config);
  console.log("Logged into app");
} catch (e) {
  console.log("App reloaded, so firebase did not re-initialize");
}

//Read
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
      .ref("List/abcdefg/users/user1/userName")
      .on("value", function (snapshot) {
        setData(snapshot.val());
      });
  }
  useEffect(() => {
    test2();
  }, []);
  return data;
}

//Read user name
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

//Read user name
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

//Push
export async function pushTheData(props) {
  let userIDForSave = "";

  if (props.firstAttempt == true) {
    alert("Working on the register!")
    // var randomChars =
    //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // var result = "";
    // for (var i = 0; i < 10; i++) {
    //   result += randomChars.charAt(
    //     Math.floor(Math.random() * randomChars.length)
    //   );
    // }
    // var result = "abcdefg"
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
      const value = await AsyncStorage.getItem("@MySuperStore:key1");
      
        userIDForSave = value;
      
    } catch (error) {console.log("i am error->",error)}

    console.log(userIDForSave)
    // User registering
    const newReference1 = firebase
      .database()
      .ref("List/abcdefg/users/" + userIDForSave);
    newReference1
      .set({
        userName: "-",
        userPhotos: "-",
      })
      .then();

    
  } else {
    // ------------------This one is if it is not first attempt----------------------------
    var unix = Math.round(+new Date() / 1000);
    //use the time to set the key date year and time that one
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
    //Set a better time for am and pm
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
          // await soundObject.loadAsync(require('../assets/music.mp3'));
          // await soundObject.playAsync();
        } catch (error) {}
      });
  }
}
