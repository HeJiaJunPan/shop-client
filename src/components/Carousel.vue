<template>
  <div class="carousel-container">
    <div class="carousel-img">
      <a href="#">
        <img :src="imgs[current]">
      </a>
    </div>
    <div class="pre-incon" @click="preImg">
      <span>&lt;</span>
    </div>
    <div class="post-incon" @click="postImg">
      <span>&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      current: 0,
      imgs: [
        require('../assets/images/home/banner1.jpg'),
        require('../assets/images/home/banner2.jpg'),
        require('../assets/images/home/banner3.jpg'),
        require('../assets/images/home/banner4.jpg')
      ],
    }
  },
  methods: {
    preImg: function (event) {
      if (this.current > 0) {
        this.current--
      } else {
        this.current = this.imgs.length - 1
      }
    },
    postImg: function (event) {
      console.log('this ia a test')
      if (this.current < this.imgs.length -1) {
        this.current++
      } else {
        this.current = 0
      }
    }
  }
}
</script>

<style scoped lang="less">
.carousel-container {
  position: relative;
  width: 730px;
  height: 462px;

  img {
    width: 721px;
    margin-top: 5px;
  }

  span {
    font-size: 100px;
    color: rgba(0,122,255,0.8);
    font-weight: lighter;
  }

  .pre-incon {
    position: absolute;
    left: 0px;
    top: 40%;
    cursor: pointer;
  }

  .post-incon {
    position: absolute;
    right: 9px;
    top: 40%;
    cursor: pointer;
  }
}
</style>