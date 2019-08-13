<template>
    <div class="classify">
          <p class="title">试题分类</p>
          <div class="bottom">
                 <el-button type="primary" @click="add">添加类型</el-button>
            <ul>
                <li class="first">
                    <span>类型ID</span>
                    <span>类型名称</span>
                    <span>操作</span>
                </li>
                <li v-for="item in brr" :key="item.questions_type_id">
                    <span>{{item.questions_type_id}}</span>
                    <span>{{item.questions_type_text}}</span>
                    <span></span>
                </li>
            </ul>
          </div>
    </div>
</template>
<script>
import typed from "../../../api/user";
// import { mapState } from 'vuex';
console.log(typed)
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
           brr:[],
           sort:""
        }
    },
    computed:{

    },
    methods:{
        add(){
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {
            let id = this.brr.find(item=>item.questions_type_id);
            console.log(id)
            typed.addExamType({
               params:{
                   text:value,
                   sort:this.brr.length+1
               }
            }).then(data=>{
                console.log(data)
                if(data.code){
                     typed.getType().then(data=>{
                        this.brr = data.data;
                    })
                }
            })
          this.$message({
            type: 'success',
            message: '成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        })
    }
    },
    created(){
        typed.getType().then(data=>{
            this.brr = data.data;
        })

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
      background: #fff;
      ul{
          width: 100%;
          height:100%;
          li{
               width: 100%;
              height:70px;
              background:#fff;
               display: flex;
                justify-content: space-between;
                align-items: center;
                padding:0 20px; 
                border-bottom: 1px solid #ccc;
          }
         .first{
              background:#f5f5f5;
          }
      }
       .el-button{
          width:150px;
          margin-top:10px;
          margin-left:10px;
          margin-bottom: 20px;

      }
  }

</style>