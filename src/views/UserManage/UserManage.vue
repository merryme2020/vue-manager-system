<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <!-- 直接循环formLabel绑定表单-->
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>

    <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config"></common-table>
  </div>
</template>
<script>
import CommonForm from '../../components/CommonForm'
import CommonTable from '../../components/CommonTable'
export default {
  components: {
    CommonForm,
    CommonTable
  },
  data() {
    return {
      //定义参数
      tableData: [],
      tableLabel: [
        //通过循环tableLabel生成表格的列
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'sexLabel',
          label: '性别'
        },
        {
          prop: 'birth',
          label: '出生日期'
        },
        {
          prop: 'addr',
          label: '地址'
        }
      ],
      searchFrom: {
        keyword: '' // 通过model找到searchFrom里面的keyword,绑定它
      },
      config: {
        //分页参数
        page: 1, //当前页
        total: 30, //总共页数
        loading: false //加载中状态
      },
      //表单基本参数
      formLabel: [
        {
          model: 'keyword',
          label: ''
        }
      ]
    }
  },
  methods: {
    getList() {
      //发送请求
      //让table的loading处于加载中，告诉用户获取列表
      this.config.loading = true
      // console.log(this.config.loading)
      this.$http
        .get('/api/user/getUser', {
          //一定要写params，因为mock数据拦截的就是params的里面的一个数据，它会把这个数据拼接到url上
          params: {
            page: this.config.page
          }
        })
        .then(res => {
          this.tableData = res.data.list.map(item => {
            item.sexLabel = item.sex === 0 ? '女' : '男'
            return item //把item项每一项拼成数组返回
          })
          // console.log(res.data)
          this.config.total = res.data.count
          this.config.loading = false
        })
    }
  },
  mounted() {
    //使用create,dom可能没渲染完成
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common.scss';
</style>
