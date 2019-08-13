<template>
    <div>
        <p class="title">用户展示</p>
        <div class="bottom">
            <ul>
                <li v-for="(item,index) in arr" :key="index" @click="itemed(index)" :class="{active:index===ind}">
                    {{item.title}}
                </li>
            </ul>
            <div class="box">
                <p>{{this.arr[ind].title}}</p>
              <ul>
                <li class="first">
                    <span v-for="(item,index) in userHead" :key="index">{{item}}</span>
                </li>
                <li v-for="(item,index) in userList.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
                    <span v-if="item.name">{{item.name}}</span>
                    <span v-if="item.pwd">{{item.pwd}}</span>
                    <span v-if="item.text">{{item.text}}</span>
                    <span v-if="item.title">{{item.title}}</span>
                </li>
            </ul>
            <div>
                分页
                    <el-pagination
                     @current-change="handleCurrentChange"
                      :page-size="pagesize"
                      :current-page="currentPage"
                    layout="total,pager, next"
                    :total="userList.length">
                 </el-pagination>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import request from '../../../untils';
import showUser from "@/api/showUser/index";
import showUserData from "../../../config/showUser";
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            ind:0,
            arr:[
                {
                    title:"用户数据",
                    type:"user"
                },
                {
                    title:"身份数据",
                    type:"identity"
                },
                {
                    title:"api接口权限",
                    type:"authority"
                },
                {
                    title:"身份和api接口关系",
                    type:"relation"
                },{
                    title:"视图接口权限",
                    type:"authorityView"
                },{
                    title:"身份和视图关系",
                    type:"authorityRelation"
                }
            ],
            userList:[],
            userHead:[],
            pagesize:10,
            currentPage:1
        }
    },
    computed:{

    },
    methods:{
        itemed(ind){
            this.ind = ind;
            let userd = showUser[this.arr[this.ind].type];
           showUserData(this.arr[this.ind].type).then(data=>{
              this.userList = data.userList;
              this.userHead = data.userHead
           })
        },
         handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
        },
    },
    created(){
         let userd = showUser[this.arr[this.ind].type];
         if(this.arr[this.ind].type === "user"){
              userd().then(data=>{
                     this.userList = data.data.map(item=>
                      ({name:item.user_name,pwd:item.user_pwd,text:item.identity_text})
                       )
                    })
                    this.userHead = ["用户名","密码","身份"]
         }
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
   .title{
      font-size:30px;
      width:100%;
      height:100px;
      line-height: 100px;
  }
  .bottom{
      width:100%;
       position: relative;
      p{
          margin-top:2px;
          margin-bottom: 3px;
      }
      ul{
          width: 100%;
           height:50px;
           li{
               float: left;
               border:1px solid #888888;
               padding:5px 10px;
               cursor: pointer;
           }
      }
      .active{
          border:1px solid blue;
          color:blue;
      }
      .box{
          width:100%;
         ul{
          width: 100%;
          li{
               width: 100%;
              height:70px;
              background:#fff;
               display: flex;
               justify-content: space-between;
                align-items: center;
                padding:0 20px; 
                border-bottom: 1px solid #ccc;
                span{
                    flex:2.5;
                }
          }
         .first{
              background:#f5f5f5;
              display: flex;
              span{
                  flex:2.5;
                  justify-content: flex-start;
              }
          }
        }
      }
      .page{
          width: 100%;
          position:absolute;
          background: red;
           bottom:850px;
           left:0;
      }
  }
</style>