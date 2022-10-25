<template>
  <div class="home clearfix w">
    <TypeNav></TypeNav>
    <ListContainer class="carousel"></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :list="floor" :key="floor.id"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/components/ListContainer';
import TodayRecommend from '@/components/TodayRecommend';
import Rank from '@/components/Rank';
import Like from '@/components/Like';
import Floor from '@/components/Floor';
import Brand from '@/components/Brand';
import {mapActions, mapState} from 'vuex';
export default {
  name: 'Home',
  components: {
    Brand,
    Floor,
    Like,
    Rank,
    TodayRecommend,
    ListContainer
  },
  mounted() {
    this.getFloorList()
  },
  computed: {
    ...mapState('home', ['floorList'])
  },
  methods: {
    ...mapActions('home', ['getFloorList'])
  }
}
</script>

<style scoped lang="less">
.carousel {
  margin-left: 210px;
}

.test {
  width: 730px;
  margin-top: 5px;
}
</style>