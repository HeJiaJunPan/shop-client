<template>
<div class="list-container clearfix">
  <Carousel class="carousel" :list="bannerList"></Carousel>
  <!-- 尚品汇快报 -->
  <div class="right-container">
    <div class="news">
      <div class="news-title clearfix">
        <h3>尚品汇快报</h3>
        <div><span>更多 &gt;</span></div>
      </div>
      <ul class="news-list">
        <li class="news-item"><span>[特惠]</span><a href="#">备战开学季 全民半价购数码</a> </li>
        <li class="news-item"><span>[特惠]</span><a href="#">备战开学季 全民半价购数码</a> </li>
        <li class="news-item"><span>[特惠]</span><a href="#">备战开学季 全民半价购数码</a> </li>
        <li class="news-item"><span>[特惠]</span><a href="#">备战开学季 全民半价购数码</a> </li>
        <li class="news-item"><span>[特惠]</span><a href="#">备战开学季 全民半价购数码</a> </li>
      </ul>
    </div>
    <ul class="life-service">
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
      <li class="life-item">
        <span class="server-icon"></span>
        <span class="server-info">话费</span>
      </li>
    </ul>
    <div class="ad">
      <img src="../assets/images/home/ad1.png">
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: "ListContainer",
  mounted() {
    this.getBannerList()
  },
  computed: {
    ...mapState('home', ['bannerList'])
  },
  methods: {
    ...mapActions('home', ['getBannerList'])
  }
}
</script>

<style scoped lang="less">
.list-container {
  .carousel {
    float: left;
    width: 730px;
    margin-top: 5px;
  }

  // 快报样式
  .right-container {
    float: right;
    width: 250px;

    .news {
      margin-top: 5px;
      border: 1px solid #e4e4e4;

      .news-title {
        margin: 5px 5px 0px;
        padding: 5px 10px;
        border-bottom: 1px solid #e4e4e4;
        font-size: 14px;

        h3 {
          float: left;
          font-weight: bold;
        }

        div {
          float: right;
          font-size: 12px;
        }
      }

      .news-list {
        padding: 5px 15px;
        span {
          font-weight: bold;
        }
        a {
          text-decoration: none;
          color: #333333;
          line-height: 26px;
        }
      }
    }

    .life-service {
      display: flex;
      flex-wrap: wrap;
      border-right: 1px solid #e4e4e4;

      .life-item {
        width: 25%;
        height: 64px;
        border-left: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        margin-left: -1px;
        text-align: center;

        .server-icon {
          display: block;
          background-image: url("../assets/images/home/icons.png");
          width: 61px;
          height: 40px;

          background-position: 0px -5px;
        }
      }
    }

    .ad {
      img {
        margin-top: 8px;
        width: 250px;
      }
    }
  }
}

</style>