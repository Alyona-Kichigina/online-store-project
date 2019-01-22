<template>
  <div>
    <div class="name">{{ productName }}</div>
    <div class="price">{{ (productPrice / 100) .toFixed(2) }}</div>
  </div>
</template>

<script>
export default {
  name: 'CardProduct',
  components: {
  },
  props: {
    productName: {
      type: String,
      require: true
    },
    productPrice: {
      type: Number,
      require: true
    }
  }
}
</script>

<style lang="scss" src="./product-style.scss"></style>
