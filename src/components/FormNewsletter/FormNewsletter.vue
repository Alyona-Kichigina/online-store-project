<template>
  <section class="newsletter-form-block">
    <div class="container">
      <div class="title-block text-center">
        <h2>Subscribe for Our Newsletter</h2>
        <span>We won’t send any kind of spam</span>
      </div>
      <div class="form-wrapper">
        <form target="" novalidate action=""
              method="" class="newsletter-form">
          <input type="email" name="EMAIL" placeholder="Email address"
                 required="">
          <button type="submit" class="button-blue">Get Started</button>
          <div class="info"></div>
        </form>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: 'FormNewsletter'
  }
</script>

<style lang="scss" src="./form-newsletter-style.scss"></style>
