<template>
    <div class="product-item">
      <router-link
        :to="'/product-page/' + productItem.id"
        class="img-block"
        v-for="productItem in productsArray"
        :key="productItem.id">
        <img
          :src="productItem.img"
          alt="" class="img-responsive"
        >
        <div class="product-icon">
          <button class="button-icon-list-product button-icon">
            <i aria-hidden="true" class="fa fa-heart-o"></i>
          </button>
          <button
            class="button-icon-list-product button-icon"
          >
            <i aria-hidden="true" class="fa fa-shopping-cart"></i>
          </button>
        </div>
        <div class="text-center text-block">
          <a href="" class="name">{{ productItem.name }}</a>
          <div class="price">${{ (productItem.price / 100).toFixed(2) }}</div>
            <!--<h6>{{ productItem.color}}</h6>-->
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'CardProductList',
  props: {
    productsArray: {
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="scss" src="../scss/product-style.scss"></style>
