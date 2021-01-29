export default {
  state: {
    menu: [], //全部菜单，空数组
    currentMenu: null, //对象
    tabsList: [
      /***tabList默认有一个值是首页
       * 首页是不可关闭，一进来第一个页面是首页，它也是一个初始页面***/
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ] //数组
  },
  mutations: {
    // val传递过来的值
    selectMenu(state, val) {
      //方式1:if else
      if (val.name !== 'home') {
        state.currentMenu = val
        // 这里有个缺点，点击多次放多次( 进行去重操作),要先判断tabsList有没有这个val
        // state.tabsList.push(val)
        /****
         * es6 findIndex()方法判断一下,这里面的item，它接收一个回调函数，回调函数的参数就是里面的项目
         * 如果findIndex找不到项目，返回值为-1
         */
        let result = state.tabsList.findIndex(item => item.name === val.name)
        /**
         * 判断result是否等于-1，如果等于把值放进去，如果不等于不做任何操作
         */
        result === -1 ? state.tabsList.push(val) : ''
      } else {
        state.currentMenu = null
      }
      //方式2：三元表达式
      // val.name === 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
    },
    //定义关闭标签页方法
    // state默认参数，val点击过后传递过来的菜单
    closeTab(state, val) {
      /*****
       * 找到它的索引，通过findIndex（）方法，找到我们要删除的那一个菜单的索引
       * 本身菜单放在tabsList里面，点击删除的时候，要找到删除的菜单的索引，找到它才能在tabsList删除
       *
       */
      let result = state.tabsList.findIndex(item => item.name === val.name)
      /****
       * splice(result, 1)方法删除
       */
      state.tabsList.splice(result, 1)
    }
  },
  actions: {}
}
