import request from "../../untils/index";
const user = (res) =>request.get("/api/user/user",res) //获取用户数据
const identity = ()=>request.get("/api/user/identity") //获取身份数据
const authority = () =>request.get("/api/user/api_authority") //获取api接口权限
const relation = () =>request.get("/api/user/identity_api_authority_relation") //展示身份和api权限关系
const getUser = (res) =>request.post("/api/user",res);//添加用户
const getEdit = (res)=>request.get("/api/user/identity/edit",{params:{
    ...res
}}); //添加身份
const authorityApi = (data)=>request.get("/api/user/authorityApi/edit",{params:{
    ...data
}}); //添加api接口权限
const authorityView = ()=>request.get("/api/user/view_authority")//添加视图
const authorityViewEdit = (data) =>request.get("/api/user/authorityView/edit",{params:{
    ...data
}}) //添加视图权限
const setIdentityapi = (data) => request.post("/api/user/setIdentityApi",data) //给身份设定api接口权限
const setIdentityView = (data)=>request.post("/api/user/setIdentityView",data)//给身份设定试图权限
const authorityRelation = () =>request.get("/api/user/identity_view_authority_relation") //身份和视图关系
const update = (res)=>request.put("/api/exam/questions/update",res)//更新

const updateuse = (data)=>request.put("/api/user/user",data)//更新
 export default {
    user,
    identity,
    authority,
    relation,
    getUser,
    getEdit,
    authorityApi,
    authorityView,
    authorityViewEdit,
    setIdentityapi,
    setIdentityView,
    authorityRelation,
    updateuse,
    update
}
