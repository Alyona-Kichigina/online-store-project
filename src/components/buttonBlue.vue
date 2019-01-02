<template>
  <button
    @click="onClickFunc"
    :value="buttonValue"
    class="button-blue"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'buttonBlue',
  props: {
    buttonValue: {
      type: String,
      required: false
    },
    onClickFunc: {
      type: Function,
      required: false
    }
  }
}
</script>

<style scoped>
  button {
    border-radius: 0;
    padding: 0 30px;
    line-height: 38px;
  }

</style>
