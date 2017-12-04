<template>
  <div>
    <h1>Allreet Pets</h1>
    <div>{{ cards.cardone.text }}</div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    computed: mapState({
      cards: "cards"
    })
  };
</script>

<style>
h1 {
  color: red;
}
</style>