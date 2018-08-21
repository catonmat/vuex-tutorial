<template>
  <div>
    <button @click="newGame()">New Game</button>
    <Auth></Auth>
    <router-view></router-view>
  </div>
</template>

<script>
  import uid from 'uid';
  import shuffle from "shuffle-array";

  import Auth from "./Auth.vue";
  import blackCards from "../data/blackCards.json";
  import whiteCards from "../data/whiteCards.json";
  import firebase from "../data/firebase";

  export default {
    components: { Auth },
    methods: {
      newGame() {
        const roomId = uid(10);
        const cards = {
          collections: { deck: shuffle(whiteCards) },
          blackCards: shuffle(blackCards)
        };
        firebase.database.ref('rooms').child(roomId).set(cards);
        this.$router.push(`/room/${roomId}`);
      }
    }
  }
</script>
