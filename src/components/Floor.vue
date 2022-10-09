<template>
<div class="floor-container w">
  <div class="first-row clearfix">
    <h3 class="title">家用电器</h3>
    <ul class="tab-content clearfix">
      <li class="tab-item">
        <a href="#">热门</a>
      </li>
      <li class="tab-item">
        <a href="#">大家电</a>
      </li>
      <li class="tab-item">
        <a href="#">生活电器</a>
      </li>
      <li class="tab-item">
        <a href="#">厨房电器</a>
      </li>
      <li class="tab-item">
        <a href="#">应季电器</a>
      </li>
      <li class="tab-item">
        <a href="#">空气/净水</a>
      </li>
      <li class="tab-item">
        <a href="#">高端电器</a>
      </li>
    </ul>
  </div>
  <div class="bd-content">
    <div class="blockgary">
      <ul class="jd-list">
        <li>节能补贴</li>
        <li>4K电视</li>
        <li>空气净化器</li>
        <li>IH电饭煲</li>
        <li>滚筒洗衣机</li>
        <li>电热水器</li>
      </ul>
      <div>
        <img src="../assets/images/home/floor-1-1.png" alt="">
      </div>
    </div>
    <div class="floorBanner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../assets/images/home/floor-1-b01.png"> </div>
          <div class="swiper-slide"><img src="../assets/images/home/floor-1-b02.png"> </div>
          <div class="swiper-slide"><img src="../assets/images/home/floor-1-b03.png"> </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div class="floor">
      <div class="floor-conver-pit"><img src="../assets/images/home/floor-1-2.png" alt=""></div>
      <div class="floor-conver-pit"><img src="../assets/images/home/floor-1-3.png" alt=""></div>
    </div>
    <div class="floor">
      <div><img src="../assets/images/home/floor-1-4.png" alt=""></div>
    </div>
    <div class="floor">
      <div class="floor-conver-pit"><img src="../assets/images/home/floor-1-5.png" alt=""></div>
      <div class="floor-conver-pit"><img src="../assets/images/home/floor-1-6.png" alt=""></div>
    </div>
  </div>
</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: "Floor",
  mounted() {
    new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style scoped lang="less">
.floor-container {
  margin-top: 15px;

  .first-row {
    .title {
      float: left;
      margin: 9px 0px;
      font-size: 20px;
      font-weight: bold;
      line-height: 30px;
      color: #c81623;
    }

    .tab-content {
      margin: 10px 0px 0px;
      a {
        text-decoration: none;
        color: #666;
      }
      float: right;

      .tab-item {
        float: left;
        line-height: 18px;
      }
      .tab-item:not(:nth-last-of-type(1))::after {
        content: "|";
        padding: 0px 10px;
      }
      .tab-item:first-of-type {
        color: #e1251b;
        a {
          color: #e1251b;
        }
      }
    }
  }
  .bd-content {
    height: 360px;
    border-top: 2px solid #c81623;
    border-bottom: 1px solid #e4e4e4;
    display: flex;

    .blockgary {
      background-color: #f7f7f7;
      width: 210px;
      vertical-align: center;
      .jd-list {
        li {
          float: left;
          width: 40%;
          margin: 0px 10px;
          line-height: 26px;
          text-align: center;
        }
      }
      img {
        width: 100%;
      }
    }
    .floorBanner {
      .swiper-container {
        width: 330px;
      }
    }
    .floor {
      width: 220px;
      img {
        height: 50%;
      }
    }
  }
}

</style>