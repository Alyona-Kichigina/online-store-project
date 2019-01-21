<template>
	<div class="container">
		<Login v-if="!token"/>
		<div v-else>
				<h1>личный кабинет</h1>
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
	},
	computed: {
		token () {
			return this.$store.getters.authState.token
		}
	},
	components: {
		Login
	}
}
</script>

<style scoped>

</style>
