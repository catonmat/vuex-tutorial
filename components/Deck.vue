<template>
  <div class="deck">
    <Card
      v-for="card in cards.slice().reverse()"
      :key="card.id"
      :face-up="false"
      @click.native="drawCard()"
    ></Card>
  </div>
</template>

<script>
  import Card from './Card.vue';
  import { mapGetters } from 'vuex';

  export default {
    methods: {
      drawCard: function() {
        this.$store.commit('moveCardTo', {
          cardId: this.cards[0].id,
          origin: 'deck',
          destination: this.user.uid
        });
      }
    },
    computed: {
      ...mapGetters(['user']),
      cards() {
        return this.$store.getters.cardsIn(`deck`);
      }
    },
    components: { Card }
  };
</script>

<style scoped>
  .deck {
    position: relative;
  }

  .card {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>