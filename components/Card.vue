<template>
  <div class="card">
    <div v-if="!faceUp" class="card-back">Devs Against Humanity</div>
    <div v-if="faceUp" class="card-text">{{ text }}</div>
  </div>
</template>

<script>
  export default {
    props: [
      'face-up',
      'text'
    ],
  };
</script>

<style scoped>
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