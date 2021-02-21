<template>
  <el-form :inline="inline" :model="form" ref="form" label-width="100px">
    <el-form-item v-for="item in formLabel" :key="item.model">
      <!-- 1. 循环方式绑定字段 -->
      <!-- 2. form父组件传递过来绑定的表单，通过循环出来的item的model字段, 即通过model寻找到我们绑定的表单的所属字段keyworld. -->
      <!-- 3. !item.type不存在显示(没有设置类型默认显示input输入框) -->
      <el-input v-model="form[item.model]" :placeholder="'请输入' + item.label" v-if="!item.type"> </el-input>

      <el-select v-model="form[item.model]" placeholder="请选择" v-if="item.type === 'select'">
        <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>

      <el-switch v-model="form[item.model]" v-if="item.type === 'switch'"></el-switch>
    </el-form-item>

    <el-form-item>
      <!--      添加一个el-form-item，放入插槽-->
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    inline: Boolean,
    form: Object,
    //表单项目 label、model绑定的字段、type
    formLabel: []
  }
}
</script>

<style lang="scss" scoped></style>
