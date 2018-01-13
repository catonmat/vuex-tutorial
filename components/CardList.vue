<template>
  <div class="card-list">
    <div
      v-for="card in cards"
      v-on:click="moveCardTo({ cardId: card.id, destination: 'deck'})"
      :key="card.id"
      :class="{ 'card--black': cardType === 'black' }"
      class="card"
     >
      <div v-if="!card.faceUp" class="card-back">Devs Against Humanity</div>
      <div v-if="card.faceUp" class="card-text">{{ card.text }}</div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    props: [
      'card-type',
      'location'
    ],
    methods: {
      ...mapMutations([
        'turnCardOver',
        'moveCardTo'
      ])
    },
    computed: {
      cards() {
        return this.$store.getters.cardsIn(this.$props.location);
      }
    }
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

  .card--black {
    background: #333;
    color: #fff;
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