<template>
	<!--<tbody>-->
	<!--<tr-->
		<!--v-for="productItem in productsArray"-->
		<!--:key="productItem.id"-->
	<!--&gt;-->
		<!--<td>-->
			<!--<div class="media">-->
				<!--<img :src="productItem.img" alt="">-->
				<!--<p>Minimalistic shop for multipurpose use</p>-->
			<!--</div>-->
		<!--</td>-->
		<!--<td>-->
			<!--<div class="price">{{ productItem.price }}</div>-->
		<!--</td>-->
		<!--<td>-->
			<!--<div class="product_count">-->
			<!--</div>-->
		<!--</td>-->
		<!--<td>-->
			<!--<div class="price">$720.00</div>-->
		<!--</td>-->
	<!--</tr>-->
	<!--</tbody>-->
	<div>
		<div
			v-for="productItem in productsArray"
			:key="productItem.id"
		
		>
			<div>
				<img :src="productItem.img" alt="">
				<div class="price">{{ productItem.price }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'ProductItem',
		props: {
			productsArray: {
				type: Object,
				require: true
			}
		}
	}
</script>

<style scoped>

</style>
