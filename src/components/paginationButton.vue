<template>
  <button @click="onClickFunc"
          :value="buttonValue"
          class="pagination-button"
          :class="{ active: parseInt(buttonValue) === parseInt(currentNumber)}"
  ><slot></slot></button>
</template>

<script>
export default {
  name: 'changePage',
  props: ['buttonValue', 'currentNumber', 'onClickFunc']
}
</script>

<style scoped lang="scss">
  .pagination-button {
    height: 40px;
    width: 40px;
    background: hsl(0, 0%, 100%);
    text-align: center;
    line-height: 38px;
    border: 1px solid hsl(0, 0%, 93.3%);
    border-right: none;
    font-size: 14px;
    color: hsl(0, 0%, 13.3%);
    &.active, &:hover {
      background: hsl(228.9, 100%, 54.3%);
      color: hsl(0, 0%, 100%);
      border-color: hsl(228.9, 100%, 54.3%);
    }
    &:last-child {
      border-right:  1px solid hsl(0, 0%, 93.3%);
    }
  }
</style>
