<template>
  <div>
    <router-link to="/test">Test Screen</router-link>
    <router-link to="/card/Change me in the url bar">Card Screen</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch('fetchCollections');
  }
}
</script>
