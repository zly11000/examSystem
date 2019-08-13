<template>
    <div class="big" >
        <p class="title" v-if="this.$route.path.split('/')[2] === 'editExam'">编辑试题</p>
        <p class="title" v-else>添加试题</p>
        <div class="big-box">
            <p>题目信息</p>
            <p>题干</p>
            <p class="input">
                <input type="text" placeholder="请输入题目标题，不超过20个字" v-model="inputValue"/>
            </p>
            <div class="them">
                <p>题目主题</p>
                <mavon-editor v-model="mavon"/>
            </div>
             <div class="select">
                <div class="item">
                    <p>请选择考试类型</p>
                     <el-select  v-model="listValue" placeholder="请选择">
                        <el-option  :value="item.exam_name" v-for="item in data" :key="item.exam_id">
                             {{item.exam_name}}
                        </el-option>
                    </el-select>
                </div>
                    <div class="item">
                        <p>请选择课程类型</p>
                     <el-select  v-model="courseValue" placeholder="请选择">
                        <el-option :value="item.subject_text" v-for="item in courseTypeList" :key="item.subject_id">
                             {{item.subject_text}}
                        </el-option>
                    </el-select>
                </div>
                   <div class="item">
                       <p>请选择题目类型</p>
                     <el-select  v-model="themValue" placeholder="请选择">
                        <el-option :value="item.questions_type_text" v-for="item in themTypeList" :key="item.questions_type_id">
                             {{item.questions_type_text}}
                        </el-option>
                    </el-select>
                </div>
            </div>
             <div class="titleed">
                <p>题目信息</p>
                <mavon-editor v-model="messageValue"/>
            </div>
            <div class="btn">
                <el-button type="primary" @click="btn">提交</el-button>
            </div>
           
        </div>
        
    </div>
</template>
<script>
import types from "../../../api/user";
import {mapState,mapActions} from "vuex"
export default {
    props:{
    },
    components:{
    },
    data(){
        return {
            inputValue:"",
            mavon:"",
            listValue:"",
            courseValue:"",
            themValue:"",
            messageValue:""
        }
    },
    computed:{
        ...mapState("list",["data","courseTypeList","themTypeList"])
    },
    methods:{
        ...mapActions("list",['getListType','getCourseType','getthemType']),
        btn(){
             let questions_type_id = this.themTypeList.find(item=>item.questions_type_text === this.themValue).questions_type_id;
             let subject_id = this.courseTypeList.find(item=>item.subject_text === this.courseValue).subject_id;
             let exam_id = this.data.find(item=>item.exam_name === this.listValue).exam_id
           this.$confirm('你确定要添加这道试题吗?', '真的要添加吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
            if(this.inputValue.trim() === "" && this.mavon.trim()==="" && this.listValue==="" && this.courseValue === "" && this.themValue === "" && this.messageValue === ""){
                return;
            }
            types.addList({
                 questions_type_id:questions_type_id,
                 questions_stem:this.inputValue,
                 subject_id:subject_id,
                exam_id:exam_id,
                user_id:JSON.parse(window.localStorage.userInfo).user_id,
                 questions_answer:this.messageValue,
                 title:this.mavon
            }).then(data=>{
                console.log(data)
            })
          this.$message({
            type: 'success',
            message: '添加成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
        //更新
        let path = this.$route.path.split("/")[2];
        console.log(path)
       if(path === "editExam"){
                 this.$confirm('你确定要更新吗?', '真的要更新这道题吗？', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
            if(this.inputValue.trim() === "" && this.mavon.trim()==="" && this.listValue==="" && this.courseValue === "" && this.themValue === "" && this.messageValue === ""){
                return;
            }
            types.update({
                questions_id: this.$route.params.id,
                 questions_type_id:questions_type_id,
                 questions_stem:this.inputValue,
                 subject_id:subject_id,
                  exam_id:exam_id,
                 questions_answer:this.messageValue,
                 title:this.mavon
            }).then(data=>{
                console.log(data)
            })
          this.$message({
            type: 'success',
            message: '更新成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });  
       }
      }
    },
    created(){
        console.log(this.$store.state,"llllllll")
        let path = this.$route.path.split("/")[2];
            if(path === "editExam"){
                let {id} =  this.$route.params
                    types.getSelect().then(data=>{
                    let item = data.data.find(item=>item.questions_id === id);
                    this.inputValue = item.title;
                    this.mavon = item.questions_stem;
                    this.listValue = item.exam_name;
                    this.courseValue = item.subject_text;
                    this.themValue = item.questions_type_text;
                    this.messageValue = item.questions_answer;
               })
            }
        this.getListType();
        this.getCourseType();
        this.getthemType();
    },
    mounted(){
    },
    watch:{
        $route(to,from){
            if(to.name === "addExam"){
                 this.inputValue ="",
                this.mavon = "",
                this.listValue ="",
                this.courseValue ="",
                this.themValue = "",
                this.messageValue=""
            }
        }
    }
}
</script>
<style scoped lang="scss">
.big{
    width: 100%;
    height:100%;
}
  .title{
      font-size:30px;
      width:100%;
      height:100px;
      line-height: 100px;
  }
  .titleed{
      margin-top:30px;
  }
  .big-box{
      background: #fff;
      width:100%;
      height:2000px;
      border-radius: 4px;
      padding:0 15px;
      p{
          padding:5px;
      }
      .input{
          width:30%;
          height:40px;
          border:1px solid #ccc;
          margin-top:2px;
          input{
              width: 100%;
              height:100%;
          }
      }
      .them,.title{
          margin-top:30px;
      }
      .item{
          width:100%;
          padding-top:20px;
      }
      .el-button{
          width:150px;
          margin-top:10px;

      }
     
  }
  
</style>