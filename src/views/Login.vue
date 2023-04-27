<template>
<div class="login-container">
  <div class="wrapper w clearfix">
    <div class="login-box">
      <div class="tab-container clearfix">
        <div class="tab">扫描登录</div>
        <div class="tab active">账户登录</div>
      </div>
      <div class="content">
        <div id="form">
          <div class="input-box clearfix">
            <span class="icon"></span>
            <input type="text" name="username" v-model="phone">
            <span class="error-message">错误提示信息</span>
          </div>
          <div class="input-box clearfix">
            <span class="icon"></span>
            <input type="text" name="password" v-model="password">
            <span class="error-message">错误提示信息</span>
          </div>
          <div class="setting clearfix">
            <div class="remember">
              <input type="checkbox" name="remember" >
              <label>自动登录</label>
            </div>
            <span class="forget">忘记密码？</span>
          </div>
          <button @click="login">登  录</button>
        </div>
        <div class="call clearfix">
          <ul class="third-service clearfix">
            <li class="item">
              <img src="../../public/images/login/qq.png">
            </li>
            <li class="item">
              <img src="../../public/images/login/sina.png">
            </li>
            <li class="item">
              <img src="../../public/images/login/ali.png">
            </li>
            <li class="item">
              <img src="../../public/images/login/weixin.png">
            </li>
          </ul>
          <div class="register">立即注册</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "Login",
  data() {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', ['userLogin']),
    async login() {
      try {
        await this.userLogin({
          phone: this.phone,
          password: this.password
        })
        // 重定向到首页或原先页面
        let toPath = this.$route.query.redirect || '/'
        this.$router.push(toPath)
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  height: 487px;
  background-color: #e93854;

  .wrapper {
    height: 100%;
    background-image: url("../../public/images/login/loginbg.png");
    background-repeat: no-repeat;
    position: relative;
  }

  .login-box {
    float: right;
    position: relative;
    box-sizing: border-box;
    width: 420px;
    height: 406px;
    padding: 20px;
    background-color: #fff;
    top: 45px;

    .tab-container {
      .tab {
        float: left;
        box-sizing: border-box;
        width: 50%;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        border: 1px solid #ddd;
      }
      .active {
        color: #e1251b;
        border-bottom: none;
        border-top: 1px solid #28a3ef;
      }
    }
    .content {
      box-sizing: border-box;
      width: 100%;
      height: 316px;
      padding: 18px;
      border: 1px solid #ddd;
      border-top: none;

      #form {
        margin: 15px 0px 18px 0px;
        font-size: 12px;
        line-height: 18px;

        .input-box {
          position: relative;
          margin-bottom: 22px;
          .icon {
            float: left;
            box-sizing: border-box;
            width: 37px;
            height: 32px;
            border: 1px solid #ddd;
            background-image: url("../../public/images/login/icons.png");
            background-position: -10px -201px;
          }
          input {
            box-sizing: border-box;
            width: 302px;
            height: 32px;
            padding: 6px 8px;
            border: 1px solid #ddd;
            border-left: none;
            outline: none;

            float: left;
          }
          .error-message {
            position: absolute;
            top: 100%;
            left: 37px;
            color: red;
          }
          &:nth-of-type(2) {
            .icon {
              background-position: -72px -201px;
            }
          }
        }
        .setting {
          .remember {
            float: left;
            input {
              vertical-align: middle;
            }
          }
          .forget {
            float: right;
          }
        }
        button {
          width: 100%;
          height: 36px;
          margin-top: 25px;
          padding: 6px;
          border: 1px solid #e1251b;
          background-color: #e1251b;
          color: #fff;
          font-size: 16px;
        }

      }
      .call {
        margin-top: 30px;
        .third-service {
          float: left;
          .item {
            float: left;
            margin-right: 5px;
          }
        }

        .register {
          float: right;
          font-size: 15px;
          line-height: 38px;
        }
      }
    }
  }
}
</style>