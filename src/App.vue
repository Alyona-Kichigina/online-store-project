<template>
  <div>
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
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="css"></style>
