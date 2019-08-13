<template>
<div>
    <ul v-for="item in allList" :key="item.questions_id">
                 <li>{{item.title}}</li>
                 <li>
                     <span>{{item.questions_type_text}}</span>
                     <span>{{item.subject_text}}</span>
                     <span class="therd">{{item.exam_name}}</span>
                     <b v-edit="'main-editQuestions'" @click="edit(item.questions_id)">编辑</b>
                 </li>
                 <li class="last">{{item.user_name}} <span class="publish">发布</span></li>
             </ul>
    </div>
</template>
<script>
import type from "../../../../api/user"
import {mapState,mapActions} from "vuex"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            list:[]

        }
    },
    computed:{
       ...mapState("list",["allList"])
    },
    methods:{
       ...mapActions("list",['getAllExam']),
       edit(id){
           this.$router.push("/home/editExam/"+ id)
       }
    },
    created(){
        this.getAllExam();
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
     ul{
              width: 100%;
              min-height: 130px;
              border-bottom: 1px solid #ccc;
              b{
                  font-weight: 100;
                  color:blue;
                  padding-left:30px;
              }
              li{
                  padding:15px 0;
                  span{
                      padding:5px 10px;
                      color:blue;
                      background: bisque;
                      margin-right:10px;
                  }
                  .therd{
                      background: oldlace;
                      color:orange;
                  }
              }
              .last{
                  color:blue;
              }
              .publish{
                  background: #fff;
              }
          }

</style>