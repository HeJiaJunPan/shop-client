<template>
<div class="todayRecommend-container w">
  <ul class="todayRecommend">
    <li class="clock">
      <img src="../assets/images/home/clock.png">
      <h3>今日推荐</h3>
    </li>
    <li class="banner">
      <img src="../assets/images/home/today01.png">
    </li>
    <li class="banner">
      <img src="../assets/images/home/today02.png">
    </li>
    <li class="banner">
      <img src="../assets/images/home/today03.png">
    </li>
    <li class="banner">
      <img src="../assets/images/home/today04.png">
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "TodayRecommend"
}
</script>

<style scoped lang="less">
.todayRecommend {
  display: flex;
  height: 165px;
  margin: 10px 0px;
  background-color: #eaeaea;

  .clock {
    width: (1/6)*100%;
    padding: 30px 0px;
    background-color: #5c5251;
    color: #fff;
    font-size: 18px;
    text-align: center;

    h3 {
      margin: 9px 0px;
      font-weight: bold;
    }
  }
}
</style>