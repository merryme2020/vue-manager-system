export default {
  state: {
    menu: [], //全部菜单，空数组
    currentMenu: null //对象
  },
  mutations: {
    // val传递过来的值
    selectMenu(state, val) {
      //方式1:if else
      // if (val.name !== 'home'){
      //   state.currentMenu = val
      // } else {
      //   state.currentMenu = null
      // }
      //方式2：三元表达式
      val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
    }
  },
  actions: {}
}
