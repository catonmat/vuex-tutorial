<template>
  <div class="auth">
    <div v-if="loggedIn">
      <span>{{ user.displayName }}</span>
      <button @click="logOut()">Log Out</button>
    </div>
    <button v-if="!loggedIn" @click="logIn()">Log in</button>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from "vuex";

  export default {
    methods: {
      ...mapMutations(['logIn', 'logOut'])
    },
    computed: {
      ...mapGetters(['user', 'loggedIn'])
    },
    beforeCreate() {
      this.$store.dispatch('fetchCreds');
    }
  };
</script>

<style scoped>
  .auth {
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    top: 0;
    right: 0;
    padding: .5em 1em;
    background: #ccc;
    z-index: 99;
  }
</style>