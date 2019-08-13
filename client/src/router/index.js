import Vue from 'vue'
import Router from 'vue-router';
import children,{navdata} from "../router/home";
Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:"/home/hode"
    },
   
    {
      path:"/home",
      name:"home",
      beforeEnter:(to,form,next)=>{
        navdata()
        next()
      },
      meta:{
         isLogin:true
      },
      component:()=>import("../views/home/index.vue"),
      children:children
    },
    {
      path: '/login',
      name: 'login',
      component:()=>import("../views/login/index")
    },
    {
      path: '/noFindview',
      name: 'noFindview',
      component:()=>import("../views/home/child/noFindview.vue")
    }
  ]
})
router.beforeEach((to,from,next)=>{
   if(to.meta.isLogin){
       if(window.sessionStorage.userInfo && JSON.parse(window.sessionStorage.userInfo)){
         next()
       }else{
         next("/login")
       }
   }else{
     next()
   }
})
export default router;


