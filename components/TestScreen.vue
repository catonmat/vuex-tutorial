<template>
  <div class="table">
    <PlayArea></PlayArea>
    <Deck></Deck>
    <Hand playerId="1"></Hand>
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

<style scoped>
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