<template>
  <div>
    <router-link to="/test">Test Screen</router-link>
    <router-link to="/card/Change me in the url bar">Card Screen</router-link>
    <Auth></Auth>
    <router-view></router-view>
  </div>
</template>

<script>
  import Auth from "./Auth.vue";
  export default {
    components: { Auth }
  }
</script>
