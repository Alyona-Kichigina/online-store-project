<template>
  <div>
      <input type="checkbox" :value="value" @change="handleChange">
      <label>{{title}}</label>
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: ['value', 'title'],
    methods: {
      handleChange (e) {
        this.$emit('input', e.target.checked)
      }
    }
  }
</script>
<style scoped>
  .checkbox input[type="checkbox"] {

  }
  .checkbox label {
    color: hsl(0, 0%, 46.7%);
  }


</style>
