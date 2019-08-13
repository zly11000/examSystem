<template>
     <div class="addUser">
        <div class="user">
            <div class="item">
             <p class="first">
                 <p v-if="fale">
                     <el-button plain v-for="(item,i) in title" @click="tab(i)">{{item}}</el-button>
                 </p>
                <p v-else>
                    <el-button>{{title}}</el-button>
                </p>
             </p>
             <el-form ref="ruleForm" :model="config" :rules="rules">
               <slot>
                </slot>
               </el-form>
                  <p>
                    <span>
                        <el-button type="primary" class="btn" @click="btn">确定</el-button>
                    </span>
                    <span>
                        <el-button plain class="last" @click="change">重置</el-button>
                    </span>
               </p>
            </div>
        </div>
    </div>
</template>
<script>
import userd from "@/api/showUser/index"
export default {
    props:{
       title:{
           required: true
       },
       config:{
           type:Object,
           required:true
       },
       rules:{
           type:Object,
           required:true
       },
       submit:{
           type:Function,
           required:true
       }
    },
    components:{
    },
    data(){
        return {
            fale:true
        }
    },
    computed:{
    },
    methods:{
        btn(){
             this.$refs.ruleForm.validate((valid)=>{
                 if(valid){
                     this.submit(this.config).then(data=>{
                         console.log(data)
                         if(data.code){
                             this.$message({
                                 type:"success",
                                 message:data.msg
                             })
                         }else{
                              this.$message({
                               type:"info",
                               message:data.err ? data.err.errors[0].message  : data.msg 
                          })
                         }
                     })
                      this.$refs.ruleForm.resetFields()
                 }
             })
        },
        change(){
            
            this.$refs.ruleForm.resetFields()
        },
        tab(i){
            this.$emit("ind",i)
        }
    },
    created(){
            this.fale = this.title instanceof Array
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.user{
          width:100%;
          .item{
              width:100%;
              border-radius: 4px;
              padding:0 10px 20px  10px;
          }
      }
    .first{
      span{
          border:1px solid #888;
      }
      .active{
          border:1px solid blue;
          color:blue;
      }
  }
  .el-input{
      margin-top:20px;
  }
  .el-select{
      margin-top:20px;
  }
  .btn{
      margin-top:20px;
       max-width:150px;
  }
  .el-button{
      min-width: 70px;
      margin-top:20px;
  }
  .last{
      margin-left:20px;
      min-width:50px;
  }
  .el-form p{
      margin:5px 0;
  }
</style>