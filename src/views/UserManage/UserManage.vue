<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <!-- 直接循环formLabel绑定表单-->
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <div class="manage-content">
      <common-table></common-table>
    </div>
  </div>
</template>

<script>
import CommonForm from '../../components/CommonForm'
import CommonTable from '../../components/CommonTable'
export default {
  data() {
    return {
      searchFrom: {
        keyword: ''
      },
      formLabel: [
        {
          model: 'keyword', // 通过model找到searchFrom里面的keyword,绑定它
          label: ''
        }
      ]
    }
  },
  components: {
    CommonForm,
    CommonTable
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common.scss';
</style>
