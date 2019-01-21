<template>
  <Login v-if="!token"/>
  <div v-else>
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './views/layout/components/header'
import Footer from './views/layout/components/footer'
import Login from './Layout/Login'
import { INIT_AUTH } from './store/modules/auth'
export default {
  mounted () {
    this.$store.dispatch(INIT_AUTH)
  },
  computed: {
    token () {
      return this.$store.getters.authState.token
    }
  },
  components: {
    Header,
    Footer,
    Login
  }
}
</script>
<style lang="css"></style>
