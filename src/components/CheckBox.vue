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
  // вызывается при изменении
  computed: {
    checked () {
      const { checkBoxValue, value } = this
      // если checkBoxValue = true, то проверяем содержит ли value в себе checkBoxValue
      // иначе value = false
      return checkBoxValue ? value.includes(checkBoxValue) : !!value
    }
  },
  methods: {
    handleArrayModel () {
      const { checkBoxValue, value } = this
      // если value содержит checkBoxValue,
      return value.includes(checkBoxValue)
        // то фильтруем value и создаем новый массив с содержимым, которое не равно checkBoxValue
        ? value.filter(item => item !== checkBoxValue)
        // иначе в value добааляем checkBoxValue
        : [...value, checkBoxValue]
    },
    handleInput () {
    	// если checkBoxValue = true, то выполняем handleArrayModel(),
      // иначе value становится true или false
      const data = this.checkBoxValue ? this.handleArrayModel() : !this.value
      // генерирум событие input и передаем data и this.modelKey именно этого чекбокса
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
