<template>
  <div class="product-wrapper">
    <div
      v-for="productItem in productsArray"
       :key="productItem.id"
       class="product-item">
      <router-link
        :to="'/product-page/' + productItem.id"
        class="img-block">
        <img
          :src="productItem.img"
          alt="" class="img-responsive">
      </router-link>
      <div class="product-icon">
        <button
          class="button-icon-list-product button-icon"
          @click="likeProductFunction(productItem.id)"
        >
          <i aria-hidden="true" class="fa fa-heart-o"></i>
        </button>
        <button
          class="button-icon-list-product button-icon"
          @click="BuyFunction(productItem.id)"
        >
          <i aria-hidden="true" class="fa fa-shopping-cart"></i>
        </button>
      </div>
      <div class="text-center text-block">
        <router-link
          :to="'/product-page/' + productItem.id"
          class="name">{{ productItem.name }}</router-link>
        <div class="price">${{ (productItem.price / 100).toFixed(2) }}</div>
        <!--<h6>{{ productItem.color}}</h6>-->
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'CardProductList',
  props: {
    productsArray: {
      type: Array,
      require: true
    },
    BuyFunction: {
      type: Function,
      require: true
    },
    likeProductFunction: {
      type: Function,
      require: true
    }
  }
}
</script>

<style lang="scss" src="../../ProductPage/CardProduct/product-style.scss"></style>
