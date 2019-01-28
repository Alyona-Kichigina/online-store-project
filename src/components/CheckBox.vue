<template>
  <div class="field-container">
    <input
      class="form-check-input"
      type="checkbox"
      :id="id"
      :checked="checked"
      @input="handleInput"
    />
    <label class="form-check-label" :for="id">
      {{ label }}
    </label>
  </div>
</template>
<script>
export default {
  name: 'CheckBox',
  computed: {
    checked () {
      const { checkBoxValue, value } = this
      return checkBoxValue ? value.includes(checkBoxValue) : !!value
    }
  },
  methods: {
    handleArrayModel () {
      const { checkBoxValue, value } = this
      return value.includes(checkBoxValue)
        ? value.filter(item => item !== checkBoxValue)
        : [...value, checkBoxValue]
    },
    handleInput () {
      const data = this.checkBoxValue ? this.handleArrayModel() : !this.value
      this.$emit('input', data, this.modelKey)
    }
  },
  props: {
    id: String,
    value: {
      type: [Array, Boolean],
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    checkBoxValue: String,
    modelKey: String
  }
}
</script>
<style lang="scss">
  .has-error {
    .el-input__inner{
      border-color: #fc4b6c;
    }
  }
  .field-container {
    display: flex;
    align-items: center;
    .form-check-label {
      padding-left: 20px;
    }
    &:hover {
      color: $baseColor;
    }
  }
</style>
