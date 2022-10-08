<template>
<div class="like-container w">
  <div class="first-row clearfix">
    <h3 class="title">猜你喜欢</h3>
    <a href="#" class="change-button">换一换</a>
  </div>
  <ul class="content">
    <li class="item">
      <div class="img-wrapper">
        <img src="../assets/images/home/like_01.png">
      </div>
      <div class="text-wrapper">
        <p class="info">阳光美包新款单肩包女包时尚子母包四件套女</p>
        <h3 class="price">¥116.00</h3>
      </div>
    </li>
    <li class="item">
      <div class="img-wrapper">
        <img src="../assets/images/home/like_02.png">
      </div>
      <div class="text-wrapper">
        <p class="info">阳光美包新款单肩包女包时尚子母包四件套女</p>
        <h3 class="price">¥116.00</h3>
      </div>
    </li>
    <li class="item">
      <div class="img-wrapper">
        <img src="../assets/images/home/like_03.png">
      </div>
      <div class="text-wrapper">
        <p class="info">阳光美包新款单肩包女包时尚子母包四件套女</p>
        <h3 class="price">¥116.00</h3>
      </div>
    </li>
    <li class="item">
      <div class="img-wrapper">
        <img src="../assets/images/home/like_01.png">
      </div>
      <div class="text-wrapper">
        <p class="info">阳光美包新款单肩包女包时尚子母包四件套女</p>
        <h3 class="price">¥116.00</h3>
      </div>
    </li>
    <li class="item">
      <div class="img-wrapper">
        <img src="../assets/images/home/like_02.png">
      </div>
      <div class="text-wrapper">
        <p class="info">阳光美包新款单肩包女包时尚子母包四件套女</p>
        <h3 class="price">¥116.00</h3>
      </div>
    </li>
    <li class="item">
      <div class="img-wrapper">
        <img src="../assets/images/home/like_03.png">
      </div>
      <div class="text-wrapper">
        <p class="info">阳光美包新款单肩包女包时尚子母包四件套女</p>
        <h3 class="price">¥116.00</h3>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Like"
}
</script>

<style scoped lang="less">
.like-container {
  margin-top: 15px;

  .first-row {
    .title {
      float: left;
      font-size: 20px;
      line-height: 30px;
      font-weight: bold;
    }

    .change-button {
      float: right;
      width: 66px;
      height: 25px;
      line-height: 25px;

      font-size: 12px;
      color: #666;
      text-decoration: none;

      background-image: url("../assets/images/home/icons.png");
      background-position: 182px -104px;
    }
  }

  .content {
    display: flex;
    border: 1px solid #e4e4e4;
    padding: 0px 10px;

    .item {
      width: (1/6)*100%;
      height: 250px;


      .img-wrapper{
        width: 142px;
        img {
          width: 142px;
          height: 142px;
        }
      }
      .text-wrapper {
        border-right: 1px solid #e4e4e4;
        width: 142px;

        .info {
          margin: 5px 0px;
        }
        .price {
          margin: 9px 0px;
          font-size: 20px;
          font-weight: bold;
          color: #df3033;
          line-height: 30px;
        }
      }
    }
  }
}

</style>