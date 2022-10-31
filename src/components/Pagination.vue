<template>
<div class="pagination">
  <!-- 左侧部分 -->
  <button :disabled="pageNo === 1" @click="$emit('pageNoInfo', pageNo - 1)">上一页</button>
  <button v-if="startNumAndEndNum.start > 1">1</button>
  <button v-if="startNumAndEndNum.start > 2">...</button>

  <!-- 中间部分：连续页码部分 -->
  <button
      v-for="page in startNumAndEndNum.end"
      v-if="page >= startNumAndEndNum.start"
      :class="{active: page === pageNo}"
      @click="$emit('pageNoInfo', page)"
  >{{page}}</button>
  <!-- 右侧部分 -->
  <button v-if="startNumAndEndNum.end < pageTotal - 1">...</button>
  <button v-if="startNumAndEndNum.end < pageTotal">{{pageTotal}}</button>
  <button :disabled="pageNo === pageTotal" @click="$emit('pageNoInfo', pageNo + 1)">下一页</button>
</div>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageNo', 'total', 'pageSize', 'continues'],
  computed: {
    pageTotal() {
      return Math.ceil(this.total / this.pageSize)
    },
    startNumAndEndNum() {
      let start;
      let end;
      // 情况1：如果总页数小于连续页面数
      if (this.pageTotal < this.continues) {
        start = 1
        end = this.pageTotal
      } else {
        // 情况2：如果页面总数大于等于连续页面数
        start = this.pageNo - Math.trunc(this.continues / 2)
        end = this.pageNo + Math.trunc(this.continues / 2)

        // 边界情况1：计算后的起始页小于1
        if (start < 1) {
          start = 1
          end = this.continues
        }
       // 边界情况2：计算后的结束页大于总页数
        if (end > this.pageTotal) {
          start = this.pageTotal - this.continues + 1
          end = this.pageTotal
        }
      }
      return {start, end}
    }
  }
}
</script>

<style scoped lang="less">
.pagination {
  text-align: center;
  button {
    margin: 0px 5px;
    padding: 0px 4px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    border: none;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>