<template>
  <div class="login-wrapper">
    <form action="" class="form-container">
      <Input
        label="Login"
        id="login"
        v-model="formPayload.login"
        :validationErrors="validationErrors.login"
        :submitFailed="submitFailed"
      />
      <Input
        label="Password"
        id="password"
        v-model="formPayload.password"
        :validationErrors="validationErrors.password"
        :submitFailed="submitFailed"
      />
      <div class="button-wrapper">
        <button
          class="submit-button"
          type="button"
          @click="handleSubmit"
        >login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { getValidation } from '@/utils/valiadtor'
import Input from '@/components/Fields/InputComponent'
import { LOGIN } from '@/store/modules/auth'
export default {
  name: 'index',
  data () {
    return {
     formPayload: {
       login: undefined,
       password: undefined
     },
      // объект ошибки валлидации
      validationErrors: {},
      submitFailed: false
    }
  },
  methods: {
    handleSubmit () {
      const rules = {
        login: 'required',
        password: 'required'
      }
      getValidation(this.formPayload, rules, { onFail: this.handleSubmitFail, onSuccess: this.submitForm })
    },
    handleSubmitFail (e) {
      this.submitFailed = true
      this.validationErrors = e
    },
    submitForm () {
      this.submitFailed = false
      this.validationErrors = {}
      this.$store.dispatch(LOGIN, this.formPayload)
    }
  },
  components: {
    Input
  }
}
</script>

<style scoped lang="scss">
  .login-wrapper {
    min-height: 100vh;
    width: 100%;
    display: flex;
    .form-container {
      margin: auto;
      padding: 32px;
      .button-wrapper {
        display: flex;
        justify-content: flex-end;
        .submit-button {
      
        }
      }
    }
  }
</style>
