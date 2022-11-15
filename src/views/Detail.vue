<template>
<div class="detail-container">
  <TypeNav></TypeNav>
  <div class="w">
    <!-- 商品内容区 -->
    <div class="main">
      <!-- 路径导航 -->
      <div class="path-nav">
        <a href="#">{{categoryView.category1Name}}</a>
        <a href="#">{{categoryView.category2Name}}</a>
        <a href="#">{{categoryView.category3Name}}</a>
      </div>
      <!-- 商品内容 -->
      <div class="main-content clearfix">
        <!-- 图片区域 -->
          <div class="img-wrapper">
            <Zoom :skuImageList="skuImageList"></Zoom>
            <ImageList :skuImageList="skuImageList"></ImageList>
          </div>
        <!-- 文字区域 -->
        <div class="info-wrapper">
          <div class="good-detail">
            <h3 class="sku-name">{{skuInfo.skuName}}</h3>
            <p class="news">{{skuInfo.skuDesc}}</p>
            <div class="priceAreal">
              <div class="priceAreal-one clearfix">
                <div class="title">价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</div>
                <div class="price">
                  <span class="price-unit">¥</span>
                  <span class="price-value">{{skuInfo.price}}</span>
                  <span class="price-additional">降价通知</span>
                </div>
                <div class="remark">
                  <span class="remark-title">累计评价</span>
                  <span class="remark-value">65545</span>
                </div>
              </div>
              <div class="priceAreal-two clearfix">
                <div class="title">促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</div>
                <div class="text">
                  <span class="text-big">加价购</span>
                  <span class="text-normal">满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换购热销商品</span>
                </div>
              </div>
            </div>
            <div class="support">
              <div class="supportAreal clearfix">
                <div class="support-title">支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</div>
                <div class="support-content">以旧换新，闲置手机回收 4G套餐超值抢 礼品购</div>
              </div>
              <div class="supportAreal clearfix">
                <div class="support-title">配 送 至</div>
                <div class="support-content">广东省 深圳市 宝安区</div>
              </div>
            </div>
          </div>
          <div class="choose">
            <div class="selectAreal">
              <div class="choosed">
                <div class="choosed-item">金色<span>X</span></div>
              </div>
              <dl class="select-item clearfix" v-for="spuSaleAttr in spuSaleAttrList" :key="spuSaleAttr.id">
                <dt>{{spuSaleAttr.saleAttrName}}</dt>
                <dd
                    v-for="spuSaleAttrValue in spuSaleAttr.spuSaleAttrValueList"
                    :key="spuSaleAttrValue.id"
                    :class="{active: spuSaleAttrValue.isChecked == 1}"
                    @click="changeActive(spuSaleAttrValue, spuSaleAttr.spuSaleAttrValueList)"
                >
                  {{spuSaleAttrValue.saleAttrValueName}}
                </dd>
              </dl>
            </div>
            <div class="shop-cart clearfix">
              <div class="controls">
                <input autocomplete="off" value="1">
                <a href="" class="plus">+</a>
                <a href="" class="reduce">-</a>
              </div>
              <div class="cart">
                <a href="#">加入购物车</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品详情 -->
    <div class="product-detail clearfix">
      <div class="aside">
        <div class="tab-wrapper clearfix">
          <h4 class="active">相关分类</h4>
          <h4>推荐品牌</h4>
        </div>
        <div class="tab-content">
          <div class="tab-pane active">
            <ul class="part-list clearfix">
              <li>手机</li>
              <li>手机壳</li>
              <li>内存卡</li>
              <li>Iphone配件</li>
              <li>贴膜</li>
              <li>手机耳机</li>
              <li>移动电源</li>
              <li>平板电脑</li>
            </ul>
            <ul class="good-list">
              <li class="good">
                <div class="good-img">
                  <img src="../../public/images/detail/part01.png">
                </div>
                <div class="good-attr">Apple苹果iPhone 6s (A1699) </div>
                <div class="good-price"><span>¥</span>6088.00</div>
                <div class="add">
                  <a href="#">加入购物车</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="tab-pane">
            <p>推荐品牌</p>
          </div>
        </div>
      </div>
      <div class="detail">
        <div class="fitting ">
          <div class="title">选择搭配</div>
          <div class="good-suits clearfix">
            <div class="master">
              <img src="../../public/images/detail/l-m01.png">
              <p>￥5299</p>
              <span>+</span>
            </div>
            <ul class="suits clearfix">
              <li class="suit">
                <img src="../../public/images/detail/dp01.png">
                <p>Feless费勒斯VR</p>
                <div>
                  <input type="checkbox" value="39">
                  <span>39</span>
                </div>
              </li>
              <li class="suit">
                <img src="../../public/images/detail/dp01.png">
                <p>Feless费勒斯VR</p>
                <div>
                  <input type="checkbox" value="39">
                  <span>39</span>
                </div>
              </li>
              <li class="suit">
                <img src="../../public/images/detail/dp01.png">
                <p>Feless费勒斯VR</p>
                <div>
                  <input type="checkbox" value="39">
                  <span>39</span>
                </div>
              </li>
              <li class="suit">
                <img src="../../public/images/detail/dp01.png">
                <p>Feless费勒斯VR</p>
                <div>
                  <input type="checkbox" value="39">
                  <span>39</span>
                </div>
              </li>
            </ul>
            <div class="result">
              <div class="num">已选购0件商品</div>
              <div class="price-tit">套餐价</div>
              <div class="price">¥5299</div>
              <button class="addshopcar">加入购物车</button>
            </div>
          </div>
        </div>
        <div class="intro">
          <ul class="tab-wrapper clearfix">
            <li class="tab active">
              <a href="#">商品介绍</a>
            </li>
            <li class="tab">
              <a href="#">商品介绍</a>
            </li>
            <li class="tab">
              <a href="#">商品介绍</a>
            </li>
            <li class="tab">
              <a href="#">商品介绍</a>
            </li>
            <li class="tab">
              <a href="#">商品介绍</a>
            </li>
          </ul>
          <div class="tab-content"></div>
        </div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="like">
      <h4 class="title">猜你喜欢</h4>
      <ul class="like-list">
        <li class="like-item">
          <div class="p-img">
            <img src="../../public/images/detail/itemlike01.png">
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <span>¥</span>3699.00
          </div>
          <div class="commit">已有6人评价</div>
        </li>
        <li class="like-item">
          <div class="p-img">
            <img src="../../public/images/detail/itemlike01.png">
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <span>¥</span>3699.00
          </div>
          <div class="commit">已有6人评价</div>
        </li>
        <li class="like-item">
          <div class="p-img">
            <img src="../../public/images/detail/itemlike01.png">
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <span>¥</span>3699.00
          </div>
          <div class="commit">已有6人评价</div>
        </li>
        <li class="like-item">
          <div class="p-img">
            <img src="../../public/images/detail/itemlike01.png">
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <span>¥</span>3699.00
          </div>
          <div class="commit">已有6人评价</div>
        </li>
        <li class="like-item">
          <div class="p-img">
            <img src="../../public/images/detail/itemlike01.png">
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <span>¥</span>3699.00
          </div>
          <div class="commit">已有6人评价</div>
        </li>
        <li class="like-item">
          <div class="p-img">
            <img src="../../public/images/detail/itemlike01.png">
          </div>
          <div class="attr">
            <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
          </div>
          <div class="price">
            <span>¥</span>3699.00
          </div>
          <div class="commit">已有6人评价</div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import ImageList from '@/components/ImageList';
import Zoom from '@/components/Zoom';

export default {
  name: "Detail",
  components: {Zoom, ImageList},
  mounted() {
    this.getGoodInfo(this.$route.params.productId)
  },
  computed: {
    ...mapGetters('detail', ['categoryView', 'skuInfo', 'skuImageList', 'spuSaleAttrList'])
  },
  methods: {
    ...mapActions('detail', ['getGoodInfo']),
    changeActive(spuSaleAttrValue, spuSaleAttrValueList) {
      spuSaleAttrValueList.forEach((item) => {
        item.isChecked = 0
      })
      spuSaleAttrValue.isChecked = 1
    }
  }
}
</script>

<style scoped lang="less">
.main {
  margin-top: 15px;
  .path-nav {
    padding: 9px 15px 9px 0px;

    a {
      text-decoration: none;
      color: #666;
      &:not(:first-of-type)::before {
        content: '/';
        padding: 0px 5px;
        color: #ccc;
      }
    }
  }

  .main-content {
    margin: 5px 0px 15px 0px;
    overflow: hidden;

    .img-wrapper {
      float: left;
    }
    .info-wrapper {
      float: right;
      width: 700px;
      .good-detail {
        .sku-name {
          font-size: 14px;
          line-height: 21px;
          margin-top: 15px;
        }
        .news {
          color: #e12228;
          margin-top: 15px;
        }
        .priceAreal {
          background-color: #fee9eb;
          padding: 7px;
          margin: 13px 0px;

          .priceAreal-one {
            margin-top: 10px;
            line-height: 28px;
            .title {
              float: left;
              margin-right: 15px;
            }
            .price {
              color: #c81623;
              float: left;
              .price-unit {
                font-size: 16px;
              }
              .price-value {
                font-size: 24px;
                font-weight: 700;
              }
              .price-additional {
                font-size: 12px;
              }
            }
            .remark {
              float: right;
            }
          }
          .priceAreal-two {
            margin-top: 10px;
            line-height: 28px;
            .title {
              float: left;
              margin-right: 15px;
            }
            .text {
              float: left;
              width: 520px;
              .text-big {
                background-color: #c81623;
                color: #fff;
                padding: 3px;
              }
              .text-normal {
                color: #999;
              }
            }
          }
        }
        .support {
          border-bottom: 1px solid #ededed;
          padding-bottom: 5px;
          .supportAreal {
            margin-top: 10px;
            line-height: 28px;
            .support-title {
              float: left;
              margin-right: 15px;
            }
            .support-content {
              float: left;
              width: 520px;
              color: #999;
            }
          }
        }
      }
      .choose {
        .selectAreal {
          margin-top: 10px;
          line-height: 28px;
          .choosed {
            .choosed-item {
              display: inline-block;
              height: 30px;
              line-height: 30px;
              border: 1px solid #ddd;
              padding: 0px 20px;
              margin-right: 20px;
              background-color: snow;
              span {
                font-size: 12px;
                color: red;
                margin-left: 20px;
                cursor: pointer;
              }
            }
          }
          .select-item {
            margin: 13px 0px;
            dt {
              float: left;
              margin-right: 15px;
            }
            dd {
              float: left;
              margin-right: 5px;
              line-height: 24px;
              padding: 2px 14px;
              border-top: 1px solid #eee;
              border-right: 1px solid #bbb;
              border-bottom: 1px solid #eee;
              border-left: 1px solid #bbb;
            }
            .active {
              color: green;
              border: 1px solid green;
            }

          }
        }
        .shop-cart {
          .controls {
            float: left;
            width: 48px;
            margin-right: 15px;
            position: relative;
            input {
              width: 38px;
              height: 37px;
              border: 1px solid #ddd;
              border-right: 0;
              color: #555;
              text-align: center;
              padding: 0px;
            }
            .plus {
              position: absolute;
              top: 0px;
              right: -8px;
              width: 15px;
              height: 17px;
              line-height: 17px;
              text-align: center;
              border: 1px solid #ccc;
              background-color: #f1f1f1;
              color: #666;
              text-decoration: none;
            }
            .reduce {
              position: absolute;
              top: 19px;
              right: -8px;
              width: 15px;
              height: 17px;
              line-height: 17px;
              text-align: center;
              border: 1px solid #ccc;
              background-color: #f1f1f1;
              color: #666;
              text-decoration: none;
            }
          }
          .cart {
            float: left;
            a {
              display: block;
              height: 37px;
              line-height: 37px;
              background-color: #e1251b;
              padding: 0px 25px;
              font-size: 16px;
              color: #fff;
              text-align: center;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
.product-detail {
  margin-top: 30px;
  .aside {
    float: left;
    width: 210px;
    border: 1px solid #ccc;
    .tab-wrapper {
      height: 40px;
      h4 {
        float: left;
        width: 105px;
        border-top: 3px solid #fff;
        border-bottom: 1px solid #ccc;
        line-height: 36px;
        text-align: center;
        font-weight: 700;
      }
      .active {
        border-top: 3px solid #e1251b;
        border-bottom: 0px;
        font-weight: normal;
      }
    }
    .tab-content {
      padding: 10px;
      .tab-pane {
        display: none;
        .part-list {
          li {
            float: left;
            width: 50%;
            line-height: 28px;
            border-bottom: 1px dashed #ededed;
            text-align: center;
          }
        }
        .good-list {
          .good {
            margin: 5px 0px 15px 0px;
            padding-bottom: 5px;
            border-bottom: 1px solid #ededed;
            .good-img {
              text-align: center;
              img {
                width: 152px;
              }
            }
            .good-price {
              font-size: 16px;
              color: #c81623;
            }
            .add {
              margin: 5px 0px;
              text-align: center;
              a {
                display: inline-block;
                padding: 2px 14px;
                border: 1px solid #8c8c8c;
                text-decoration: none;
                color: #8c8c8c;
                background-color: transparent;
                line-height: 18px;
              }
            }
          }
        }
      }
      .active {
        display: block;
      }
    }
  }
  .detail {
    float: right;
    width: 980px;
    .fitting {
      border: 1px solid #ddd;
      margin-bottom: 15px;
      .title {
        background-color: #f1f1f1;
        border-bottom: 1px solid #ddd;
        color: #333;
        padding: 5px 0px 5px 15px;
      }
      .good-suits {
        height: 170px;
        padding-top: 10px;
        .master {
          float: left;
          position: relative;
          width: 127px;
          height: 165px;
          text-align: center;
          img {
            width: 87px;
          }
          p {
            color: #c81623;
            font-size: 16px;
            font-weight: 700;
          }
          span {
            position: absolute;
            top: 48px;
            right: -25px;
            font-size: 16px;
          }
        }
        .suits {
          float: left;
          width: 668px;
          height: 165px;
          .suit {
            float: left;
            width: 127px;
            padding: 0px 20px;
            text-align: center;
            img {
              width: 120px;
              height: 130px;
            }
            p {
              font-size: 12px;
            }
            input {
              vertical-align: middle;
            }
            span {
              vertical-align: middle;
            }
          }
        }
        .result {
          float: left;
          width: 153px;
          height: 165px;
          border-left: 1px solid #ddd;
          padding-left: 20px;
          .num {
            font-size: 14px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .price-tit {
            font-weight: bold;
            margin-bottom: 10px;
          }
          .price {
            font-size: 16px;
            color: #B1191A;
            margin-bottom: 10px;
          }
          .addshopcar {
            font-size: 16px;
            color: #fff;
            background-color: #e1251b;
            border: 1px solid #e1251b;
            padding: 10px 25px;
          }
        }
      }
    }
    .intro {
      .tab-wrapper {
        width: 100%;
        background-color: #ededed;
        li {
          float: left;
          a {
            color: #666;
            display: block;
            text-align: center;
            text-decoration: none;
            height: 40px;
            line-height: 40px;
            border-top: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            padding: 0px 11px;
          }
        }
        .active {
          a {
            color: #fff;
            background-color: #e1251b;
          }
        }
      }
    }
  }
}
.like {
  margin: 15px 0px;
  border: 1px solid #ddd;
  .title {
    color: #333;
    background-color: #f1f1f1;
    border-bottom: 1px solid #ddd;
    padding: 5px 10px;
  }
  .like-list {
    padding: 15px 11px;
    display: flex;
    .like-item {
      width: (1/6)*100%;
      .p-img {
        text-align: center;
        img {
          width: 167px;
          height: 123px;
        }
      }
      .attr {
        padding: 0px 15px;
      }
      .price {
        padding: 0px 15px;
        color: #c81623;
        font-size: 16px;
        margin-bottom: 20px;
      }
      .commit {
        padding: 0px 15px;
      }
    }
  }
}
</style>