<template>
  <div class="table">
    <PlayArea class="play-area"></PlayArea>
    <Deck class="deck"></Deck>
    <Hand class="hand" playerId="1"></Hand>
  </div>
</template>

<script>
  import Hand from "./Hand.vue";
  import Deck from "./Deck.vue";
  import PlayArea from "./PlayArea.vue";

  export default {
    components: {
      Hand,
      Deck,
      PlayArea
    }
  };
</script>

<style>
  .table {
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-gap: 1em;
    padding: 1em;
  }
  .hand {
    grid-column: 1 / -1;
  }
</style>