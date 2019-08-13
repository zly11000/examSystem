import request from "../untils/index";
// console.log(request)
 const login = (res)=>request.post("/api/user/login",res);
 const userInfo = ()=>request.get("/api/user/userInfo");
 const newed = () => request.get("/api/user/new",{params:{
    user_id:JSON.parse(window.sessionStorage.userInfo).user_id
}})
const listType = () =>request.get("/api/exam/examType");//考试类型
const courseType = () =>request.get("/api/exam/subject") //课程
const themType = ()=>request.get("/api/exam/getQuestionsType") //题目类型
const addList = (data) =>request.post("/api/exam/questions",data) //添加数据
const allExam = ()=>request.get("/api/exam/questions/new") //查看试题
const getSelect = (res)=>request.get("/api/exam/questions/condition",res) //搜索
const getType = () =>request.get("/api/exam/getQuestionsType") //所有试题分类
const addExamType = (data) =>request.get("/api/exam/insertQuestionsType",data) //添加试题类型
// const editData = (data)=>request.get("/api/exam/questions/condition",data)
export default { 
    login,
    userInfo,
    newed,
    listType,
    courseType,
    themType,
    addList,
    allExam,
    getSelect,
    getType,
    addExamType

 }