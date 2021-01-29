<template>
  <header>
    <!--    放面包屑导航-->
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" size="mini"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!--        使用v-if判断是否渲染标签-->
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--    放user相关的-->
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <!--    显示两个下拉选项-->
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
/** 引入vuex中mapState**/
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      /** 使用es6扩展运算符**/
      current: state => state.tab.currentMenu //通箭头函数进行引用，接收的是state参数
    })
  },
  data() {
    return {
      userImg: require('../assets/images/user.jpg') //js里面调用image标签使用require（）
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  /*使用flex里面的水平布局中的两边布局*/
  justify-content: space-between;
}

/*引用flex布局*/
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>

<!--注意组件嵌套在组件里面的样式，不能写scoped-->
<style lang="scss">
/*scss继承写法*/
.el-breadcrumb__item {
  .el-breadcrumb__inner {
    color: #fff;
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #f4f4f4;
    }
  }
}
</style>
