<template>
  <section class="cart-block">
    <div class="container">
      <table class="table">
        <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>
        <div class="media">
        <img src="" alt="">
        <p>Minimalistic shop for multipurpose use</p>
        </div>
        </td>
        <td>
        <div class="price"></div>
        </td>
        <td>
        <div class="product_count">
        </div>
        </td>
        <td>
        <div class="price">$720.00</div>
        </td>
        </tr>
        </tbody>
      </table>
      <div class="border-bottom">
        <div class="cart-button-block">
          <div>
            <button class="button-white">Update Cart</button>
          </div>
          <div>
            <input type="text" placeholder="Coupon Code">
            <button class="border-radius-button button-blue">Apply</button>
            <button class="button-white">Close Coupon</button>
          </div>
        </div>
      </div>
      <div class="border-bottom">
        <div class="d-flex total-block">
            <div>Subtotal</div>
            <div>$2160.00</div>
        </div>
      </div>

    </div>
    <ProductItem :productsArray="productsA"></ProductItem>
  </section>
</template>

<script>
import ProductItem from './ProductItem'
export default {
  name: 'Cart',
  components: {
    ProductItem
  },
  computed: {
    productsA () {
      return this.$store.getters.accesslistOfProductById
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
