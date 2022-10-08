<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style src="./assets/css/reset.css"></style>
<style src="./assets/css/common.css"></style>
<style lang="less">
#app {
  font: 12px/1.3 "Microsoft YaHei",Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
  background-color: #FFFFFF;
}
</style>
