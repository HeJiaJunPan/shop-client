<template>
<div class="floor-container w">
  <div class="first-row clearfix">
    <h3 class="title">家用电器</h3>
    <ul class="tab-content clearfix">
      <li class="tab-item">
        <a href="#">热门</a>
      </li>
      <li class="tab-item">
        <a href="#">大家电</a>
      </li>
      <li class="tab-item">
        <a href="#">生活电器</a>
      </li>
      <li class="tab-item">
        <a href="#">厨房电器</a>
      </li>
      <li class="tab-item">
        <a href="#">应季电器</a>
      </li>
      <li class="tab-item">
        <a href="#">空气/净水</a>
      </li>
      <li class="tab-item">
        <a href="#">高端电器</a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Floor"
}
</script>

<style scoped lang="less">
.floor-container {
  margin-top: 15px;

  .first-row {
    .title {
      float: left;
      margin: 9px 0px;
      font-size: 20px;
      font-weight: bold;
      line-height: 30px;
      color: #c81623;
    }

    .tab-content {
      margin: 10px 0px 0px;
      a {
        text-decoration: none;
        color: #666;
      }
      float: right;

      .tab-item {
        float: left;
        line-height: 18px;
      }
      .tab-item:not(:nth-last-of-type(1))::after {
        content: "|";
        padding: 0px 10px;
      }
      .tab-item:first-of-type {
        color: #e1251b;
        a {
          color: #e1251b;
        }
      }
    }
  }
}

</style>