<template>
  <div class="select-wrapper">
    <label class="typo__label">{{ label }}</label>
    <multiselect
            :value="value"
            @input="selectValue"
            :options="options"
            :searchable="false"
            :close-on-select="false"
            :show-labels="false"
            :placeholder="placeholder"
    ></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  name: 'Select',
  components: {
    Multiselect
  },
  props: {
    label: {
      type: String,
      require: true
    },
    options: {
      type: Array,
      require: true
    },
    value: {
      type: String,
      require: true
    },
    placeholder: {
      type: String,
      require: true
    }
  },
  methods: {
    selectValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

</style>
