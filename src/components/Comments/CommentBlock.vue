<template>
  <div>
    <div class="comment-item">
      <div
        class="media"
        v-for="commentItem in commentsArray"
        :key="commentItem.id"
      >
        <img :src="commentItem.img" alt="">
        <div class="media-body">
          <div>
            <div class="name">{{ commentItem.name }}</div>
            <div class="data-time">{{ commentItem.date }}</div>
          </div>
          <div>
            <a class="button-comment" href="#">Reply</a>
          </div>
        </div>
      </div>
      <p>{{ commentItem.text }}</p>
    </div>
    <!--<div class="comment-item reply">-->
      <!--<div class="media">-->
        <!--<img src="../../public/img/product/single-product/review-2.png" alt="">-->
        <!--<div class="media-body">-->
          <!--<div>-->
            <!--<div class=/"name">Blake Ruiz</div>-->
            <!--<div class="data-time">12th Feb, 2017 at 05:56 pm</div>-->
          <!--</div>-->
          <!--<div>-->
            <!--<a class="button-comment" href="#">Reply</a>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,-->
        <!--sed do eiusmod tempor incididunt ut labore et dolore magna-->
        <!--aliqua. Ut enim ad minim veniam, quis nostrud exercitation-->
        <!--ullamco laboris nisi ut aliquip ex ea commodo</p>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'CommentBlock',
  props: {
    commentsArray: {
      type: Array,
      require: true
    }
  }
}
</script>

<style lang="scss" src="./comment.scss"></style>
