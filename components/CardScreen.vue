<template>
  <Card
    :text="$route.params.text"
    :face-up="true"
  ></Card>
</template>

<script>
  import Card from "./Card.vue";

  export default {
    components: { Card }
  };
</script>
