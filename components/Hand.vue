<template>
  <div class="hand">
    <div class="card-list">
      <div class="card-holder"
        v-for="card in cards"
        :key="card.id"
      >
        <Card
          :id="card.id"
          :text="card.text"
          :face-up="true"
          @click.native="playCard(card.id)"
        ></Card>
      </div>
    </div>
  </div>
</template>

<script>
  import Card from './Card.vue';
  import { mapGetters } from 'vuex';

  export default {
    methods: {
      playCard: function(cardId) {
        this.$store.commit('moveCardTo', {
          cardId,
          origin: this.user.uid,
          destination: 'playArea'
        });
      }
    },
    computed: {
      ...mapGetters(['user']),
      cards() {
        return this.$store.getters.cardsIn(this.user.uid);
      }
    },
    components: { Card }
  };
</script>

<style scoped>
  .card-list {
    display: grid;
    grid-template-columns: repeat(9, 1fr) 250px;
  }

  .card-holder {
    position: relative;
  }

  .card-holder:hover {
    transform: translateY(-150px);
  }

  .card {
    position: absolute;
  }
</style>