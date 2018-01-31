<template>
  <div class="card-list">
    <Card
      v-for="card in cards"
      v-on:click="moveCardTo({ cardId: card.id, destination: 'deck'})"
      :key="card.id"
      :face-up="card.faceUp"
      :text="card.text"
    >
    </Card>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  import Card from './Card.vue';

  export default {
    props: [ 'location' ],
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
    },
    components: { Card }
  };
</script>

<style scoped>
  .card-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>