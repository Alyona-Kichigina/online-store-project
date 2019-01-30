<template>
  <div class="control-number-block">
      <input
        type="number"
        :disabled="inputDisabled"
        :min="min"
        :max="max"
        :step="step"
        v-model.number="currentValue"
        @blur="currentValue = value"
        @keydown.esc="currentValue = value"
        @keydown.enter="currentValue = value"
        @keydown.up.prevent="increment"
        @keydown.down.prevent="decrement"
      >
    <button class="decrement-button" :disabled="decrementDisabled" @click="decrement">−</button>
    <button class="increment-button" :disabled="incrementDisabled" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'InputForNumber',
  props: {
	  disabled: Boolean,
	  max: {
		  type: Number,
		  default: Infinity
	  },
	  min: {
		  type: Number,
		  default: -Infinity
	  },
	  value: {
		  required: true
	  },
	  step: {
		  type: Number,
		  default: 1
	  }
  },
  data () {
    return {
      currentValue: this.value,
      decrementDisabled: false,
      incrementDisabled: false,
      inputDisabled: false
    }
  },

  watch: {
    value (val) {
      this.currentValue = val
    }
  },

  methods: {
    increment () {
    	// если this.disabled или this.incrementDisabled true, то не выполняем функцию
      if (this.disabled || this.incrementDisabled) {
        return
      }
      // к числу ипута прибавляем 1 и умножаем на число шагов
      let newVal = this.currentValue + 1 * this.step
      this.decrementDisabled = false
      this._updateValue(newVal)
    },
    decrement () {
      if (this.disabled || this.decrementDisabled) {
        return
      }
      let newVal = this.currentValue + -1 * this.step
      // зачем делать false?
      this.incrementDisabled = false
      this._updateValue(newVal)
    },
    _updateValue (newVal) {
      const oldVal = this.currentValue
      // если число в инпуте равно полученному число при нажатии на кнопки
      // или содержимое инпута не число, то не выполняем функцию
      if (oldVal === newVal || typeof this.value !== 'number') {
        return
      }
      // если полученное число меньше либо равно минимальному числу в поле ввода
      // то полученное число станет этим числом и на кнопку нельзя нажать
      if (newVal <= this.min) {
        newVal = this.min
        this.decrementDisabled = true
      }
      if (newVal >= this.max) {
        newVal = this.max
        this.incrementDisabled = true
      }
      // присваиваем полученое число в поле ипута
      this.currentValue = newVal
      // генерирум событие
      this.$emit('input', this.currentValue)
    }
  },
  // при встраивании DOM
  mounted () {
  	// если число инпута равно минимальному числу в поле ввода
    if (this.value === this.min) {
    	// запрещаем вычитание
      this.decrementDisabled = true
    }
  }
}
</script>

<style scoped lang="scss">
 .control-number-block {
   display: inline-flex;
   margin-bottom: 1rem;
   input {
     margin-left: 10px;
     border: 1px solid $greyInput;
     border-right: 0;
     border-radius: 0;
     font-size: .875rem;
     height: 34px;
     padding-left: .5rem;
     padding-bottom: 0;
     -moz-appearance:textfield;
     max-width: 70px;
     &::-webkit-inner-spin-button,
     &::-webkit-outer-spin-button {
       -webkit-appearance: none;
       margin: 0;
     }
     &:focus {
       outline: 0;
       border-color: $baseColor;
     }
   }
   button {
     background-color: #fff;
     border: 1px solid $baseColor;
     color: $baseColor;
     font-size: .875rem;
     font-weight: 700;
     text-align: center;
     width: 36.6px;
     height: 36.6px;
      &:last-child {
        border-left-width: 0;
      }
     &:first-child {
       border-right-width: 0;
     }
     &:hover,
     &:active,
     &:focus {
       border-color: $baseColor;
       background: $baseColor;
       color: $white;
       outline: 0;
     }
     &:hover {
       & ~ .input {
         border: 1px solid $baseColor;
       }
     }
     &:disabled,
     &.is-disabled {
       color: $pfont;
       opacity: 1;
     }
   }
 }
</style>
