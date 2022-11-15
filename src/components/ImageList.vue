<template>
<div class="swiper-container" ref="imageList">
  <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="(slide,index) in skuImageList" :key="index">
      <img  :src="slide.imgUrl" :class="{active: currentIndex === index}" @click="changeIndex(index)">
    </div>
  </div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: "ImageList",
  props: ['skuImageList'],
  data() {
    return {
      currentIndex: 0
    }
  },
  watch: {
    skuImageList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.imageList, {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            // 显示图片的数量
            slidesPerView: 5,
            // 每一次切换图片个数
            slidesPerGroup: 1
          })
        })
      }
    }
  },
  methods: {
    changeIndex(index) {
      // 更改当前索引
      this.currentIndex = index
      // 通过全局事件总线，把当前索引传递给兄弟组件
      this.$bus.$emit('getIndex', this.currentIndex)
    }
  }
}
</script>

<style scoped lang="less">
.swiper-container {
  height: 56px;
  width: 400px;
  margin-top: 5px;
  box-sizing: border-box;
  padding: 0 12px;
  .swiper-slide {
    width: 56px;
    height: 56px;
    img {
      width: 50px;
      height: 50px;
      border: 1px solid #ccc;
      padding: 2px;
      display: block;
      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }
  .swiper-button-next {
    left: auto;
    right: 0px;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }
  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>