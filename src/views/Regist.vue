<template>
<div class="container w">
  <div class="title-wrapper clearfix">
    <h3 class="title">注册新用户</h3>
    <div class="go">我有账号，去 <a href="">登录</a></div>
  </div>
  <div class="regist-box">
    <div class="form-item">
      <label>手机号:</label>
      <input type="text" name="photo" v-model="phone" placeholder="请输入手机号码">
      <span class="error">错误提示信息</span>
    </div>
    <div class="form-item">
      <label>验证码:</label>
      <input type="text" name="code" v-model="code" placeholder="请输入验证码">
      <button @click="getCodeByPhone">获取验证码</button>
      <span class="error">错误提示信息</span>
    </div>
    <div class="form-item">
      <label>登录密码:</label>
      <input type="text" name="password" v-model="password" placeholder="请输入密码">
      <span class="error">错误提示信息</span>
    </div>
    <div class="form-item">
      <label>确认密码:</label>
      <input type="text" name="pwd" v-model="pwd" placeholder="请再次确认密码">
      <span class="error">错误提示信息</span>
    </div>
    <div class="controls">
      <input type="checkbox" name="agree" v-model="agree">
      <span class="agree">同意协议并注册《尚品汇用户协议》</span>
      <span class="error">错误提示信息</span>
    </div>
    <div class="button" @click="regist">完成注册</div>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "Regist",
  data() {
    return {
      'phone': '',
      'code': '',
      'password': '',
      'pwd': '',
      'agree': false
    }
  },
  methods: {
    ...mapActions('user', ['getCode', 'userRegister']),
    async getCodeByPhone() {
      try {
        let code = await this.getCode(this.phone)
        this.code = this.$store.state.user.code
      } catch (error) {
        console.log(error)
      }
    },
    async regist() {
      console.log('--------------')
      try {
        let {phone, code, password} = this
        await this.userRegister({
          phone,
          code,
          password
        })
        this.$router.push('/login')
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>

<style scoped lang="less">
.container {
  height: 445px;
  border: 1px solid #dfdfdf;
  .title-wrapper {
    padding: 6px 15px;
    border-bottom: 1px solid #dfdfdf;
    background-color: #ececec;
    color: #333;
    font-size: 20px;
    line-height: 30px;

    h3 {
      float: left;
    }
    .go {
      float: right;
      font-size: 14px;

      a {
        text-decoration: none;
        color: #e1251b;
      }
    }
  }
  .regist-box {
    .form-item {
      position: relative;
      padding-left: 390px;
      margin-bottom: 18px;
      &:first-of-type {
        margin-top: 40px;
      }

      label {
        display: inline-block;
        width: 96px;
        text-align: right;
        font-size: 14px;
      }
      input {
        box-sizing: border-box;
        width: 270px;
        height: 38px;
        padding-left: 8px;
        margin-left: 5px;
        border: 1px solid #999;
        outline: none;
      }
      .error {
        position: absolute;
        top: 100%;
        left: 491px;
        color: red;
      }
    }
    .controls {
      position: relative;
      input {
        vertical-align: middle;
        margin-left: 491px;
      }
      .agree {
        text-align: center;
      }
      .error {
        position: absolute;
        top: 100%;
        left: 491px;
        color: red;
      }
    }
    .button {
      box-sizing: border-box;
      margin: 17px 0px 0px 491px;
      width: 270px;
      height: 36px;
      background-color: #e1251b;
      color: #fff;
      font-size: 16px;
      line-height: 36px;
      text-align: center;
    }
  }
}
</style>