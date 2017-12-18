<template>
  <div class="card-list">
    <div
      v-for="card in cards"
      :key="card.id"
      class="card"
     >
      <div v-if="!card.faceUp" class="card-back">Cards Against Humanity</div>
      <div v-if="card.faceUp" class="card-text">{{ card.text }}</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    computed: mapState({
      cards: "cards"
    })
  };
</script>

<style scoped>
  .card-list {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
    background: white;
    border-radius: .5em;
    border: 1px solid #999;
    box-sizing: border-box;
    color: #333;
    display: block;
    font-family: sans-serif;
    font-weight: bold;
    height: 350px;
    margin: 1em;
    overflow: hidden;
    padding: 1.2em;
    width: 250px;
  }

  .card-text {
    font-size: 1.4em;
    line-height: 1.2em;
  }

  .card-back {
    font-size: 2.7em;
    line-height: 1em;
  }
</style>