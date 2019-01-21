<template>
  <div class="input-container">
    <!--лабел инпутам всего компонента поля формы-->
    <label class="reportText" :for="id">{{label}}</label>
    <div class="input-wrapper">
      <!--здесь будем выводить инпут-->
      <slot />
      <div
        v-if="submitFailed || (!changed && touched)"
        class="error-container"
      >
         <!--выводим ошибку-->
        {{ validationErrors[0] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputWrapper',
  props: {
    label: String,
    id: String,
    validationErrors: Array,
    submitFailed: Boolean,
    changed: Boolean,
    touched: Boolean
  }
}
</script>

<style scoped>
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
  .input-wrapper {
    position: relative;
  }
  .error-container {
    position: absolute;
    left: 0;
    bottom: -17px;
    font-size: 10px;
    color: #fc4b6c;
  }
  .text-muted{
    font-size: 1rem;
  }
</style>
