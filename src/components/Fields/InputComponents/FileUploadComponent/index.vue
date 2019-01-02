<template>
  <InputWrapper
    :label="label"
    :id="id"
    :validationErrors="validationErrors"
    :submitFailed="submitFailed"
    :changed="changed"
    :touched="touched"
  >
    <Upload
      :class="submitFailed && 'has-error'"
      :id="id"
      :placeholder="placeholder"
      :onFileUploaded="onFileUploaded"
    />
  </InputWrapper>
</template>
<script>
import InputWrapper from '../InputWrapper.vue'
import InputMixin from '@/mixins/InputMixin.js'
import Upload from '@/components/doc_elements/Document-frame-create'

export default {
  name: 'input-doc',
  mixins: [InputMixin],
  methods: {
    handleInput (value) {
      this.$emit('input', value)
    }
  },
  props: {
    onFileUploaded: {
      type: Function,
      required: true
    },
  },
  components: {
    InputWrapper, Upload
  }
}
</script>
<style lang="scss">
  .has-error {
    .el-upload{
      .el-upload-dragger {
        border-color: #fc4b6c;
      }
    }
  }
</style>
