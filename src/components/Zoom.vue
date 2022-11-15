<template>
<div class="preview" @mousemove="handle">
  <!-- 图片区域 -->
  <img :src="currentImage.imgUrl" >

  <!-- 放大镜放大后的图片 -->
  <div class="big" >
    <img ref="big" :src="currentImage.imgUrl">
  </div>
  <!-- 蒙版 -->
  <div class="mask" ref="mask"></div>
</div>
</template>

<script>
export default {
  name: "Zoom",
  props: ['skuImageList'],
  data() {
    return {
      currentIndex: 0
    }
  },
  mounted() {
    this.$bus.$on('getIndex', (index) => {
      this.currentIndex = index
    })
  },
  computed: {
    currentImage() {
      if (this.skuImageList) {
        return this.skuImageList[this.currentIndex] || {}
      }
    }
  },
  methods: {
    handle(event) {
      let bigImage = this.$refs.big
      let mask = this.$refs.mask
      let offsetLeft = event.offsetX - mask.offsetWidth / 2
      let offsetTop = event.offsetY - mask.offsetHeight / 2

      if (offsetLeft <= 0) {
        offsetLeft = 0
      }
      if (offsetLeft >= mask.offsetWidth) {
        offsetLeft = mask.offsetWidth
      }
      if (offsetTop <= 0) {
        offsetTop = 0
      }
      if (offsetTop >= mask.offsetHeight) {
        offsetTop = mask.offsetHeight
      }

      mask.style.left = offsetLeft + 'px'
      mask.style.top = offsetTop + 'px'
      bigImage.style.top = -2 * offsetTop + 'px'
      bigImage.style.left = -2 * offsetLeft + 'px'
    }
  }
}
</script>

<style scoped lang="less">
.preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .big {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    left: 100%;
    top: -1px;
    overflow: hidden;
    display: none;
    z-index: 998;

    img {
      width: 200%;
      height: 200%;
      position: absolute;
      left: 0px;
      top: 0px;
    }
  }

  .mask {
    position: absolute;
    width: 50%;
    height: 50%;
    left: 0px;
    top: 0px;
    background-color: rgba(0,255,0,0.3);
    display: none;
    pointer-events: none;
  }

  &:hover {
    .big {
      display: block;
    }
    .mask {
      display: block;
    }
  }
}
</style>