import { useState, useEffect } from "react";
import * as firebase from "firebase";
import { Audio } from 'expo-av';

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
      .ref("List/")
      .on("value", function (snapshot) {
        const items = [];
        snapshot.forEach((child1) => {
          items.push({val1:child1.val(),key1:child1.key});
        });
        setData(items);
      });
  }
  useEffect(() => {
    test2();
  }, []);
  return data;
}

//Push
export function pushTheData(props) {
  var unix = Math.round(+new Date()/1000);

  //use the time to set the key date year and time that one
  const newReference = firebase.database().ref("List/" + unix);
  var today = new Date();
  var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  //Set a better time for am and pm
  var Hour=today.getHours();
  var AmOrPM = (Hour>=12 ? "PM" : "AM");
  var time =  (Hour>12 ? Hour-12 : Hour) + ":" + today.getMinutes() + AmOrPM;

  newReference
    .set({
      Date: date,
      Status: (props.status == "Poop" ? "GOOD" : "BAD"),
      Time: time,
    })
    .then(async () => {
      alert("Data saved.");
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(require('../assets/music.mp3'));
        await soundObject.playAsync();
      } catch (error) {
      }
    });
}
