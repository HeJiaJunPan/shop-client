<template>
<div class="floor-container w">
  <div class="first-row clearfix">
    <h3 class="title">{{list.name}}</h3>
    <ul class="tab-content clearfix">
      <li class="tab-item" v-for="(nav,index) in list.navList" :key="index">
        <a :href="nav.url">{{nav.text}}</a>
      </li>
    </ul>
  </div>
  <div class="bd-content">
    <div class="blockgary">
      <ul class="jd-list">
        <li v-for="(kw,index) in list.keywords" :key="index">{{kw}}</li>
      </ul>
      <div>
        <img src="../assets/images/home/floor-1-1.png" alt="">
      </div>
    </div>
    <div class="floorBanner">
      <Carousel :list="list.carouselList"></Carousel>
    </div>
    <div class="floor">
      <div class="floor-conver-pit"><img :src="list.recommendList[0]" alt=""></div>
      <div class="floor-conver-pit"><img :src="list.recommendList[1]" alt=""></div>
    </div>
    <div class="floor">
      <div><img :src="list.bigImg" alt=""></div>
    </div>
    <div class="floor">
      <div class="floor-conver-pit"><img :src="list.recommendList[2]" alt=""></div>
      <div class="floor-conver-pit"><img :src="list.recommendList[3]" alt=""></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Floor",
  props: ['list']
}
</script>

<style scoped lang="less">
.floor-container {
  margin-top: 15px;

  .first-row {
    line-height: 30px;
    .title {
      float: left;
      margin: 9px 0px;
      font-size: 20px;
      font-weight: bold;
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