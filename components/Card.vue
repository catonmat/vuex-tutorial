<template>
  <transition name="drop">
    <div class="card">
      <div v-if="!faceUp" class="card-back">Devs Against Humanity</div>
      <div v-if="faceUp" class="card-text">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: [
      'id',
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
    box-shadow: 5px 5px 5px rgba( 100, 100, 100, .1 );
    color: #333;
    display: block;
    font-family: sans-serif;
    font-weight: bold;
    height: 350px;
    overflow: hidden;
    padding: 1.2em;
    width: 250px;
  }

  .card-text {
    font-size: 1.4em;
    line-height: 1.em;
  }

  .card-back {
    font-size: 2.7em;
    line-height: 1em;
  }

  .drop-enter-active,
  .drop-leave-active {
    transition: transform .6s;
  }
  .drop-enter,
  .drop-leave-to {
    transform: translateY(200vh);
  }
</style>