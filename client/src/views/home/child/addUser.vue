<template>
    <div>
        <p class="title">添加用户</p>
        <div class="warp">
             <block :title="adduser.title" 
        :config="adduser.config[index]"
        :rules="adduser.rules[index]"
        @ind="tab"
        :submit="adduser.submit[index]">
             <el-form-item prop="user_id" v-if="index === 1">
                <el-select placeholder="请选择" v-model="adduser.config.user_id">
                            <el-option :value="item.user_name" v-for="item in getUserList" :key="item.user_id">
                                {{item.user_name}}
                            </el-option>
                    </el-select>
            </el-form-item>
        <el-form-item prop="user_name">
            <el-input placeholder="请输入用户名" v-model="adduser.config.user_name"></el-input>
        </el-form-item>
         <el-form-item prop="user_pwd">
            <el-input placeholder="请输入密码" v-model="adduser.config.user_pwd"></el-input>
        </el-form-item>
         <el-form-item prop="identity_id">
               <el-select placeholder="请选择" v-model="adduser.config.identity_id">
                        <el-option :value="item.identity_text" v-for="item in usered" 
                        :key="item.identity_id" :label="item.identity_text">
                            {{item.identity_text}}
                        </el-option>
                 </el-select>
        </el-form-item>
        </block>
        <!-- 2 -->
         <block :title="userEdit.title" 
        :config="userEdit.config"
        :rules="userEdit.rules"
        :submit="userEdit.submit">
        <el-form-item prop="identity_text">
              <el-input placeholder="请输入身份名称" v-model="userEdit.config.identity_text"></el-input>
         </el-form-item>
        </block>
        <!-- 3 -->
         <block :title="authorityapi.title" 
        :config="authorityapi.config"
        :rules="authorityapi.rules"
        :submit="authorityapi.submit">
        <el-form-item prop="api_authority_text">
              <el-input placeholder="请输入身份名称" v-model="authorityapi.config.api_authority_text"></el-input>
         </el-form-item>
         <el-form-item prop="api_authority_url">
              <el-input placeholder="请输入身份名称" v-model="authorityapi.config.api_authority_url"></el-input>
         </el-form-item>
         <el-form-item prop="api_authority_method">
              <el-input placeholder="请输入身份名称" v-model="authorityapi.config.api_authority_method"></el-input>
         </el-form-item>
        </block>
        <!-- 4 -->
         <block :title="authorityViewEdit.title" 
        :config="authorityViewEdit.config"
        :rules="authorityViewEdit.rules"
        :submit="authorityViewEdit.submit" 
        >
          <el-form-item prop="view_authority_text">
               <el-select placeholder="请选择" v-model="authorityViewEdit.config">
                        <el-option :value="{
                            view_authority_text:item.view_authority_text,
                            view_id:item.view_id,
                        }" v-for="item in authorityViewList" 
                        :key="item.view_id" :label="item.view_authority_text">
                            {{item.view_authority_text}}
                        </el-option>
                 </el-select>
        </el-form-item>
        </block>
        <!-- 5 -->
         <block :title="setIdentityapi.title" 
        :config="setIdentityapi.config"
        :rules="setIdentityapi.rules"
        :submit="setIdentityapi.submit">
          <el-form-item prop="identity_id">
               <el-select placeholder="请选择" v-model="setIdentityapi.config.identity_id">
                        <el-option :value="item.identity_id" v-for="item in usered" 
                        :key="item.view_id" :label="item.identity_text">
                            {{item.identity_text}}
                        </el-option>
                 </el-select>
        </el-form-item>
        <el-form-item prop="api_authority_id">
               <el-select placeholder="请选择" v-model="setIdentityapi.config.api_authority_id">
                        <el-option :value="item.api_authority_id" v-for="item in authorityData" 
                        :key="item.api_authority_id" :label="item.api_authority_text">
                            {{item.api_authority_text}}
                        </el-option>
                 </el-select>
        </el-form-item>
        </block>
     <!-- 6 -->
       <block :title="setIdentityView.title" 
        :config="setIdentityView.config"
        :rules="setIdentityView.rules"
        :submit="setIdentityView.submit">
          <el-form-item prop="identity_id">
               <el-select placeholder="请选择" v-model="setIdentityView.config.identity_id">
                        <el-option :value="item.identity_id" v-for="item in usered" 
                        :key="item.view_id" :label="item.identity_text">
                            {{item.identity_text}}
                        </el-option>
                 </el-select>
        </el-form-item>
        <el-form-item prop="view_authority_id">
               <el-select placeholder="请选择" v-model="setIdentityView.config.view_authority_id">
                        <el-option :value="item.view_authority_id" v-for="item in authorityViewList" 
                        :key="item.view_authority_id" :label="item.view_authority_text">
                            {{item.view_authority_text}}
                        </el-option>
                 </el-select>
        </el-form-item>
        </block>
        </div> 
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex";
import block from "@/components/slot/index"
import {adduser,userEdit,authorityapi,authorityViewEdit,setIdentityapi,setIdentityView} from "@/config/addUser.config";
console.log(authorityapi)
export default {
    props:{
    },
    components:{
        block
    },
    data(){
        return {
            adduser,
            userEdit,
            authorityapi,
            authorityViewEdit,
            setIdentityapi,
            setIdentityView,
            index:0
        }
    },
    computed:{
        ...mapState("user",["usered","getUserList","authorityViewList","authorityData"])

    },
    methods:{
        ...mapActions("user",["getUser","getUsered","viewData","getAauthority"]),
        tab(i){
            this.index = i
        }
    },
    created(){
        this.getUser();
        this.getUsered();
        this.viewData();
        this.getAauthority()
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
   .warp{
       width: 100%;
       height: 100%;
       display: flex;
        flex-wrap: wrap;
        >div{
            width: 33.333%;
             border:1px solid #888;
        }
   }
</style>