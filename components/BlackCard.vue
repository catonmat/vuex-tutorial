<template>
  <div
    v-if="blackCard"
    class="black-card"
  >{{ blackCard.text }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['blackCard'])
  }
}
</script>

<style scoped>
  .black-card {
    background: #222;
    bottom: 0;
    color: white;
    display: block;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 1.6em;
    left: 0;
    padding: .5em;
    position: fixed;
    right: 0;
    z-index: 9;
  }
</style>

