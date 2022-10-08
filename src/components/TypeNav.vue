<template>
<div class="type-nav">
  <div class="nav-container w">
    <ul class="nav-list clearfix">
      <li class="all-shop">
        <h2>全部商品分类</h2>
        <ul class="category-list">
          <li class="category-list-item">
            <a href="#" class="category-title">图书、音像、数字商品</a>
            <ul class="children-list">
              <li class="children-list-item">
                <a href="#">婚恋/两性</a>
              </li>
              <li class="children-list-item">
                <a href="#">文学</a>
              </li>
              <li class="children-list-item">
                <a href="#">经管</a>
              </li>
              <li class="children-list-item">
                <a href="#">畅读VIP</a>
              </li>
            </ul>
          </li>

          <li class="category-list-item">
            <a href="#" class="category-title">家用电器</a>
            <ul class="children-list">
              <li class="children-list-item">
                <a href="#">婚恋/两性</a>
              </li>
              <li class="children-list-item">
                <a href="#">文学</a>
              </li>
              <li class="children-list-item">
                <a href="#">经管</a>
              </li>
              <li class="children-list-item">
                <a href="#">畅读VIP</a>
              </li>
            </ul>
          </li>
          <li class="category-list-item">
            <a href="#" class="category-title">手机、数码、充值</a>
            <ul class="children-list">
              <li class="children-list-item">
                <a href="#">婚恋/两性</a>
              </li>
              <li class="children-list-item">
                <a href="#">文学</a>
              </li>
              <li class="children-list-item">
                <a href="#">经管</a>
              </li>
              <li class="children-list-item">
                <a href="#">畅读VIP</a>
              </li>
            </ul>
          </li>
          <li class="category-list-item">
            <a href="#" class="category-title">电脑、办公</a>
            <ul class="children-list">
              <li class="children-list-item">
                <a href="#">婚恋/两性</a>
              </li>
              <li class="children-list-item">
                <a href="#">文学</a>
              </li>
              <li class="children-list-item">
                <a href="#">经管</a>
              </li>
              <li class="children-list-item">
                <a href="#">畅读VIP</a>
              </li>
            </ul>
          </li>
          <li class="category-list-item">
            <a href="#" class="category-title">家居、家具、家装、厨具</a>
            <ul class="children-list">
              <li class="children-list-item">
                <a href="#">婚恋/两性</a>
              </li>
              <li class="children-list-item">
                <a href="#">文学</a>
              </li>
              <li class="children-list-item">
                <a href="#">经管</a>
              </li>
              <li class="children-list-item">
                <a href="#">畅读VIP</a>
              </li>
            </ul>
          </li>
          <li class="category-list-item">
            <a href="#" class="category-title">服饰内衣</a>
            <ul class="children-list">
              <li class="children-list-item">
                <a href="#">婚恋/两性</a>
              </li>
              <li class="children-list-item">
                <a href="#">文学</a>
              </li>
              <li class="children-list-item">
                <a href="#">经管</a>
              </li>
              <li class="children-list-item">
                <a href="#">畅读VIP</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="#">服装城</a></li>
      <li><a href="#">美妆馆</a></li>
      <li><a href="#">尚品汇超市</a></li>
      <li><a href="#">全球购</a></li>
      <li><a href="#">闪购</a></li>
      <li><a href="#">团购</a></li>
      <li><a href="#">有趣</a></li>
      <li><a href="#">秒杀</a></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'TypeNav'
}
</script>

<style scoped lang="less">
.type-nav {
  width: 100%;
  border-bottom: 2px solid #e1251b;

  .nav-container {
    .nav-list > li {
      float: left;
      height: 45px;
      line-height: 45px;

      & > a {
        display: block;
        height: 45px;
        text-decoration: none;
        font-size: 16px;
        color: #333;
      }
    }
    .nav-list > li:not(:first-of-type) {
      margin: 0px 20px;
    }

    .all-shop {
      width: 210px;
      background-color: #e1251b;
      font-size: 14px;
      font-weight: bold;
      color: #FFFFFF;
      position: relative;

      h2 {
        text-align: center;
      }

      .category-list {
        position: absolute;
        z-index: 999;

        width: 210px;
        height: 462px;
        background-color: #fafafa;

        a {
          font-weight: normal;
          color: #333;
          text-decoration: none;
        }

        .category-list-item {
          height: 30px;
          padding: 0px 20px;
          .category-title {
            display: block;
            line-height: 30px;
          }
        }

        .children-list {
          display: none;
          position: absolute;
          z-index: 999;
          width: 734px;
          height: 460px;
          left: 210px;
          top: 0px;

          background-color: #f7f7f7;
          border: 1px solid #ddd;

          &:extend(.clearfix);
          .children-list-item {
            float: left;
            padding: 0px 8px;
          }

        }
        .category-list-item:hover .children-list {
          display: block;
        }
      }
    }
  }
}
</style>