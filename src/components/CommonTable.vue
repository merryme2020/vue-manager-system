<template>
  <div class="common-table">
    <!--    v-loading局部区域加载状态显示的效果-->
    <el-table :data="tableData" height="90%" stripe v-loading="config.loading">
      <!--      添加第一列-->
      <el-table-column label="序号" width="85">
        <template slot-scope="scope">
          <!--          分页：序号等于1页多少项+index-->
          <span style="margin-left: 10px">{{ (config.page - 1) * 20 + scope.$index + 1 }}</span>
        </template>
      </el-table-column>

      <!--      添加循环渲染列-->
      <el-table-column show-overflow-tooltip v-for="item in tableLabel" :key="item.prop" :label="item.label" :width="item.width ? item.width : 125">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <!--      添加操作按钮(自定义列模板)-->
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--    添加Pagination分页-->
    <!--    组件内部更新，要同步到父组件,sync操作符，通过sync可以双向绑定数据-->
    <el-pagination class="pager" layout="prev, pager, next" :total="config.total" :current-page.sync="config.page" @current-change="changePage"></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object
  },
  methods: {
    handleEdit() {},
    handleDelete() {},
    changePage(page) {
      this.$emit('changePage', page)
    }
  }
}
</script>

<style lang="scss" scoped>
.common-table {
  height: calc(100% - 62px); /** 计算表格高度  */
  background-color: #fff;
  position: relative; /** 绝对定位  */
  .pager {
    position: absolute;
    bottom: 0px;
    right: 20px;
  }
}
</style>
