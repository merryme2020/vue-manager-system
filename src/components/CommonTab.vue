<template>
  <div class="tabs">
    <el-tag
      :key="tag.name"
      size="small"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
//引入mapState, mapMutations两个方法
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },

  /***
   * 数据部分
   */
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    /***
     * 它就是一个辅助函数，可以接收一个数组或者对象作为参数
     * 对象作为参数，可以改变在组件里面定义的属性做为存储
     */
    ...mapMutations({
      close: 'closeTab' //this.$store.commit()
    }),
    handleClose(tag) {
      this.close(tag)
    },
    changeMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style lang="scss">
/**scss语法 el-tag是tabs子集(在对应的{}括号里面表示子集)**/
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
  }
}
</style>
