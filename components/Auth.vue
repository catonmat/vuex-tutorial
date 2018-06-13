<template>
    <div>
      <button @click="banana()">banana</button>
      <button @click="logIn()">Log in</button>
    </div>
</template>

<script>
  export default {
    props: [],
    methods: {
      logIn: function() {
        this.$store.dispatch('logIn');
      },
      banana: function() {
        this.$store.dispatch('banana');
      }
    }
  };
</script>

<style scoped>
</style>