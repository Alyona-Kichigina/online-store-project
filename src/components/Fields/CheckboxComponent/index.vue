<template>
  <InputWrapper
    :label="label"
    :id="id"
    :validationErrors="validationErrors"
    :submitFailed="submitFailed"
    :changed="changed"
    :touched="touched"
  >
    <input
      type="checkbox"
      :class="submitFailed && 'has-error'"
      :id="id"
      :checked="checked"
      :placeholder="placeholder"
      :value="checkBoxValue"
      @input="handleInput"
      @blur="handleBlur"
    />
  </InputWrapper>
</template>
<script>
import InputWrapper from '../InputWrapper.vue'
import InputMixin from '@/mixins/InputMixin.js'
export default {
  name: 'input-doc',
  mixins: [InputMixin],
  computed: {
    checked () {
      const { checkBoxValue, value = [] } = this
      return checkBoxValue ? value.includes(checkBoxValue) : value
    }
  },
  methods: {
    handleArrayModel () {
      const { checkBoxValue, value = [] } = this
      return value.includes(checkBoxValue)
        ? value.filter(item => item !== checkBoxValue)
        : [...value, checkBoxValue]
    },
    handleInput () {
      const data = this.checkBoxValue ? this.handleArrayModel() : !this.value

      this.$emit('input', data)
    }
  },
  props: {
    value: [Array, Boolean],
    checkBoxValue: String
  },
  components: {
    InputWrapper
  }
}
</script>
<style lang="scss">
  .has-error {
    .el-input__inner{
      border-color: #fc4b6c;
    }
  }
</style>
