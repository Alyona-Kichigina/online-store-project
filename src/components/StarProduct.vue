<template>
 <div>
   <a href="#" class="star-block">5 Star
     <i class="fa fa-star"></i>
     <i class="fa fa-star"></i>
     <i class="fa fa-star"></i>
     <i class="fa fa-star"></i>
     <i class="fa fa-star"></i>01</a>
 </div>
</template>

<script>
  export default {
    name: 'StarProduct'
  }
</script>

<style scoped>
.star-block {
  font-size: 14px;
  color: hsl(0, 0%, 46.7%);
}
.fa {
  color: hsl(51.2, 100%, 49.2%);
}
.fa:last-child {
  padding-right: 3px;
}
</style>
