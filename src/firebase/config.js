import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCW49FJTPPrMOeekuqdZQLhzjAXa4qHvG8",
  databaseURL: "https://convo-94da1.firebaseio.com/",
  projectId: "convo-94da1",
  appId: "1:771006733526:android:4e667f94cf42bdd694fd77",
};

export default Firebase.initializeApp(firebaseConfig);
