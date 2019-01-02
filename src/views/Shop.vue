<template>
  <div class="container">
    <div class="d-grid-wrapper product-list-block">
      <div class="filter-left">
        <div>
          <input type="text" @change="handleChangePrice" v-model="price">
          <button @click="dispatchFilterProducts">search</button>
        </div>
        <br>
        <div>
          <input type="text" @change="handleChangePriceName" v-model="name">
          <button @click="dispatchFilterProductsName">search</button>
        </div>
        <br>
        
        <div class="pl-5">
          {{ filters.colors }}
          <input type="checkbox" id="white" name="feature"
                 value="white"
                 v-model="filters.colors"
          />
          <label for="white">White</label>
          <br>
          <input type="checkbox" id="blue" name="feature"
                 value="blue"
                 v-model="filters.colors"
          />
          <label for="blue">Blue</label>
          <br>
          <input type="checkbox" id="red" name="feature"
                 value="red"
                 v-model="filters.colors"
          />
          <label for="red">Red</label>
        </div>
        <vue-slider ref="slider" v-model="filters.priceRange" v-bind="config" />
      </div>
      <div class="wrapper-products">
        <div class="filter-top">
          <select
            v-model="selected"
          >
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.value"
            >
              {{ option.text }}
            </option>
          </select>
          <!--<Select :options="options" v-model="selected" placeholder="placeholder" @tag="SelectFunction"/>-->
        </div>
        <CardProductList :productsArray="products"/>
      </div>
    </div>
    <div class="pagination-block">
      <!-- из page в date() вычитывается 1. Если полученное число больше 0, то перелистывание происходит-->
      <!--в current-page попадает page именно этой кнопки, то есть не измененный-->
      <paginationButton
              :onClickFunc="changePage"
              :buttonValue="page - 1"
              v-if="page - 1 > 0"
              :current-number="page"
      >«</paginationButton>
      <paginationButton
              :onClickFunc="changePage"
              :buttonValue="1"
              :current-number="page"
      >1</paginationButton>
      <!-- если полученное число больше 2, то из page вычесть 1, иначе в value = 2-->
      <paginationButton
              :onClickFunc="changePage"
              :buttonValue="page - 1 > 2 ? page - 1 : 2"
              :current-number="page"
      >
        {{ page - 1 > 2 ? page - 1 : 2 }}
      </paginationButton>
      <paginationButton
              :onClickFunc="changePage"
              :buttonValue="page > 3 ? page : 3"
              :current-number="page"
      >
        {{ page > 3 ? page : 3 }}
      </paginationButton>
      <!--если page больше 3 и isLastProductLoaded = false, то создается еще кнопка пагинации-->
      <paginationButton
              :onClickFunc="changePage"
              :buttonValue="parseInt(page) + 1"
              v-if="page > 3 && isLastProductLoaded"
              :current-number="page"
      >
        {{ parseInt(page) + 1}}
      </paginationButton>
      <!--если true, то-->
      <paginationButton
              :onClickFunc="changePage"
              :buttonValue="parseInt(page) + 1"
              v-if="isLastProductLoaded"
      >»</paginationButton>
    </div>
  </div>
</template>

<script>
import { debounce } from '../utils/debounce'
import { mapMutations } from 'vuex'
import vueSlider from 'vue-slider-component'
import paginationButton from '../components/paginationButton'
import CheckBox from '../components/CheckBox'
import CardProductList from '../components/CardProductList'
import Select from '../components/Select'

export default {
  components: {
    vueSlider,
    paginationButton,
    CheckBox,
    CardProductList,
    Select
  },
  data: function () {
    return {
      price: 0,
      name: '',
      checkedNames: [],
      selected: '8',
      options: [
        { text: 'Show 8', value: '8' },
        { text: 'Show 16', value: '16' },
        { text: 'Show 24', value: '24' }
      ],
      // options: [ '8', '16', '24' ],
      filters: {
        colors: [],
        priceRange: [0, 15000]
      },
      config: {
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
        {title: 'Black', value: 'Black'},
        {title: 'Gold', value: 'Gold'},
        {title: 'Red', value: 'Red'},
        {title: 'Blue', value: 'Blue'}
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
    this.isLastProductLoaded = this.products.length === parseInt(this.selected)
  },
  // вызывается при изменении в productList
  computed: {
    // получаем то что в productList
    products () {
      return this.$store.getters.productList
    }
  },
  methods: {
    // value input фильтра цены товара
    handleChangePrice ({ target: { value } }) {
      this.price = value
    },
    // value input фильтра текста товара
    handleChangePriceName ({ target: { value } }) {
      this.name = value
    },
    // вызов мутаций vuex
    ...mapMutations([
      'filterProductsByPrice',
      'filterProductsByTitle',
      'filterProductsByColor'
    ]),
    // кнопка фильтра цены
    dispatchFilterProducts () {
      this.filterProductsByPrice(this.price)
    },
    // кнопка фильтра текста товара
    dispatchFilterProductsName () {
      this.filterProductsByTitle(this.name)
    },
    // newValue помещаем в объект params
    fetchProducts (params = {}) {
      // помещаем объекты фильтра и все параметры (newValue), которые попадают в fetchProducts в обект params
      // если params.page не передается, то page будет 1, т.е первой страницей
      if (!params.page) this.page = 1
      const quantity = this.selected
      // вызываем fetchProducts в vuex ... в filters.colors будет ["white", "blue"]
      this.$store.dispatch('fetchProducts', { quantity, filters: this.filters, ...params })
    },
    // пагинация
    changePage ({ target: { value } }) {
      this.page = value
    }
  },
  // эта функция запускается при любом изменении на странице
  watch: {
    page (newValue) {
      // newValue - номер кнопки пагинации
      // передаем Object { page: "newValue" } в fetchProducts
      this.fetchProducts({ page: newValue })
    },
    'filters.colors': function () {
      // передаем { filters: {colors: Array [ "white" ]}} в fetchProducts
      this.fetchProducts()
    },
    'filters.priceRange': function () {
      this.fetchProducts()
    },
    price (newValue) {
      this.fetchProducts({ price: newValue })
    },
    name (newValue) {
      this.fetchProducts({ name: newValue })
    },
    selected (newValue) {
      this.fetchProducts({ quantity: newValue })
    }
  }
}
</script>

<style lang="scss" src="../scss/product-list.scss"></style>
