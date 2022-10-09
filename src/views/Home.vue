<template>
  <div class="home clearfix">
    <TypeNav></TypeNav>
    <div class="w img-container">
      <ListContainer class="carousel"></ListContainer>
    </div>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import ListContainer from '@/components/ListContainer';
import TodayRecommend from '@/components/TodayRecommend';
import Rank from '@/components/Rank';
import Like from '@/components/Like';
import Floor from '@/components/Floor';
import Brand from '@/components/Brand';
export default {
  name: 'Home',
  components: {
    Brand,
    Floor,
    Like,
    Rank,
    TodayRecommend,
    ListContainer,
    Carousel,
    TypeNav
  }
}
</script>

<style scoped lang="less">
.carousel {
  margin-left: 210px;
}
</style>