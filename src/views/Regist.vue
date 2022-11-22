<template>
<div class="container w">
  <div class="title-wrapper clearfix">
    <h3 class="title">注册新用户</h3>
    <div class="go">我有账号，去 <a href="">登录</a></div>
  </div>
  <div class="regist-box">
    <div class="form-item">
      <label>手机号:</label>
      <input type="text" name="photo" placeholder="请输入手机号码">
      <span class="error">错误提示信息</span>
    </div>
    <div class="form-item">
      <label>验证码:</label>
      <input type="text" name="code" placeholder="请输入验证码">
      <img src="" alt="code">
      <span class="error">错误提示信息</span>
    </div>
    <div class="form-item">
      <label>登录密码:</label>
      <input type="text" name="password" placeholder="请输入密码">
      <span class="error">错误提示信息</span>
    </div>
    <div class="form-item">
      <label>确认密码:</label>
      <input type="text" name="pwd" placeholder="请再次确认密码">
      <span class="error">错误提示信息</span>
    </div>
    <div class="controls">
      <input type="checkbox" name="agree">
      <span class="agree">同意协议并注册《尚品汇用户协议》</span>
      <span class="error">错误提示信息</span>
    </div>
    <div class="button">完成注册</div>
  </div>
</div>
</template>

<script>
export default {
  name: "Regist"
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