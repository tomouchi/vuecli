<template>
  <section>
    {{priceRowTxt}}
    {{price}}
  </section>
</template>

<script>
export default {
  name: "Test2",
  props: {
    price: Number,
    priceRowTxt:String
  }
};
</script>

<style scoped>
</style>
