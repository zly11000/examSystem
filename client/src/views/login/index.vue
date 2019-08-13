<template>
    <div class="wrap">
        <div class="box">
            <el-form label-width="150px" :rules="rules" :model="user" ref="ruleForm">
                    <el-form-item label="用户名" prop="userName">
                    <el-input type="text" v-model="user.userName" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="user.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                    <el-button type="primary" @click="submit">提交</el-button>
                </el-form-item>
     </el-form>
        </div>
    </div>
</template>
<script>
import login from "../../api/user";
console.log(login)

export default {
    data(){
        //用户名验证
         const getData = (rule,value,callback)=>{
             if(!value){
                callback(new Error("请输入用户名"))
                return;
             }
            //  let res = /^[a-zA-Z]\d{4,6}$/i
            let res = /^[a-zA-Z0-9]{3,9}$/
             if(!res.test(value)){
                callback(new Error("请输入正确的用户名"))
                return
             }
             callback()
         }
         //密码验证
         const passData = (rule,value,callback)=>{
             if(!value){
                callback(new Error("请输入密码"))
                return
             }
             let passed = /^\S{4,}/
            //  console.log(passed.test(value))
             if(!passed.test(value)){
                  callback(new Error("请输入正确的密码"))
                  return
             }
             callback()
         }
         return{
             user:{
                userName:"",
                password:""
            },
             rules:{
                 userName:{
                     validator:getData,
                     tigger:"change"
                 },
                 password:{
                     validator:passData,
                     tigger:"change" 
                 }
             }
         }
    },
    methods:{
      submit(){
         this.$refs.ruleForm.validate(data=>{
            if(data){
                try{
                 login.login({
                    user_name:this.user.userName,
                    user_pwd:this.user.password
                 }).then(data=>{
                     if(data.code){
                         window.sessionStorage.authorization = data.token;
                         login.userInfo().then(res=>{
                             window.sessionStorage.userInfo = JSON.stringify(res.data)
                          this.$router.push("/home");
                         })
                     }else{
                         this.$message("您输入的用户名或密码有误")
                     }
                 })
                }catch(res){
                   console.log(res)
                }
            }
         })
      }
    }
}
</script>
<style scoped lang="scss">
  .wrap{
      width: 100%;
      height:100%;
      background:#000080;
      .box{
          width:800px;
          height:400px;
          background: #fff;
          position:absolute;
          top:30%;
          right:10%;
          border-radius: 5px;

      }
  }
</style>