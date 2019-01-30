<template>
  <div class="product-image-description">
    <div class="container">
      <!--кнопка назад-->
      <a @click="$router.go(-1)" class="pointer">back</a>
      <div class="wrapper">
        <SliderProduct :slides="ad.imgSlider"/>
        <div class="text">
            <CardProduct :productName="ad.name" :productPrice="ad.price"></CardProduct>
          <div class="list">
            <a class="" href="#">
              <span>Category</span> : Household</a>
            <a href="#">
              <span>Availibility</span> : In Stock</a>
          </div>
          <p>Mill Oil is an innovative oil filled radiator with the most modern technology.
            If you are looking for something that can make your interior look awesome,
            and at the same time give you the pleasant warm feeling during the winter.</p>
          <div class="product-count">
            Quantity: <CounterInput v-model="count" :min="1"/>
          </div>
          {{count}}
          <div class="button-group">
            <button
              @click="getId"
              class="border-radius-button button-blue"
            >Add to Cart</button>
            <button class="button-icon-product">
              <i class="fa fa-diamond" aria-hidden="true"></i>
            </button>
            <button class="button-icon-product">
              <i aria-hidden="true" class="fa fa-heart-o"></i>
            </button>
          </div>
        </div>
      </div>
      <section class="product-description">
        <Tab :tabTitles="tabName">
          <div>
            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all
              shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick
              School in Reading at the age of 15, where she went to secretarial school and then into an insurance office.
              After moving to London and then Hampton, she eventually married her next door neighbour from Reading,
              John Cook'
          </div>
          <div>Specification</div>
          <div>
            <!--где?-->
            <CommentBlock :commentsArray="ad.comment"/>
            {{ad.comment}}
          </div>
          <div>Reviews</div>
        </Tab>
      </section>
    </div>
  </div>
</template>

<script>
import SliderProduct from '@/components/SliderProduct'
import CardProduct from './CardProduct/CardProduct'
import Tab from '@/components/Tab'
import CommentBlock from '@/components/Comments/CommentBlock'
import CounterInput from '@/components/CounterInput'
export default {
  name: 'productPage',
  props: ['id'],
  data () {
    return {
      tabName: [
        'Description',
        'Specification',
        'Comments',
        'Reviews'
      ],
      productId: '',
	    count: 1
    }
  },
  methods: {
    getId () {
      const id = this.id
      this.productId = this.$route.params.id
      this.$store.commit('saveId', this.productId, this.count)
    }
  },
  beforeMount () {
    this.$store.dispatch('fetchProductPage')
  },
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.productById(this.$route.params.id)
    }
  },
  components: {
    SliderProduct,
    CardProduct,
    Tab,
    CommentBlock,
	  CounterInput
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
