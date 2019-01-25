<template>
	<div class="container">
		<Login v-if="!token"/>
		<div v-else>
				<h1>личный кабинет</h1>
			<div
				v-for="likeProductItem in likeProductArray"
				:key="likeProductItem.id"
			>
				<img :src="likeProductItem.img" alt="">
				<div class="name">{{ likeProductItem.name }}</div>
				{{likeProductArray}}
			</div>
		</div>
	</div>
</template>

<script>
import Login from '@/Layout/Login'
import { INIT_AUTH } from '@/store/modules/auth'
export default {
  name: 'PersonalArea',
  mounted () {
    this.$store.dispatch(INIT_AUTH)
		this.$store.dispatch('fetchProductLike')
  },
  computed: {
    token () {
      return this.$store.getters.authState.token
    },
		likeProductArray () {
			return this.$store.getters.accessListOfProductLike
		}
  },
  components: {
    Login
  }
}
</script>

<style scoped>

</style>
