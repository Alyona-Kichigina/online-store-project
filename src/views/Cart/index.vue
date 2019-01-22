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
        <ProductItem></ProductItem>
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
  </section>
</template>

<script>
import ProductItem from './ProductItem'
export default {
  name: 'Cart',
  components: {
    ProductItem
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
