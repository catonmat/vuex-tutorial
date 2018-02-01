<template>
  <div>
    <div class="card-list">
      <Card
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        :text="card.text"
        :face-up="revealed"
        @click.native="revealed ? clearPlayArea() : revealCards()"
      ></Card>
    </div>
  </div>
</template>

<script>
  import Card from './Card.vue';

  export default {
    data: function() {
      return { 'revealed': false }
    },
    methods: {
      revealCards: function() {
        this.revealed = true;
      },
      clearPlayArea: function() {
        this.cards.forEach(card => this.$store.commit('moveCardTo', {
          cardId: card.id,
          destination: 'deck'
        }));
        this.revealed = false;
      }
    },
    computed: {
      cards() {
        return this.$store.getters.cardsIn(`playArea`);
      }
    },
    components: { Card }
  };
</script>

<style scoped>
  .card-list {
    display: grid;
    grid-template-rows: repeat(3, 100px) 350px;
  }
</style>