<template>
  <!-- header外部容器 -->
  <div class="header">
    <!-- header-top外部容器 -->
    <div class="header-top">
      <!-- header-top内容容器 -->
      <div class="header-top-container w clearfix">
        <!--  登录信息 -->
        <ul class="login-info">
          <p>尚品汇欢迎您！</p>
          <li>
            <a href="#">请 登录</a>
          </li>
          <li>
            <a href="#">免费注册</a>
          </li>
        </ul>

        <ul class="type-list">
          <li>
            <a href="#">我的订单</a>
          </li>
          <li>
            <a href="#">我的购物车</a>
          </li>
          <li>
            <a href="#">我的尚品汇</a>
          </li>
          <li>
            <a href="#">尚品汇会员</a>
          </li>
          <li>
            <a href="#">企业采购</a>
          </li>
          <li>
            <a href="#">关注尚品汇</a>
          </li>
          <li>
            <a href="#">合作招商</a>
          </li>
          <li>
            <a href="#">商家后台</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- header搜索区域 -->
    <div class="header-search-container w clearfix">
      <div class="logo">
        <a href="#">
          <img src="../assets/images/header/logo.png" alt="尚品汇">
        </a>
      </div>

      <div class="search">
        <form action="#" class="search-form">
          <input type="text" name="keyword" class="search-input" v-model="keyword">
          <button type="button" name="submit" value="submit" class="search-button" @click="goSearch">搜索</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      keyword: ''
    }
  },
  mounted() {
    this.$bus.$on('clear',() => {
      this.keyword = ''
    })
  },
  methods: {
    goSearch(event) {
      console.log(this.keyword)
      let location = {
        name: 'search',
        params: {
          keyword: this.keyword || undefined
        }
      }
      if (this.$route.query) {
        location.query = this.$route.query
      }
      console.log(location)
      this.$router.push(location)
    }
  }
}
</script>

<style scoped lang="less">
.header {
  .header-top {
    background-color: #EAEAEA;
    .header-top-container {
      height: 30px;
      line-height: 30px;

      .login-info {
        float: left;

        p {
          float: left;
        }
      }

      .type-list {
        float: right;
      }

      li {
        float: left;
      }

      a {
        color: #333;
        text-decoration: none;
        padding: 0px 10px;
      }

      ul li:not(:first-of-type) a {
        border-left: 1px solid #b3aeae;
      }
    }

  }

  .header-search-container {
    height: 106px;

    .logo {
      float: left;
      overflow: hidden;

      img {
        width: 175px;
        margin: 25px 45px;
      }
    }

    .search {
      float: right;

      .search-form {
        margin-top: 35px;
      }

      .search-input {
        box-sizing: border-box;
        width: 490px;
        height: 32px;
        padding: 0px 4px;
        border: 2px solid #ea4a36;
      }

      .search-input:focus {
        outline: none;
      }

      .search-button {
        width: 68px;
        height: 32px;
        border: none;
        background-color: #ea4a36;
        color: #FFFFFF;
        vertical-align: top;
      }
    }
  }

}

</style>