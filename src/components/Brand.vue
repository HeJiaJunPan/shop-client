<template>
<div class="brand-container w">
  <ul class="brand-list clearfix">
    <li class="brand-item"><img src="../assets/images/home/brand_21.png" alt=""></li>
    <li class="brand-item"><img src="../assets/images/home/brand_19.png" alt=""></li>
    <li class="brand-item"><img src="../assets/images/home/brand_17.png" alt=""></li>
    <li class="brand-item"><img src="../assets/images/home/brand_15.png" alt=""></li>
    <li class="brand-item"><img src="../assets/images/home/brand_13.png" alt=""></li>
    <li class="brand-item"><img src="../assets/images/home/brand_11.png" alt=""></li>
    <li class="brand-item"><img src="../assets/images/home/brand_09.png" alt=""></li>
    <li class="brand-item"><img src="../assets/images/home/brand_07.png" alt=""></li>
    <li class="brand-item"><img src="../assets/images/home/brand_05.png" alt=""></li>
    <li class="brand-item"><img src="../assets/images/home/brand_03.png" alt=""></li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Brand"
}
</script>

<style scoped lang="less">
.brand-container {
  margin-top: 10px;
  margin-bottom: 10px;
  .brand-list {
    background-color: #f7f7f7;
    padding: 15px 0px;
    .brand-item {
      float: left;
      width: 120px;
      height: 37px;

      img {
        padding: 0px 10px;
      }
    }
  }
}
</style>