<template>
  <div>
    home
  </div>
</template>

<script>
export default {
  mounted() {
    //输出
    this.$http.get('/home/getData').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style lang="scss" scoped></style>
