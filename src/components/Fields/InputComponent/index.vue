<template>
  <!--компонент который показывает ошибку-->
  <InputWrapper
    :label="label"
    :id="id"
    :validationErrors="validationErrors"
    :submitFailed="submitFailed"
    :changed="changed"
    :touched="touched"
  >
    <input
      :class="submitFailed && 'has-error'"
      :id="id"
      :placeholder="placeholder"
      :value="value"
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
  methods: {
    handleInput ({ target: { value } }) {
      this.$emit('input', value)
    }
  },
  props: {
    value: {
      type: [Number, String],
      default: ''
    }
  },
  components: {
    InputWrapper
  }
}
</script>
<style lang="scss">
  input {
  
  }
  .has-error {
    .el-input__inner{
      border-color: #fc4b6c;
    }
  }
</style>
