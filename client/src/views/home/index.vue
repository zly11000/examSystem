<template>
    <div class="wrapper">
      <!-- <p class="title-big">Welcome!!!</p> -->
      <el-container>
          <header class="BasicLayout_header__3Ck8E ant-layout-header">
        <div class="BasicLayout_logo__1h5dC">
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
          alt
        />
      </div>
      <div class="BasicLayout_logout__1KsIb">
        <div>
          <span class="Header_user__1XoJH ant-dropdown-trigger">
            <span class="ant-avatar ant-avatar-circle">
              <span class="ant-avatar-string"></span>
            </span>
                {{user}}
          </span>
        </div>
         <div class="exit">
        <span @click="edit">退出</span>
       </div>
      </div>
    </header>
            <div class="box">
                <div class="side">
                       <el-aside width="200px">
                        <el-menu background-color="#545c64" v-for="(item,index) in arr" :key="index">
                              <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>{{item.name}}</span>
                                </template>
                                <el-menu-item-group v-for="(ite,i) in item.child">
                                <el-menu-item index="1-1">
                                    <router-link :to="ite.navUrl">{{ite.navName}}</router-link>
                                </el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-aside>
                </div>
                <div class="right">
                      <el-main>
                          <router-view>
                          </router-view>
                      </el-main>
                </div>
            </div>
      </el-container>
    </div>
</template>
<script>
import {userInfo,newed} from "../../api/user";
import {navdata} from "../../router/home";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            arr:[],
            user:""
        }
    },
    computed:{

    },
    methods:{
      edit(){
         this.$router.push("/login");
         sessionStorage.clear()
      }
    },
    created(){
        this.arr = navdata()
        let data = JSON.parse(window.sessionStorage.userInfo).user_name;
        console.log(data)
        this.user = data;
    },
    mounted(){
    }
}
</script>
<style scoped lang="scss">
.wrapper{
  width: 100%;
  height:100%;
  position: relative; 
  overflow: hidden;
}
 .exit{
    width:150px;
    min-height:20px;
    background: pink;
    position:absolute;
    top:64px;
    right:38px;
    z-index:999;
    text-align: center;
    display: none;
    border-radius:10px;
    span{
      display: inline-block;
      padding:10px 0;
      cursor: pointer;
    }
  }
.BasicLayout_logout__1KsIb:hover{
    background:#888888;
.exit{
    display:block;
}
}
.box{
    width:100%;
    height:93.5%;  
    position: absolute;;
    left:0;
   background: #ccc;
   display: flex;
}
// .title-big{
//   font-size:60px;
//   color:#000;
//   text-align: center;
//   margin:450px auto;
// }
   .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .side{
      width:200px;
      height:100%;
      float: left;
      background: #545c64;
  }
  .el-aside{
      background: #000 !important;
      overflow: hidden;
  }
  .right{
      float: left;
      flex:1;
      overflow:auto;
  }
  .el-submenu__title span{
      color:#fff;
  }
  .ant-layout-header {
    height: 64px;
    padding: 0 50px;
    line-height: 64px;
    background: #001529;
    background: #fff;
  }
  .BasicLayout_logo__1h5dC {
    width: 120px;
    margin: 16px 28px 16px 0;
    float: left;
    line-height: 31px;
    text-align: center;
    color: #fff;
    font-weight: 700;
    font-family: "\5B8B\4F53";
    img {
      width: 100%;
      height: 100%;
    }
  }
  .BasicLayout_logout__1KsIb {
    color: #333;
    float: right;
    .Header_user__1XoJH {
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      .ant-avatar {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5;
        list-style: none;
        font-feature-settings: "tnum";
        position: relative;
        display: inline-block;
        overflow: hidden;
        color: #fff;
        white-space: nowrap;
        text-align: center;
        vertical-align: middle;
        background: #ccc;
        width: 32px;
        height: 32px;
        line-height: 32px;
        border-radius: 50%;
        .ant-avatar-string {
          position: absolute;
          left: 50%;
          transform-origin: 0 center;
        }
      }
    }
  }
</style>