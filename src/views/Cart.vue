<template>
<div class="container">
  <TypeNav></TypeNav>
  <div class="cart w">
    <h4>全部商品</h4>
    <div class="cart-main">
      <ul class="cart-head">
        <li class="head-1">全部</li>
        <li class="head-2">商品</li>
        <li class="head-3">单价（元）</li>
        <li class="head-4">数量</li>
        <li class="head-5">小计（元）</li>
        <li class="head-6">操作</li>
      </ul>
      <ul class="cart-body">
        <li class="cart-item" v-for="(cart,index) in cartInfoList" :key="index">
          <div class="cart-item-col-1">
            <input type="checkbox" name="checkList" v-model="cart.isChecked" @change="updateCheckStatusById(cart, $event)">
          </div>
          <div class="cart-item-col-2">
            <img :src="cart.imgUrl">
            <div class="cart-desc">{{cart.skuName}}</div>
          </div>
          <div class="cart-item-col-4">{{cart.skuPrice}}</div>
          <div class="cart-item-col-5">
            <a href="javascript:;" class="reduce" @click="updateCartNum('minus', cart, -1, $event)">-</a>
            <input type="text" :value="cart.skuNum" @change="updateCartNum('change', cart, 0, $event)">
            <a href="javascript:;" class="plus" @click="updateCartNum('add', cart, 1, $event)">+</a>
          </div>
          <div class="cart-item-col-6">{{cart.skuNum * cart.skuPrice}}</div>
          <div class="cart-item-col-7">
            <a href="javascript:;" @click="deleteCartByCartId(cart.skuId)">删除</a>
            <br>
            <a href="">移到收藏</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-tool clearfix">
      <div class="all">
        <input type="checkbox" :checked="isChosedAll" @change="updateAllStatus">
        <label>全选</label>
      </div>
      <div class="option">
        <a href="javascript:;" @click="deleteAllByChoosed">删除选中的商品</a>
        <a href="javascript:;">移到我的关注</a>
        <a href="javascript:;">清除下柜商品</a>
      </div>
      <div class="money-box clearfix">
        <div class="choosed">
          已选择<span>{{selectTotal}}</span>件商品
        </div>
        <div class="totalPrice">
          总价（不含运费） ：<span>{{totalPrice}}</span>
        </div>
        <div class="submit">
          <a href="javascript:;">结算</a>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>

import {mapActions, mapGetters} from 'vuex';

export default {
  name: "Cart",
  mounted() {
    this.getCartList()
  },
  computed: {
    ...mapGetters('cart', ['cartInfoList']),
    totalPrice() {
      let total = 0
      this.cartInfoList.forEach((cart) => {
        total = total + cart.skuNum * cart.skuPrice
      })
      return total
    },
    selectTotal() {
      return this.cartInfoList.filter((cart) => {
        return cart.isChecked == 1
      }).length
    },
    isChosedAll() {
      return this.cartInfoList.every((cart) => {
        return cart.isChecked == 1
      })
    }
  },
  methods: {
    ...mapActions('cart', ['getCartList', 'deleteCartById', 'updateCheckStatus', 'deleteAllCart', 'updateAllCartStatus']),
    ...mapActions('detail', ['addToCart']),
    async updateCartNum(operate, cart, value, event) {
      switch (operate) {
        case 'add':
          value = 1
          break
        case 'minus':
          value = cart.skuNum > 1 ? -1 : 0
          break
        case 'change':
          let current = event.target.value * 1
          if (isNaN(current) || current < 0) {
            value = 0
          } else {
            value = parseInt(current) - cart.skuNum
          }
          break
      }
      try {
        await this.addToCart({
          skuId: cart.skuId,
          skuNum: value
        })
        this.getCartList()
      } catch (error) {
        alert('购物车数量修改失败！')
      }
    },
    async deleteCartByCartId(cartId) {
      try {
        await this.deleteCartById(cartId)
        this.getCartList()
      } catch (error) {
        alert('删除购物车失败，请重试！')
      }
    },
    async updateCheckStatusById(cart, event) {
      try {
        await this.updateCheckStatus({
          skuId: cart.skuId,
          isChecked: event.target.checked ? 1 : 0
        })
        this.getCartList()
      } catch (error) {

      }
    },
    async deleteAllByChoosed() {
      try {
        await this.deleteAllCart()
        this.getCartList()
      } catch (error) {
        alert('删除所选购物车失败！')
      }
    },
    async updateAllStatus(event) {
      let isChecked = event.target.checked ? 1 : 0
      try {
        await this.updateAllCartStatus(isChecked)
        this.getCartList()
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>

<style scoped lang="less">
h4 {
  margin: 9px 0px;
  font-size: 14px;
  line-height: 21px;
  font-weight: bold;
}

.cart-head {
  display: flex;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 10px;
  .head-1 {
    width: 25%;
  }
  .head-2 {
    width: 25%;
  }
  .head-3 {
    width: 12.5%;
  }
  .head-4 {
    width: 12.5%;
  }
  .head-5 {
    width: 12.5%;
  }
  .head-6 {
    width: 12.5%;
  }
}
.cart-body {
  margin: 15px 0px;
  border: 1px solid #ddd;

  .cart-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    .cart-item-col-1 {
      width: 5%;
    }
    .cart-item-col-2 {
      width: 45%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 82px;
        height: 82px;
      }
      .cart-desc {
        width: 150px;
        margin: 0px 10px;
        line-height: 18px;
      }
    }
    .cart-item-col-4 {
      width: 10%;
    }
    .cart-item-col-5 {
      width: 15%;
      a {
        text-decoration: none;
        color: #666;
        display: inline-block;
        box-sizing: border-box;
        border: 1px solid #ddd;
        padding: 8px;
        width: 23px;
        height: 35px;
        vertical-align: top;
      }
      .reduce {
        border-right: 0px;
      }
      .plus {
        border-left: 0px;
      }
      input {
        box-sizing: border-box;
        width: 40px;
        height: 35px;
        border: 1px solid #ddd;
        text-align: center;
        outline: none;
      }
    }
    .cart-item-col-6 {
      width: 12%;
      font-size: 16px;
    }
    .cart-item-col-7 {
      width: 13%;
      a {
        text-decoration: none;
        color: #666;
        &:hover {
          color: lightgreen;
        }
      }
    }
  }
}

.cart-tool {
  border: 1px solid #ddd;
  margin-bottom: 5px;
  .all {
    float: left;
    padding: 0px 10px;
    line-height: 52px;
    input {
      vertical-align: middle;
    }
    label {
      vertical-align: middle;
    }
  }

  .option {
    float: left;
    padding: 0px 10px;
    line-height: 52px;
    a {
      text-decoration: none;
      color: #666;
      padding: 0px 10px;

      &:hover {
        color: lightgreen;
      }
    }
  }

  .money-box {
    float: right;
    line-height: 52px;
    .choosed {
      float: left;
      padding: 0px 10px;
      span {
        padding: 0px 10px;
      }
    }
    .totalPrice {
      float: left;
      width: 200px;
      padding: 0px 10px;
      span {
        color: #c81623;
      }
    }
    .submit {
      float: right;
      a {
        text-decoration: none;
        color: #fff;
        display: block;
        width: 96px;
        height: 52px;
        background-color: #e1251b;
        font-size: 18px;
        text-align: center;

      }
    }
  }
}
</style>