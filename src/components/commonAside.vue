<template>
  <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <!--      通过v-for把菜单渲染出来，2中情况el-submenu和 el-menu-item-->
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <!-- 字符串拼接-->
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!--2.问题？观察了一下结构,可以发现el-menu-item和el-submenu是2个独立的部分，不能通过一个v-for把它渲染出来-->
    <!-- 解决办法：最好的方法，就是把asideMenu，把它用计算属性的方式，判断下它到底有没有children,如果有children，不返回回来，如果没有children返回回来菜单-->
    <!--把计算属性放入asideMenu，再通过v-for把它渲染出来-->
    <el-submenu index="index" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <!--el-icon-location,由后台返回回来的icon类名-->
        <i class="el-icon-location"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">{{
          subItem.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  //计算属性
  computed: {
    noChildren() {
      //没有children
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren() {
      //有children
      return this.asideMenu.filter(item => item.children)
    },
    //计算属性中取出vuex中的值
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },
  methods: {
    clickMenu(item) {
      /***
       *  定义点击菜单的方,使用路由函数式编程
       */
      /**接收item，把item传入vuex里面**/
      this.$router.push({ name: item.name })
      /**调用vuex mutations的方式： this.$store.commit(方法名称，传递的参数名)**/
      this.$store.commit('selectMenu', item)
    }
  },

  data() {
    return {
      //定义菜单数组
      asideMenu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home'
        },
        {
          path: '/video',
          name: 'video',
          label: '视频管理',
          icon: 'video-play'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user'
        },
        {
          label: '其他', //定义二级菜单，第一个不需要路由
          icon: 'user',
          children: [
            {
              // //定义二级菜单数组
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
