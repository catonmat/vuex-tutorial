<template>
  <div>
    <CardList
      location="hand"
    ></CardList>
    <CardList
      location="deck"
      card-type="black"
    ></CardList>
  </div>
</template>

<script>
  import CardList from "./CardList.vue";

  export default {
    components: {
      CardList
    }
  };
</script>

<style>
</style>