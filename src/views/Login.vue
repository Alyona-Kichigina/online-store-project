<template>
  <div class="container">
    <div class="login-block">

        <!--<img class="img-responsive" src="../../static/img/login.jpg" alt="">-->
        <div class="content">
          <div class="title">New to our website?</div>
          <p>There are advances being made in science and technology everyday,
            and a good example of this is the</p>
          <button class="button-blue">Create an Account</button>
        </div>
      </div>
      <div class="form">
        <form action="">
          <div
            class="form-item"
            :class="{ 'errorInput': $v.email.$error }"
          >
            <input
              type="email"
              placeholder="Email"
              v-model="email"
              :class="{ 'form-error': $v.email.$error }"
              @change="$v.email.$touch()"
            >
            <div class="error"
                 v-if="!$v.email.required"
            >Field is required</div>
            <div class="error"
                 v-if="!$v.email.email"
            >Email is not correct</div>
          </div>

          <div
            class="form-item"
            :class="{ 'errorInput': $v.password.$error }"
          >
            <input
              type="password"
              placeholder="Password"
              v-model="password"
              :class="{ 'form-error': $v.password.$error }"
              @change="$v.password.$touch()"
            >
            <div class="error"
`                 v-if="!$v.password.required"
            >Password is required</div>
            <div class="error"
                 v-if="!$v.password.minLength"
            >Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
          </div>

          <div
            class="form-item"
            :class="{ 'errorInput': $v.repeatPassword.$error }"
          >
            <input
              type="password"
              placeholder="Repeat your password"
              v-model="repeatPassword"
              :class="{ 'form-error': $v.repeatPassword.$error }"
              @change="$v.repeatPassword.$touch()"
            >
            <div class="error"
                 v-if="!$v.repeatPassword.sameAsPassword"
            >Passwords must be identical.</div>
          </div>

          <div class="buttons-list">
            <button
              class="button-blue"
              type="submit"
              :disabled.prevent="submitStatus === 'PENDING'"
            >Registration</button>
            <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
            <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
            <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
          </div>

        </form>
      </div>

  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: '',
      password: '',
      repeatPassword: '',
      submitStatus: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  }
}
</script>

<style scoped>

</style>
