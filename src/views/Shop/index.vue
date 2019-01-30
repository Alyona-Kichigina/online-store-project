<template>
  <div class="container">
    <div class="d-grid-wrapper product-list-block">
      <div class="filter-left">
        <div class="filter-block">
          <div class="filter-title">
            Browse Categories
          </div>
          <div class="filter-list">
            <div
              v-for="category in productsCategories"
              :key="category.id"
              class="filter-item pointer"
              @click="updateFilters(category.id, 'categoryProduct')"
            >{{ category.title }}
            </div>
          </div>
        </div>
        <div class="filter-block">
          <div class="filter-title">Product Filters</div>
          <div class="filter-list-wrapper">
            <div class="title">Name</div>
            <div class="d-flex">
              <input type="text" @change="handleChangePriceName" v-model="sortedProductName">
              <button @click="dispatchFilterProductsByName" class="button-blue">search</button>
            </div>
          </div>
          <div class="pl-5 filter-list-wrapper">
            <div class="title">Color</div>
            <CheckBox
              v-for="item in checkboxColor"
              :id="item.title"
              modelKey="colors"
              :checkBoxValue="item.value"
              :value="filters.colors"
              @input="updateFilters"
              :label="item.title"/>
          </div>
          <div class="filter-list-wrapper">
            <div class="title">Price</div>
            <vue-slider
              ref="slider"
              :value="filters.priceRange"
              @input="updateRange"
              v-bind="priceRangeConfig"
            />
          </div>
        </div>
      </div>
      <div class="wrapper-products">
        <div class="filter-top">
          <select
            v-model="displayedQuantityOfProducts"
          >
            <option
              v-for="option in quantityOptions"
              :value="option.value"
              :key="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </div>
        <CardProductList
          :productsArray="products"
          :BuyFunction="putProductInCart"
          :likeProductFunction="likeProduct"
        />
        <div class="message-no-products" v-if="this.products.length === 0">
          Sorry, but you have already yet saw all our products in this category.
        </div>
      </div>
    </div>
    <div class="pagination-block" >
      <!-- из page в date() вычитывается 1. Если полученное число больше 0, то перелистывание происходит-->
      <!--в current-page попадает page именно этой кнопки, то есть не измененный-->
      <!--эта кнопка не видна когда страница первая-->
      <paginationButton
        :onClickFunc="changePage"
        :buttonValue="page - 1"
        v-if="page - 1 > 0"
        :current-number="page"
      >«</paginationButton>
      <!--эта кнопка по умолчанию первая-->
      <paginationButton
        :onClickFunc="changePage"
        :buttonValue="1"
        :current-number="page"
      >1</paginationButton>
      <!-- если page - 1 больше 2, то из page вычесть 1, иначе в value = 2-->
      <!--если длина массива товара равна selected или page больше либо равно 2, то выводить эту кнопку-->
      <paginationButton
        :onClickFunc="changePage"
        :buttonValue="page - 1 > 2 ? page - 1 : 2"
        :current-number="page"
        v-if="isLastProductLoaded || page >= 2"
      >
        {{ page - 1 > 2 ? page - 1 : 2 }}
      </paginationButton>
      <!-- если page - 1 больше 3, то в value = 3-->
      <!--если длина массива товара равна selected или page больше либо равно 3, то выводить эту кнопку-->
      <paginationButton
        :onClickFunc="changePage"
        :buttonValue="page > 3 ? page : 3"
        :current-number="page"
        v-if="page >= 2 && (isLastProductLoaded || page >= 3)"
      >
        {{ page > 3 ? page : 3 }}
      </paginationButton>
      <!--если page больше 3 и isLastProductLoaded = false, то создается еще кнопка пагинации-->
      <!--если длина массива товара равна selected и page больше 2, то выводить эту кнопку-->
      <paginationButton
        :onClickFunc="changePage"
        :buttonValue="parseInt(page) + 1"
        v-if="page > 2 && isLastProductLoaded"
        :current-number="page"
      >
        {{ parseInt(page) + 1}}
      </paginationButton>
      <paginationButton
        :onClickFunc="changePage"
        :buttonValue="parseInt(page) + 1"
        v-if="isLastProductLoaded"
      >»</paginationButton>
    </div>
  </div>
</template>

<script>
import { debounce } from '../../utils/debounce'
import { mapMutations } from 'vuex'
import vueSlider from 'vue-slider-component'
import paginationButton from '../../components/paginationButton'
import CheckBox from '../../components/CheckBox'
import CardProductList from './ProductList/index'

export default {
  data: function () {
    return {
      sortedProductName: '',
      displayedQuantityOfProducts: '8',
      quantityOptions: [
        { text: 'Show 8', value: '8' },
        { text: 'Show 16', value: '16' },
        { text: 'Show 24', value: '24' }
      ],
      filters: {
        priceRange: [0, 15000]
      },
      priceRangeConfig: {
        value: [
          0,
          299
        ],
        width: '100%',
        height: 8,
        dotSize: 16,
        min: 0,
        max: 15000,
        disabled: false,
        show: true,
        useKeyboard: true,
        tooltip: 'always',
        formatter: '{value}$',
        enableCross: false,
        mergeFormatter: '{value1}$ ~ {value2}$',
        bgStyle: {
          'backgroundColor': '#fff',
          'boxShadow': 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
        },
        tooltipStyle: {
          'backgroundColor': '#666',
          'borderColor': '#666'
        },
        processStyle: {
          'backgroundColor': '#999'
        }
      },
      page: 1,
      isLastProductLoaded: false,
      checkboxColor: [
        { title: 'White', value: 'white' },
        { title: 'Red', value: 'red' },
        { title: 'Blue', value: 'blue' }
      ],
      productsCategories: [
        { title: 'Jeans', id: 'jeans' },
        { title: 'Skirts', id: 'skirts' },
        { title: 'Blouses', id: 'blouses' },
        { title: 'Sweaters', id: 'sweaters' },
        { title: 'Vests', id: 'vests' }
      ]
    }
  },
  // выполняетсся при инициализации
  created () {
    this.fetchProducts()
  },
  // выполняется после перерисовки страницы
  beforeUpdate () {
    // если длина массива товара равна количеству выводимого товара,
    // то в isLastProductLoaded передается true, если нет то false
    // parseInt(this.selected) передает то что в селекте
    this.isLastProductLoaded = this.products.length === parseInt(this.displayedQuantityOfProducts)
  },
  // вызывается при изменении в productList
  computed: {
    // получаем то что в productList
    products () {
      return this.$store.getters.productList
    }
  },
  methods: {
    // value input фильтра текста товара
    handleChangePriceName ({ target: { value } }) {
      this.sortedProductName = value
    },
    // вызов мутаций vuex
    ...mapMutations([
      'filterProductsByTitle',
      'filterProductsByColor',
      'filterProductByCategory'
    ]),
    // кнопка фильтра текста товара
    dispatchFilterProductsByName () {
      this.filterProductsByTitle(this.sortedProductName)
    },
    // newValue помещаем в объект params
    fetchProducts (params = {}) {
      // помещаем объекты фильтра и все параметры (newValue), которые попадают в fetchProducts в обект params
      // если params.page не передается, то page будет 1, т.е первой страницей
      if (!params.page) this.page = 1
      const quantity = this.displayedQuantityOfProducts
      // вызываем fetchProducts в vuex ... в filters.colors будет ["white", "blue"]
      this.$store.dispatch('fetchProducts', { quantity, filters: this.filters, ...params })
    },
    // пагинация
    changePage ({ target: { value } }) {
      this.page = value
    },
    // получаем id товара при нажатии на кнопку Купить
    putProductInCart (id) {
      this.$store.commit('saveId', id)
    },
    // получаем id товара при нажатии на кнопку Нравится
    likeProduct (id) {
      this.$store.commit('saveIdProductLike', id)
    },
    updateRange (value) {
      this.updateFilters(value, 'priceRange')
    },
    updateFilters (value, key) {
      this.filters = { ...this.filters, [key]: value }
    }
  },
  // эта функция запускается при любом изменении на странице
  watch: {
    page (newValue) {
      // newValue - номер кнопки пагинации
      // передаем Object { page: "newValue" } в fetchProducts
      this.fetchProducts({ page: newValue })
    },
    filters () {
      this.fetchProducts()
    },
    displayedQuantityOfProducts (newValue) {
      this.fetchProducts({ quantity: newValue })
    }
  },
  components: {
    vueSlider,
    paginationButton,
    CheckBox,
    CardProductList
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
