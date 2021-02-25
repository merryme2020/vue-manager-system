<template>
  <el-form :inline="inline" :model="form" ref="form" label-width="100px">
    <el-form-item v-for="item in formLabel" :key="item.model" :label="item.Label">
      <!-- 1. 循环方式绑定字段 -->
      <!-- 2. form父组件传递过来绑定的表单，通过循环出来的item的model字段, 即通过model寻找到我们绑定的表单的所属字段keyworld. -->
      <!-- 3. !item.type不存在显示(没有设置类型默认显示input输入框) -->
      <el-input v-model="form[item.model]" :placeholder="'请输入' + item.label" v-if="!item.type"> </el-input>

      <el-select v-model="form[item.model]" placeholder="请选择" v-if="item.type === 'select'">
        <el-option v-for="subItem in item.opts" :key="subItem.value" :label="subItem.label" :value="subItem.value"></el-option>
      </el-select>

      <el-switch v-model="form[item.model]" v-if="item.type === 'switch'"></el-switch>

      <!--    日志选择器-->
      <el-date-picker v-model="form[item.model]" type="date" placeholder="选择日期" v-if="item.type === 'date'"></el-date-picker>
    </el-form-item>

    <el-form-item>
      <!--      添加一个el-form-item，放入插槽-->
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  //定义参数接收
  props: {
    //是否横向表单
    inline: Boolean,
    //表单，只对类型进行校验
    form: Object,
    //表单项目 json对象的参数：label、model绑定的字段（form里面绑定的字段）、type渲染成什么类型表单项
    formLabel: Array //数组,里面是一个个json对象
  }
}
</script>

<style lang="scss" scoped></style>
