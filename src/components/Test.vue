<template>
  <section>
    <Test2
            :price="displayPrice"
            :priceRowTxt="priceRowTxt"
    />
  </section>
</template>

<script>
import Test2 from "./Test2";
export default {
  name: "Test",
  components: { Test2 },
  props: {
    price: {
      validator(value) {
        return !isNaN(value.defaultPrice || value.price);
      }
    }
  },
  computed: {
    displayPrice() {
      return this.price.defaultPrice || this.price.price;
    },
    priceRowTxt() {
      return this.price.defaultPrice
        ? `${this.price.defaultPrice}円クーポンを使うと`
        : "クーポンを使うと";
    }
  }
};
</script>

<style scoped>
</style>
