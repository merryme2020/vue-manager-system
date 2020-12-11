<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#33aef0" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <!-- 字符串拼接-->
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu index="index" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
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
    }
  },
  methods: {
    clickMenu(item) {
      this.$store.commit('selectMenu', item) //把item传入vuex
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
          icon: 'home'
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
              //演示有二级页面，写一个菜单的v-for渲染出来
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
</style>
