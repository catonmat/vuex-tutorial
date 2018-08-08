<template>
  <div>
    <button @click="newGame()">New Game</button>
    <Auth></Auth>
    <router-view></router-view>
  </div>
</template>

<script>
  import uid from 'uid';

  import Auth from "./Auth.vue";
  import cards from "../data/collections.json";
  import firebase from "../data/firebase";

  export default {
    components: { Auth },
    methods: {
      newGame() {
        // create new game
        const roomId = uid(10);
        // 0. Get the cards seed data
        console.log(cards);
        // 1. Copy all the cards to a new room
        firebase.database.ref('rooms').child(roomId).set(cards);
        // 2. Navigate to that new room
        this.$router.push(`/room/${roomId}`);
      }
    }
  }
</script>
