import { useState, useEffect } from "react";
import * as firebase from "firebase";

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

export function useFirebaseData() {
  const [data, setData] = useState([]);
  var items = [];

  function test2() {
    firebase
      .database()
      .ref("testL1/")
      .on("value", function (snapshot) {
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

export function pushTheData() {

  //use the time to set the key date year and time that one
  const newReference = firebase.database().ref("testL1/").push();
  var today = new Date();
  var date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes();

  console.log("Auto generated key: ", newReference.key);

  newReference
    .set({
      Date: date,
      Status: "Good",
      Time: time,
    })
    .then(() => {
      alert("Data updated.");
    });
}
