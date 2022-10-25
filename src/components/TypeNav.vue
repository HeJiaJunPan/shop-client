<template>
<div class="type-nav">
  <div class="nav-container w">
    <ul class="nav-list clearfix">
      <li class="all-shop" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <h2>全部商品分类</h2>
        <ul class="category-list" @click="goSearch" v-show="isShow">
          <li class="category-list-item" v-for="category in categoryList.slice(0,15)" :key="category.categoryId">
            <a href="" class="category-title" :data-categoryName="category.categoryName" :data-category1Id="category.categoryId">{{category.categoryName}}</a>
            <ul class="children-list">
              <li class="level-two clearfix" v-for="categoryChild in category.categoryChild" :key="categoryChild.categoryId">
                  <h4 class="level-two-title">
                    <a href="" :data-categoryName="categoryChild.categoryName" :data-category2Id="categoryChild.categoryId">
                      {{categoryChild.categoryName}}
                    </a>
                  </h4>
                <ul class="level-three clearfix">
                    <li class="children-list-item" v-for="c in categoryChild.categoryChild" :key="c.categoryId">
                      <a href="" :data-categoryName="c.categoryName" :data-category3Id="c.categoryId">{{c.categoryName}}</a>
                    </li>
                  </ul>
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
import {mapState, mapActions} from 'vuex'
export default {
  name: 'TypeNav',
  data() {
    return {
      isShow: true
    }
  },
  mounted() {
    if (this.$route.path != '/') {
      this.isShow = false
    }
    //this.$store.dispatch('home/getCategoryList')
    this.getCategoryList()
  },
  computed: {
    ...mapState('home', ['categoryList'])
  },
  methods: {
    ...mapActions('home', {
      getCategoryList: 'getCategoryList'
    }),
    goSearch(event) {
      let node = event.target;
      let {categoryname, category1id, category2id, category3id} = node.dataset
      if (categoryname) {
        let location = {name: 'search'}
        let query = {categoryName: categoryname}
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }

        if (this.$route.params) {
          location.params = this.$route.params
        }
        location.query = query
        this.$router.push(location)
      }
    },
    mouseEnter(event) {
      if (this.$route.path != '/') {
        this.isShow = true
      }
    },
    mouseLeave(event) {
      if (this.$route.path != '/') {
        this.isShow = false
      }
    }
  }
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

          .level-two {
            font-size: 12px;
            line-height: 22px;
            .level-two-title {
              color: #333;
              padding-right: 6px;
              width: 54px;
              //float: left;
            }

            .level-three {
              //float: left;
              .children-list-item {
                float: left;
                padding: 0px 8px;
              }
            }
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