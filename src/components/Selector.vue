<template>
  <!-- selector -->
  <ul class="selector">
    <li class="item logo">
      <div class="key">品牌</div>
      <div class="value">
        <ul class="logo-list">
          <li v-for="trademark in trademarkList" :key="trademark.id" @click="trademarkHandler(trademark)">{{trademark.tmName}}</li>
        </ul>
      </div>
      <div class="ext">
        <a href="#" class="button">多选</a>
        <a href="#">更多</a>
      </div>
    </li>
    <li class="item" v-for="attr in attrsList" :key="attr.attrId">
      <div class="key">{{attr.attrName}}</div>
      <div class="value">
        <ul class="type-list">
          <li  v-for="(attrValue,index) in attr.attrValueList" :key="index" @click="attrHandler(attr,attrValue)">
            <a>{{attrValue}}</a>
          </li>
        </ul>
      </div>
      <div class="ext">
      </div>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Selector",
  computed: {
    ...mapGetters('search', ['trademarkList', 'attrsList'])
  },
  methods: {
    trademarkHandler(info, event) {
      this.$emit('trademarkInfo', info)
    },
    attrHandler(attr, attrValue, event) {
      this.$emit('attrInfo', attr, attrValue)
    }
  }
}
</script>

<style scoped lang="less">
.selector {
  border: 1px solid #ddd;
  margin-bottom: 5px;
  .item {
    display: flex;
    border-top: 1px solid #ddd;
    .key {
      width: 100px;
      background-color: #f1f1f1;
      text-align: right;
      padding: 10px 10px 0px 15px;
    }
    .value {
      width: 968px;
      padding: 10px 0px 10px 15px;
      .logo-list {
        display: flex;
        flex-wrap: wrap;
        border-right: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
        li {
          width: (1/9)*100%;
          height: 52px;
          line-height: 52px;
          border-top: 1px solid #e4e4e4;
          border-left: 1px solid #e4e4e4;
          margin-left: -1px;
          overflow: hidden;
          font-size: 14px;
          color: #e1251b;
          font-style: italic;
          text-align: center;
          white-space: nowrap;
          font-weight: 700;
          img {
            height: 52px;
          }
        }
      }
      .type-list {
        display: flex;
        li {
          margin-right: 30px;
          line-height: 26px;
          color: #666666;
        }
      }
    }
    .ext {
      padding: 11px 0px 0px 5px;
      a {
        text-decoration: none;
        color: #666666;
        padding: 0px 5px;
      }

      .button {
        border: 1px solid #d5d5d5;
      }
    }
  }
}
</style>