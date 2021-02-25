<template>
  <div class="manage">
    <!--    引入Dialog对话框-->
    <el-dialog :title="operateType === 'add' ? '新增用户' : '编辑用户'" :visible.sync="isShow">
      <!--      引入表单-->
      <common-form :formLabel="operateFormLabel" :form="operateForm"> </common-form>
      <!--      插槽方式加入按钮-->
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>
      <!-- 直接循环formLabel绑定表单-->
      <common-form inline :formLabel="formLabel" :form="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>

    <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getList" @edit="editUser" @del="delUser"></common-table>
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
      operateType: 'add', //默认为add
      isShow: false, //默认为false
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
          label: '出生日期',
          width: 200
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320
        }
      ],
      //设置操作表单
      operateForm: {
        //更新的字段名字,默认为空
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      operateFormLabel: [
        {
          model: 'name', //1.绑定的字段
          Label: '姓名' //2. 表单描述
        },
        {
          model: 'age', //1.绑定的字段
          Label: '年龄' //2. 表单描述
        },
        {
          model: 'sex',
          Label: '性别',
          type: 'select',
          opts: [
            //数组
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth', //1.绑定的字段
          Label: '日期', //2. 表单描述
          type: 'date' //日期选择器设置type
        },
        {
          model: 'addr', //1.绑定的字段
          Label: '地址' //2. 表单描述
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
    },
    //输出row
    editUser(row) {
      this.operateType = 'edit' //设置操作类型为edit
      this.isShow = true //设置显示dialog
      // console.log(row)
      this.operateForm = row //点击更新operateForm要设置成row里面参数
    },
    confirm() {
      if (this.operateType === 'edit') {
        //确认提交操作
        this.$http.post('api/user/edit', this.operateForm).then(res => {
          console.log(res.data)
          this.isShow = false
          this.getList()
        })
      }
    },
    delUser(row) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          let id = row.id
          this.$http
            .get('/api/user/del', {
              params: {
                id
              }
            })
            .then(res => {
              console.log(res.data)
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
    //输出点击的翻页的页数
    // changePage(val) {
    //   console.log(val)
    // }
  },
  created() {
    //使用create,dom可能没渲染完成,获取数据的速度会快一点
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/common.scss';
</style>
