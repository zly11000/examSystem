<template>
  <div class="see-box">
    <p class="title">查看试题</p>
    <div class="see">
      <ul>
        <span class="first">课程类型:</span>
       <li>All</li>
        <li
          v-for="(item,index) in courseTypeList"
          :key="item.subject_id"
          v-bind:class="{active:index === ind}"
          @click="listed(index)"
        >{{item.subject_text}}</li>
      </ul>
      <div class="item">
        <span>考试类型:</span>
        <el-select placeholder="请选择" v-model="examType">
          <el-option
            :value="item.exam_name"
            v-for="item in data"
            :key="item.exam_id"
          >{{item.exam_name}}</el-option>
        </el-select>
      </div>
      <div class="item">
        <span>题目类型:</span>
        <el-select placeholder="请选择" v-model="titleType">
          <el-option
            :value="item.questions_type_text"
            v-for="item in themTypeList"
            :key="item.questions_type_id"
          >{{item.questions_type_text}}</el-option>
        </el-select>
      </div>
      <div class="item">
        <el-button type="primary" icon="el-icon-search" @click="select">查询</el-button>
      </div>
    </div>
    <div class="bottom">
      <Item />
    </div>
  </div>
</template>
<script>
import type from "../../../api/user";
import Item from "../component/seeExam/list";
import {mapState,mapActions} from "vuex"
export default {
  props: {},
  components: {
    Item
  },
  data() {
    return {
      ind: 0,
      examType: "",
      titleType: ""
    };
  },
  computed: {
       ...mapState("list",["data","courseTypeList","themTypeList"])
  },
  methods: {
       ...mapActions("list",['getListType','getCourseType','getthemType']),
     listed(index) {
      this.ind = index;
      console.log(this.ind);
    },
    select() {
      //课程id
      let subject_id = this.courseTypeList.find(
        item => item.subject_text === this.courseTypeList[this.ind].subject_text
      ).subject_id;
      // //课程类型id
      let questions_type_id = this.themTypeList.find(
        item => item.questions_type_text === this.titleType
      ).questions_type_id;
      // //考试类型id
      let exam_id = this.data.find(item => item.exam_name === this.examType)
        .exam_id;
      //试题id
      let quest = this.allList.find(item => item.questions_id).questions_id;
      type
        .getSelect({
          params: {
            questions_id: quest,
            questions_type_id: questions_type_id,
            subject_id: subject_id,
            exam_id: exam_id
          }
        })
        .then(data => {s
          console.log(data);
        });
    }
  },
  created() {
      this.getListType();
        this.getCourseType();
        this.getthemType();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.see-box {
  .title {
    font-size: 30px;
    height: 50px;
    line-height: 50px;
  }
  .see {
    width: 100%;
    min-height: 200px;
    background: #fff;
    border-radius: 4px;
    padding: 30px 30px;
    .first {
      font-size: 18px;
    }
    ul {
      width: 100%;
      li {
        display: inline-block;
        padding: 0 10px;
        cursor: pointer;
      }
      .active {
        color: blue;
      }
    }

    .item {
      display: inline-block;
      padding-top: 40px;
      padding-left: 10px;
      .el-button {
        width: 150px;
        margin-top: 10px;
      }
    }
  }
  .bottom {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    margin-top: 30px;
    padding: 30px 20px;
  }
}
</style>