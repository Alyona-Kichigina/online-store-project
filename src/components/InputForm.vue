<template>
  <validate
    auto-label
    class="form-group required-field"
    :class="fieldClassName(formstate.name)"
  >
    <input
      class="form-control"
      required v-model.lazy="model"
    >
    <field-messages
      show="$touched || $submitted"
      class="form-control-feedback"
    >
      <div>Success!</div>
      <div slot="required"><slot></slot></div>
    </field-messages>
  </validate>
</template>

<script>
  export default {
    name: 'InputForm',
    props: ['class', 'model']
  }
</script>

<style scoped>

</style>
