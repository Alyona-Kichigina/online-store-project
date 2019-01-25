<template>
  <div class="">
    <div class="container">
      <div class="p-b-15">
        <Select>
          <option :optionArray="selectArray" :optionValue="selectArray.value">
            {{ selectArray.title }}
          </option>
        </Select>
      </div>

      <div class="p-b-15">
        <div class="d-flex j-c-space-between">
          <buttonBlue>
            Add to cart
          </buttonBlue>
          <buttonBlue class="border-radius-button">
            Submit Now
          </buttonBlue>
          <button class="button-icon-product button-icon">
            <i aria-hidden="true" class="fa fa-heart-o"></i>
          </button>
          <button class="button-icon-product button-icon">
            <i aria-hidden="true" class="fa fa-search"></i>
          </button>
          <button class="button-icon-list-product button-icon">
            <i aria-hidden="true" class="fa fa-heart-o"></i>
          </button>
          <button class="button-icon-list-product button-icon">
            <i aria-hidden="true" class="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <div class="p-b-15 product-list">
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
        <CardProduct></CardProduct>
      </div>
      <div class="p-b-15">
        <vue-slider ref="slider" />
      </div>
    </div>

    <div class="p-b-15">
      <Breadcrumbs></Breadcrumbs>
    </div>
    <FormNewsletter></FormNewsletter>
    <div class="container">
      <div class="table-product">
        <table class="table">
          <tbody>
          <tr>
            <td>Width</td>
            <td>128mm</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>508mm</td>
          </tr>
          <tr>
            <td>Depth</td>
            <td>85mm</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="d-grid item-2">
        <CommentBlock></CommentBlock>
        <ReviewBlock></ReviewBlock>
      </div>

      <EvaluationProduct></EvaluationProduct>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Select from '../../components/Select'
import buttonBlue from '../../components/buttonBlue'
import CardProduct from '../ProductPage/CardProduct/CardProduct'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import FormNewsletter from '../../components/FormNewsletter/FormNewsletter'
import CommentBlock from '@/components/Comments/CommentBlock'
import EvaluationProduct from '../../components/EvaluationProduct'
import ReviewBlock from '../../components/ReviewBlock'
import vueSlider from 'vue-slider-component'
export default {
  name: 'newPage',
  components: {
    Select,
    buttonBlue,
    CardProduct,
    vueSlider,
    Breadcrumbs,
    FormNewsletter,
    CommentBlock,
    EvaluationProduct,
    ReviewBlock
  },
  data () {
    return {
      flatRate: [
        {title: 'Black', value: 'Black'},
        {title: 'Gold', value: 'Gold'},
        {title: 'Red', value: 'Red'},
        {title: 'Blue', value: 'Blue'}
      ],
      selectArray: [
        {title: 'Black', value: '1'},
        {title: 'Gold', value: '2'},
        {title: 'Red', value: '3'},
        {title: 'Blue', value: '4'}
      ],
      cardProduct: [
        {
          imageSrc: '/static/img/product/feature-product/f-p-1.jpg',
          title: 'Long Sleeve TShirt',
          text: '$150.00',
          id: '1',
          url: '/id'
        },
        {
          imageSrc: '/static/img/product/feature-product/f-p-2.jpg',
          title: 'Long Sleeve TShirt',
          text: '$150.00',
          id: '2',
          url: '/id'
        },
        {
          imageSrc: '/static/img/product/feature-product/f-p-3.jpg',
          title: 'Long Sleeve TShirt',
          text: '$150.00',
          id: '3',
          url: '/id'
        }
      ]
    }
  },
  methods: {
    ...mapMutations([
      'deleteListName'
    ]),
    watchList () {
      this.$store.dispatch('fetchNames')
    }
  },
  computed: {
    peoples () {
      return this.$store.getters.namesList
    }
  }
}
</script>

<style scoped lang="scss">
 .p-b-15 {
   padding-bottom: 15px;
 }

  .product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }

  /*style slider-price*/
  .vue-slider {
    background: hsl(240, 100%, 98.8%);

  }
  .vue-slider-dot-handle{
    height: 16px;
    width: 16px;
    border-radius: 50%;
    border: none;
    background: hsl(228.9, 100%, 54.3%);
    outline: none !important;
    box-shadow: none;
    top: -6px;
    cursor: pointer;
  }

  .vue-slider-process {
    background: hsl(240, 100%, 98.8%);
  }

 .d-grid {
   display: grid;
 }

 .item-2 {
   grid-template-columns: 1fr 1fr;
   grid-column-gap: 30px;
   }

 @media (max-width: 767px) {
   .product-list {
     grid-template-columns: repeat(2, 1fr);
   }
 }
 @media (max-width: 575px) {
   .product-list {
     grid-template-columns: 1fr;
   }
 }
</style>
