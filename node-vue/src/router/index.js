import Vue from 'vue'
import Router from 'vue-router'
import Publish from '../components/Publishlist'
import Postdetail from '../components/Postdetail'
import Userinfo from '../components/UserInfo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',//router-link跳转时需要使用
      path:'/',
      components:{
        main: Publish//这里和下面命名main是因为渲染的时候(router-view 时需要用)
      }
    },
    {
      name:'post-detail',
      path:'/topic/:id&author=:name',//需要传递参数id和name,注意在
      components:{
        main: Postdetail//
      }
    },
    {
      name:'user-page',
      path:'/user',
      components:{
        main:Userinfo
      }
    },

  ]
})
