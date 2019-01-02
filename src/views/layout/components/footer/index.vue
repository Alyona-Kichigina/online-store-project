<template>
  <div>
    <div class="footer-block">
      <div class="container">
        <div class="footer-wrapper">
          <div class="single-footer-widget">
            <div class="footer-title">About Us</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
          </div>

          <div class="single-footer-widget">
            <div class="footer-title">Newsletter</div>
            <p>Stay updated with our latest trends</p>
            <form action="" class="form-footer">
              <input type="text" placeholder="Email address">
              <button class="button-blue"><i class="fa fa-angle-right" aria-hidden="true"></i>
              </button>
            </form>
          </div>

          <div class="single-footer-widget">
            <div class="footer-title">Instagram Feed</div>
            <div class="list">
              <img src="../../../../../public/img/instagram/Image-01.jpg" alt="">
              <img src="../../../../../public/img/instagram/Image-02.jpg" alt="">
              <img src="../../../../../public/img/instagram/Image-03.jpg" alt="">
              <img src="../../../../../public/img/instagram/Image-04.jpg" alt="">
              <img src="../../../../../public/img/instagram/Image-05.jpg" alt="">
              <img src="../../../../../public/img/instagram/Image-06.jpg" alt="">
              <img src="../../../../../public/img/instagram/Image-07.jpg" alt="">
              <img src="../../../../../public/img/instagram/Image-08.jpg" alt="">
            </div>
          </div>

          <div class="single-footer-widget">
            <div class="footer-title">Follow Us</div>
            <p>Let us be social</p>
            <div class="social-block">
              <div class="flex">
                <a
                  :href="icon.url"
                  v-for="icon in icons"
                  :key="icon.name"
                >
                  <span v-html="icon.name"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          Copyright ©2018
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: [
        { url: '/facebook', name: '<i class="fa fa-facebook"></i>' },
        { url: '/twitter', name: '<i class="fa fa-twitter"></i>' },
        { url: '/dribbble', name: '<i class="fa fa-dribbble"></i>' },
        { url: '/behance', name: '<i class="fa fa-behance"></i>' }
      ]
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
