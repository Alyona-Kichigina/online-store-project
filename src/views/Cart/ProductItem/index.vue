<template>
	<tbody>
	<tr
		v-for="productItem in productsArray"
		:key="productItem.id"
	>
		<td>
			<div class="media">
				<router-link
					:to="'/product-page/' + productItem.id"
					class="d-flex"
				>
					<img :src="productItem.img" alt="">
					<p>{{ productItem.name }} {{productItem.id}}</p>
				</router-link>
			</div>
		</td>
		<td>
			<div class="price">{{ (productItem.price / 100) .toFixed(2) }}</div>
		</td>
		<td>
			<div class="product_count">
			{{productItem.count}}
			</div>
		</td>
		<td>
			<div class="price">$720.00</div>
		</td>
	</tr>
	</tbody>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    productsArray: {
      type: Array,
      require: true
    }
  }
}
</script>

<style scoped>
.d-flex {
	align-items: center;
}
</style>
