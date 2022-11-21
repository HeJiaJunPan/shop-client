<template>
  <div>
    <TypeNav></TypeNav>
    <div class="w main">
      <!-- 面包屑 -->
      <div class="bread clearfix">
        <h3 class="bread-title"><a href="#">全部结果</a> </h3>
        <ul class="bread-list">
          <!-- 分类面包屑 -->
          <li class="bread-item" v-if="searchParams.categoryName">
            {{searchParams.categoryName}}<span @click="removeCategoryName">x</span>
          </li>
          <!-- 关键字面包屑 -->
          <li class="bread-item" v-if="searchParams.keyword">
            {{searchParams.keyword}}<span @click="removeKeyword">x</span>
          </li>
          <!-- 品牌面包屑 -->
          <li class="bread-item" v-if="searchParams.trademark">
            {{searchParams.trademark.split(':')[1]}}}<span @click="removeTrademark">x</span>
          </li>
          <!-- 平台售卖的属性值展示面包屑 -->
          <li class="bread-item" v-for="(prop,index) in searchParams.props" :key="index">
            {{prop.split(':')[1]}}<span @click="removeAttr(index)">x</span></li>
        </ul>
      </div>
      <Selector @trademarkInfo="trademarkInfoHandle" @attrInfo="attrInfoHandle"></Selector>
      <!-- details -->
      <div class="details clearfix">
        <div class="detail-nav">
          <ul class="nav-list clearfix">
            <li :class="{active:firstOfOrder === '1'}" @click="changeOrder('1')">
              <a href="#">综合<span v-show="firstOfOrder === '1'">{{twoOfOrder}}</span></a>
            </li>
            <li >
              <a href="#">销量</a>
            </li>
            <li>
              <a href="#">新品</a>
            </li>
            <li>
              <a href="#">评价</a>
            </li>
            <li :class="{active:firstOfOrder === '2'}" @click="changeOrder('2')">
              <a href="#">价格<span v-show="firstOfOrder === '2'">{{twoOfOrder}}</span></a>
            </li>
          </ul>
        </div>
        <ul class="goods-list">
          <li class="good" v-for="good in goodsList" :key="good.id">
            <div class="img-wrap">
              <a href="javascript:;" @click="goDetail(good.id)">
                <img :src="good.defaultImg">
              </a>
            </div>
            <h4 class="price">
                <span>¥</span>{{good.price}}
              </h4>
            <div class="desc">
                <a href="" title="">{{good.title}}</a>
            </div>
            <div class="comment">
                <p>已有<span>2000</span>人评价</p>
              </div>
            <div class="operate">
              <a href="" class="button-shop">加入购物车</a>
              <a href="" class="button-star">收藏</a>
            </div>
          </li>
        </ul>
        <Pagination class="page-wrapper" :pageNo="searchParams.pageNo" :total="91 || searchList.total" :pageSize="searchParams.pageSize" :continues="5" @pageNoInfo="changePageNo"></Pagination>
<!--        <div class="page clearfix">-->
<!--          <ul class="clearfix list">-->
<!--            <li class="prev disabled">-->
<!--              <a href="#">«上一页</a>-->
<!--            </li>-->
<!--            <li class="active">-->
<!--              <a href="#">1</a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="#">2</a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="#">3</a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="#">4</a>-->
<!--            </li>-->
<!--            <li>-->
<!--              <a href="#">5</a>-->
<!--            </li>-->
<!--            <li class="dotted"><span>...</span></li>-->
<!--            <li class="next">-->
<!--              <a href="#">下一页»</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--          <div class="total">共<span>10</span>页</div>-->
<!--        </div>-->
      </div>


      <div class="hot-sale">
        <h4 class="title">热卖商品</h4>
        <ul class="hot-list">
          <li class="hot-item">
            <div class="img-wrapper">
              <a href="#"><img src="../../public/images/search/like_01.png"></a>
            </div>
            <div class="desc">
              <a href="#">Apple苹果iPhone 6s (A1699)</a>
            </div>
            <h4 class="price"><span>¥</span>4088.00</h4>
            <h4 class="commit">已有700人评价</h4>
          </li>
          <li class="hot-item">
            <div class="img-wrapper">
              <a href="#"><img src="../../public/images/search/like_01.png"></a>
            </div>
            <div class="desc">
              <a href="#">Apple苹果iPhone 6s (A1699)</a>
            </div>
            <h4 class="price"><span>¥</span>4088.00</h4>
            <h4 class="commit">已有700人评价</h4>
          </li>
          <li class="hot-item">
            <div class="img-wrapper">
              <a href="#"><img src="../../public/images/search/like_01.png"></a>
            </div>
            <div class="desc">
              <a href="#">Apple苹果iPhone 6s (A1699)</a>
            </div>
            <h4 class="price"><span>¥</span>4088.00</h4>
            <h4 class="commit">已有700人评价</h4>
          </li>
          <li class="hot-item">
            <div class="img-wrapper">
              <a href="#"><img src="../../public/images/search/like_01.png"></a>
            </div>
            <div class="desc">
              <a href="#">Apple苹果iPhone 6s (A1699)</a>
            </div>
            <h4 class="price"><span>¥</span>4088.00</h4>
            <h4 class="commit">已有700人评价</h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState, mapGetters} from 'vuex';
import Selector from '@/components/Selector';
import Pagination from '@/components/Pagination';

export default {
  name: 'Search',
  components: {Pagination, Selector},
  data() {
    return {
      searchParams: {
        category1Id: '',
        category2Id: '',
        category3Id: '',
        categoryName: '',
        keyword: '',
        order: '1:desc',
        pageNo: 1,
        pageSize: 10,
        props: [],
        trademark: ''
      },
    }
  },
  beforeMount() {
    let query = this.$route.query
    let params = this.$route.params
    Object.assign(this.searchParams, query, params)
  },
  mounted() {
    this.getData(this.searchParams)
  },
  computed: {
    ...mapState('search', ['searchList']),
    ...mapGetters('search' ,['goodsList']),
    firstOfOrder() {
      return this.searchParams.order.split(':')[0]
    },
    twoOfOrder() {
      if (this.searchParams.order.split(':')[1] === 'desc') {
        return '⬇'
      } else {
        return '⬆'
      }
    }
  },
  methods: {
    ...mapActions('search', ['getSearchList']),
    getData(params) {
      this.getSearchList(params)
    },
    removeCategoryName(event) {
      // 1. 删除分类名后，搜索信息里面同分类相关的值清空
      this.searchParams.categoryName = undefined
      this.searchParams.category1Id = undefined
      this.searchParams.category2Id = undefined
      this.searchParams.category3Id = undefined
      // 2. 重新请求数据
      this.getData(this.searchParams)
      // 3. 通过重定向，实现地址栏url变化
      this.$router.push({
        name: 'search',
        params: this.$route.params
      })
    },
    removeKeyword(event) {
      // 修改搜索信息
      this.searchParams.keyword = undefined
      // 重新请求数据
      this.getData(this.searchParams)
      // 清空搜索栏
      this.$bus.$emit('clear')
      // 修改地址栏信息
      this.$router.push({
        name: 'search',
        query: this.$route.query
      })
    },
    trademarkInfoHandle(trademark, event) {
      this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`
      this.getData(this.searchParams)
    },
    removeTrademark(event) {
      this.searchParams.trademark = undefined
      this.getData(this.searchParams)
    },
    attrInfoHandle(attr, attrValue, event) {
      let prop = `${attr.attrId}:${attrValue}:${attr.attrName}`
      if (this.searchParams.props.indexOf(prop) === -1) {
        this.searchParams.props.push(prop)
        this.getData(this.searchParams)
      }
    },
    removeAttr(index, event) {
      console.log(index, this.searchParams.props)
      this.searchParams.props.splice(index, 1)
      console.log(this.searchParams.props)
      this.getData(this.searchParams)
    },
    changeOrder(flag, event) {
      let newOrder;
      if (this.searchParams.order.split(':')[0] === flag) {
        newOrder = `${flag}:${this.searchParams.order.split(':')[1] === 'desc' ? 'asc':'desc'}`
      } else {
        newOrder = `${flag}:desc`
      }
      this.searchParams.order = newOrder
      this.getData(this.searchParams)
    },
    changePageNo(pageNo, event) {
      this.searchParams.pageNo = pageNo
      this.getData(this.searchParams)
    },
    goDetail(productId, event) {
      this.$router.push({
        name: 'detail',
        params: {
          productId: productId
        }
      })
    }
  },
  watch: {
    $route(newValue, oldValue) {
      Object.assign(this.searchParams, this.$route.query, this.$route.params)
      this.getData(this.searchParams)
      this.searchParams.category1Id = undefined
      this.searchParams.category2Id = undefined
      this.searchParams.category3Id = undefined
    }
  }
}
</script>

<style scoped lang="less">
.bread {
  margin: 5px 0px 18px;
  line-height: 18px;
  .bread-title {
    float: left;
    padding: 0px 15px;
    a {
      text-decoration: none;
      color: #666666;
      font-size: 12px;
    }
  }
  .bread-list {
    float: left;
    .bread-item {
      float: left;
      padding: 0px 7px;
      font-size: 12px;
      background-color: #f7f7f7;
      margin-right: 5px;
      span {
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }
}

.details {
  margin-bottom: 5px;
  .detail-nav {
    border: 1px solid #e2e2e2;
    background-color: #fbfbfb;
    li {
      float: left;
      a {
        text-decoration: none;
        color: #777;
        display: block;
        padding: 11px 15px;
        cursor: pointer;
      }
    }
    .active {
      background-color: #e1251b;
      a {
        color: #FFFFFF;
      }
    }
  }
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0px;
    .good {
      width: 20%;
      margin-top: 10px;
      line-height: 28px;
      .img-wrap {
        padding-left: 15px;
        width: 215px;
        height: 225px;
        margin-bottom: 8px;
        img {
          width: 100%;
        }
      }
      .price {
        padding-left: 15px;
        font-size: 18px;
        color: #c81623;
      }
      .desc {
        padding-left: 15px;
        width: 85%;
        margin-bottom: 8px;
        min-height: 38px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        a {
          color: #333;
          text-decoration: none;
        }
      }
      .comment {
        padding-left: 15px;
        font-size: 13px;
        color: #a7a7a7;
        span {
          color: #646fb0;
          font-weight: 700;
        }
      }
      .operate {
        padding: 12px 15px;
        a {
          text-decoration: none;
          display: inline-block;
          box-sizing: border-box;
          margin-right: 15px;
          padding: 2px 14px;
          min-width: 85px;
          font-size: 12px;
          line-height: 18px;
          text-align: center;
        }
        .button-shop {
          border: 1px solid #e1251b;
          color: #e1251b;
        }
        .button-star {
          border: 1px solid #8c8c8c;
          color: #8c8c8c;
        }
      }
    }
  }
  .page {
    width: 733px;
    height: 66px;
    margin: 18px 0px;
    float: right;

    .list {
      width: 490px;
      float: left;
      li {
        float: left;
        line-height: 18px;
        font-size: 14px;
        border: 1px solid #e0e9ee;
        background-color: #fff;
        padding: 9px 18px;
        margin-left: 1px;
        a {
          line-height: 18px;
          text-decoration: none;
          color: #333;
        }
      }
      .active {
        border: none;
        a {
          color: #e1251b;
        }
      }
      .dotted {
        border: none;
      }
      .prev,.next {
        background-color: #fafafa;
      }
      .disabled {
        a {
          color: #999;
        }
      }
    }
    .total {
      float: left;
      line-height: 18px;
      font-size: 14px;
      padding: 9px 0px;
    }

  }
  .page-wrapper {
    float: right;
    margin: 18px 0px;
  }

}

.hot-sale {
  margin-bottom: 5px;
  border: 1px solid #ddd;
  .title {
    padding: 5px 0px 5px 15px;
    background-color: #f1f1f1;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
    color: #333;
  }
  .hot-list {
    display: flex;
    padding: 15px;
    .hot-item {
      width: 25%;
      padding-left: 15px;

      .img-wrapper {
      }
      .desc {
        width: 85%;
        min-height: 38px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 8px;
        a {
          text-decoration: none;
          color: #333;
        }
      }
      .price {
        font-size: 18px;
        color: #c81623;
      }
      .commit {
        height: 22px;
        font-size: 13px;
        color: #a7a7a7;
      }
    }
  }
}
</style>