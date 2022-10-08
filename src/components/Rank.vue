<template>
<div class="rank-container w">
  <!-- tab标签 -->
  <ul class="tab">
    <li class="tab-item">
      <span class="tab-icon"></span>
      <span class="tab-info">热卖排行</span>
    </li>
    <li class="tab-item">
      <span class="tab-icon"></span>
      <span class="tab-info">特价排行</span>
    </li>
    <li class="tab-item">
      <span class="tab-icon"></span>
      <span class="tab-info">新品排行</span>
    </li>
  </ul>
  <!-- 排行详情页 -->
  <div class="content">
    <ul class="rank-list">
      <li class="rank-item">
        <a href="#">
          <div class="item-img">
            <img src="../assets/images/home/1.jpg">
          </div>
          <div class="item-info">
            <p class="item-title">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
            <p class="item-price">定金：¥100.00</p>
          </div>
        </a>
      </li>
      <li class="rank-item">
        <a href="#">
          <div class="item-img">
            <img src="../assets/images/home/1.jpg">
          </div>
          <div class="item-info">
            <p class="item-title">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
            <p class="item-price">定金：¥100.00</p>
          </div>
        </a>
      </li>
      <li class="rank-item">
        <a href="#">
          <div class="item-img">
            <img src="../assets/images/home/1.jpg">
          </div>
          <div class="item-info">
            <p class="item-title">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
            <p class="item-price">定金：¥100.00</p>
          </div>
        </a>
      </li>
      <li class="rank-item">
        <a href="#">
          <div class="item-img">
            <img src="../assets/images/home/1.jpg">
          </div>
          <div class="item-info">
            <p class="item-title">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</p>
            <p class="item-price">定金：¥100.00</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Rank"
}
</script>

<style scoped lang="less">
.tab {
  text-align: center;
  .tab-item {
    display: inline-block;
    padding: 0px 18px;
    font-size: 18px;
    color: #e60012;

    .tab-icon {
      display: block;
      width: 35px;
      height: 35px;
      margin-left: 10px;
    }
    .tab-info {
      display: block;
      margin: 5px 0px;
    }
  }
  .tab-item:nth-child(1) .tab-icon {
    background-image: url("../assets/images/home/bg0.png");
    background-position: -35px 0px;
  }
  .tab-item:nth-child(2) .tab-icon {
    background-image: url("../assets/images/home/bg0.png");
    background-position: 0px 0px;
  }
  .tab-item:nth-child(3) .tab-icon {
    background-image: url("../assets/images/home/bg0.png");
    background-position: 0px 0px;
  }
}

.content {
  .rank-list {
    display: flex;
    justify-content: space-around;
  }

  .rank-item {
    width: 269px;
    border: 1px solid #e1251b;

    a {
      text-decoration: none;
      color: #666;
    }
    img {
      width: 200px;
      height: 200px;
    }

    .item-img {
      width: 230px;
      height: 210px;
      text-align: center;
      margin: 5px auto 18px;
    }

    .item-info {
      background-color: #fafafa;
      .item-title {
        height: 50px;
        padding-left: 10px;
        line-height: 28px;
      }
      .item-price {
        font-size: 20px;
        color: #e1251b;

        height: 35px;
        padding-left: 10px;
        margin: 10px auto 0px;
      }
    }
  }
}
</style>