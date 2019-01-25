<template>
  <div>
    <sideBar></sideBar>
    <section class="banner-min-block">
      <div class="container">
        <div class="banner-min">
          <div
            v-for="card of cards"
            :key="card.id"
          >
            <div
              class="bg"
              :to="card.url"
            >
              <div class="text-xs-center content-block">
                <img :src="card.imageSrc" class="img-responsive">
                <div class="text">
                  <div class="title">{{card.title}}</div>
                  <p>{{card.text}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="clients-logo-block">
      <div class="container">
        <div class="clients-wrapper">
          <div class="item">
            <img src="../../../public/img/clients-logo/c-logo-1.png" alt="">
          </div>
          <div class="item">
            <img src="../../../public/img/clients-logo/c-logo-2.png" alt="">
          </div>
          <div class="item">
            <img src="../../../public/img/clients-logo/c-logo-3.png" alt="">
          </div>
          <div class="item">
            <img src="../../../public/img/clients-logo/c-logo-4.png" alt="">
          </div>
          <div class="item">
            <img src="../../../public/img/clients-logo/c-logo-5.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="product-block-main">
      <div class="container">
        <div class="main_title">
          <h2>Featured Products</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import sideBar from './components/sideBar'
export default {
  data () {
    return {
      cards: [
        {
          imageSrc: '/img/banners/banner-bg.jpg',
          title: 'Hot Deals of this Month',
          text: 'shop now',
          id: '1',
          url: '/id'
        },
        {
          imageSrc: '/img/product/hot_deals/deal1.jpg',
          title: 'Hot Month',
          text: 'shop now',
          id: '2',
          url: '/'
        }
      ]
    }
  },
  components: {
    sideBar
  },
  computed: {
    items () {
      return this.$store.getters.items
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
