<template>
  <div>
    <div v-for="radioBox of radioBoxesArray" class="checkbox">
      <input type="checkbox" :value="radioBox.value">
      <label>{{radioBox.title}}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: ['radioBoxesArray']
  }
</script>
<style scoped>
  .checkbox input[type="checkbox"] {

  }
  .checkbox label {
    color: hsl(0, 0%, 46.7%);
  }


</style>
