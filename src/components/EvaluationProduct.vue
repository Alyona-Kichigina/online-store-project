<template>
    <div class="evaluation-block">
        <div class="evaluation">
          <div class="title">Overall</div>
          <div class="number">4.0</div>
          <div class="text-gray">(03 Reviews)</div>
        </div>
      <div class="stars-product">
        <div  class="title">Based on 3 Reviews</div>
        <div class="stars-block">
          <StarProduct></StarProduct>
          <StarProduct></StarProduct>
          <StarProduct></StarProduct>
          <StarProduct></StarProduct>
          <StarProduct></StarProduct>
        </div>
      </div>
    </div>
</template>

<script>
import StarProduct from '../components/StarProduct'
export default {
  name: 'ReviewsBlock',
  components: {
    StarProduct
  }
}
</script>

<style scoped>
  .evaluation-block {
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
  .evaluation {
    background: hsl(240, 100%, 98.8%);
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .evaluation .title {
    color: hsl(0, 0%, 13.3%);
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;
  }
  .number {
    color: hsl(228.9, 100%, 54.3%);
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
  }
  .text-gray{
    font-size: 14px;
    color: hsl(0, 0%, 46.7%);
    line-height: 1.2;
  }
  .stars-product .title {
    font-size: 18px;
    color: hsl(0, 0%, 13.3%);
    font-weight: 500;
    margin-bottom: 10px;
  }
</style>
