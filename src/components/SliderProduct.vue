<template>
    <div class="slider">
        <transition-group name="slide" tag="div" class="slider-wrapper">
            <img
                v-for="(item, index) in slides" :key="item.id"
                class="slider-item img-responsive"
                v-show="index === activeSlide"
                :src="item.image"
            >
        </transition-group>
        <div class="slider-button">
            <div class="preview-image"
                 v-for="(item, index) in slides"
                 :key="item.id"
                 @click="moveSlider(index)"
                 :class="index === activeSlide ? 'active' : '' ">
                <img :src="item.previewImage">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SliderProduct',
  props: {
    slides: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
      activeSlide: 0
    }
  },
  methods: {
    moveSlider (index) {
      this.activeSlide = index
    }
  }
}
</script>

<style scoped lang="scss">
    .slider {
        overflow: hidden;
        position: relative;
        width: 500px;
        .slider-wrapper{
            position: relative;
            width: 500px;
            height: 500px;
        }
        .slider-item {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
        .slider-button {
            display: flex;
            justify-content: flex-start;
            position: absolute;
            right: 30px;
            bottom: 30px;
            .preview-image {
                margin-right: 10px;
                position: relative;
                &:before {
                    content: '';
                    background: rgba(197, 50, 45, .80);
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    opacity: 0;
                    max-height: 60px;
                }
                &:last-child {
                    margin-right: 0;
                }
                &.active {
                    &:before {
                        opacity: 1;
                    }
                }
            }
        }
    }
    .slide-leave-active,
    .slide-enter-active {
        transition: 1s;
    }
    .slide-enter {
        transform: translate(100%, 0);
    }
    .slide-leave-to {
        transform: translate(-100%, 0);
    }
</style>
