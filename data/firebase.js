import { initializeApp, database } from "firebase";

const config = {
  apiKey: "AIzaSyBnlml49bT9GomltIu_RD5b7uc2nNoIcyk",
  authDomain: "devs-against-humanity.firebaseapp.com",
  databaseURL: "https://devs-against-humanity.firebaseio.com",
  projectId: "devs-against-humanity",
  storageBucket: "devs-against-humanity.appspot.com",
  messagingSenderId: "1083178028189"
};

initializeApp(config);

export default {
  database: database()
}
