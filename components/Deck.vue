<template>
  <div>
    <Card
      v-if="cards.length"
      :face-up="false"
      @click.native="drawCard()"
    ></Card>
  </div>
</template>

<script>
  import Card from './Card.vue';

  export default {
    methods: {
      drawCard: function() {
        this.$store.commit('moveCardTo', {
          cardId: this.cards[0].id,
          destination: 'player_1'
        });
      }
    },
    computed: {
      cards() {
        return this.$store.getters.cardsIn(`deck`);
      }
    },
    components: { Card }
  };
</script>

<style scoped>
</style>