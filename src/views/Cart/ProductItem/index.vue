<template>
	<tbody>
	<tr
		v-for="productItem in productsArray"
		:key="productItem.id"
	>
		<td>
			<div class="media">
				<img :src="productItem.img" alt="">
				<p>{{ productItem.name }}</p>
			</div>
		</td>
		<td>
			<div class="price">{{ (productItem.price / 100) .toFixed(2) }}</div>
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

</style>
