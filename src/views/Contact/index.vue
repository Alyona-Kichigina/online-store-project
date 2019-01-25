<template>
  <section class="contact-block">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-info">
          <div class="info-item">
            <i class="fa fa-home" aria-hidden="true"></i>
            <div>
              <div class="title">California, United States</div>
              <p>Santa monica bullevard</p>
            </div>
          </div>
          <div class="info-item">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <div>
              <a href="#" class="title">00 (440) 9865 562</a>
              <p>Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div class="info-item">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <div>
              <a href="#" class="title">support@colorlib.com</a>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>

        <vue-form
          :state="formstate"
          @submit.prevent="onSubmit"
          class="contact-form"
        >
          <!--в зависимости от результата в функции fieldClassName в класс обертки формы поля выводится класс-->
          <validate
            auto-label
            class="form-group required-field"
            :class="fieldClassName(formstate.name)"
          >
            <input
              type="text"
              name="name"
              class="form-control"
              required v-model.lazy="model.name"
              placeholder="Enter your name"
            >
            <field-messages
              name="name"
              show="$touched || $submitted"
              class="form-control-feedback"
            >
              <div>Success!</div>
              <div slot="required">Name is a required field</div>
            </field-messages>
          </validate>

          <validate
            auto-label
            class="form-group required-field"
            :class="fieldClassName(formstate.email)"
          >
            <input
              type="email"
              email-incorrectly
              name="email"
              class="form-control"
              required v-model.lazy="model.email"
              placeholder="Enter email address"
            >
            <field-messages
              name="email"
              show="$touched || $submitted"
              class="form-control-feedback"
            >
              <div>Success!</div>
              <div slot="required">Email is a required field</div>
              <div slot="email-incorrectly">Incorrectly entered mail</div>
            </field-messages>
          </validate>

          <validate
            auto-label
            class="form-group required-field"
            :class="fieldClassName(formstate.subject)"
          >
            <!--событие в инпуте произойдет после того как курсор уберут из поля ввода-->
            <input
              type="text"
              name="subject"
              class="form-control"
              required v-model.lazy="model.subject"
              placeholder="Enter Subject"
            >
            <field-messages
              name="subject"
              show="$touched || $submitted"
              class="form-control-feedback"
            >
              <div>Success!</div>
              <div slot="required">Subject is a required field</div>
            </field-messages>
          </validate>

          <validate
            auto-label
            class="form-group required-field message"
            :class="fieldClassName(formstate.message)"
          >
            <textarea
              type="text"
              name="message"
              class="form-control"
              required v-model.lazy="model.message"
              placeholder="Enter Message"
            ></textarea>
            <!--если нажата кнопка или курсор был в поле ввода, то показывать этот блок-->
            <field-messages name="message" show="$touched || $submitted" class="form-control-feedback">
              <div>Success!</div>
              <div slot="required">Message is a required field</div>
            </field-messages>
          </validate>
          <div class="">
            <button class="button-blue" type="submit">Send Message</button>
          </div>
        </vue-form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      formstate: {},
      model: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    fieldClassName: function (field) {
      // поле ввода пустое то не чего не выводим
      if (!field) {
        return ''
      }
      // если в поле ввода был курсор или нажата кнопка
      // и валидация прошла, то добалять класс has-success, т.е успешно
      if ((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success'
      }
      // если в поле ввода был курсор или нажата кнопка и валидация не прошла,
      // то добалять класс has-danger, т.е не успешно
      if ((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-danger'
      }
      // console.log(this.formstate)
    },
    onSubmit: function () {
      // console.log(this.formstate.$valid)
      const letter = {
        name: this.model.name,
        email: this.model.email,
        subject: this.model.subject,
        message: this.model.message
      }
      // this.$store.dispatch('sendingLetter', letter)
      console.log(letter)
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
