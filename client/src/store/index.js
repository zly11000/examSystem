import Vue from "vue";
import Vuex from "vuex";
import list from "@/store/modules/list";
import user from "@/store/modules/user"
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        list,
        user
    }
    // state:{
    //     data:[],
    //     courseTypeList:[],
    //     themTypeList:[],
    //     allList:[],
    //     usered:[],
    //     getUserList:[],
    //     authorityViewList:[],
    //     //给身份设定api接口权限
    //     // setIdentityApiData:[]
    //     //展示api接口权限
    //     authorityData:[]
    // },
    // mutations:{
    //     getList(state,arr){
    //         state.data = arr;
    //     },
    //     courseTyped(state,arr){
    //         state.courseTypeList = arr;
    //     },
    //     themTyped(state,arr){
    //         state.themTypeList = arr
    //     },
    //     allExam(state,arr){
    //         state.allList = arr
    //     },
    //     //用户
    //     userList(state,brr){
    //        state.usered = brr
    //     },
    //     userListData(state,brr){
    //         state.getUserList = brr
    //     },
    //     viewList(state,arr){
    //         state.authorityViewList = arr
    //     },
    //     //给身份设定api接口权限
    //     // setIdentityApiList(state,brr){
    //     //     state.setIdentityApiData = brr;
    //     // }
    //     //展示api接口权限
    //     authorityList(state,arr){
    //         state.authorityData = arr
    //     }
    // },
    // actions:{
    //     getListType({commit}){
    //         console.log(commit)
    //         type.listType().then(data=>{
    //             commit("getList",data.data)
    //         })
    //     },
    //     getCourseType({commit}){
    //         type.courseType().then(data=>{
    //             commit("courseTyped",data.data)
    //         })
    //     },
    //     getthemType({commit}){
    //         type.themType().then(data=>{
    //             commit("themTyped",data.data)
    //         })
    //     },
    //     getAllExam({commit}){
    //         type.allExam().then(res=>{
    //             commit("allExam",res.data) 
    //         })
    //     },
    //     //用户
    //     getUser({commit}){
    //         users.identity().then(data=>{
    //             commit("userList",data.data)
    //         })
    //     },
    //     getUsered({commit}){
    //         users.user().then(data=>{
    //             commit("userListData",data.data)
    //         })
    //     },
    //     //视图
    //     viewData({commit}){
    //         users.authorityView().then(data=>{
    //             commit("viewList",data.data)
    //         })
    //     },
    //     //给身份设定api接口权限
    //     // setIdentityData({commit}){
    //     //     users.setIdentityapi().then()
    //     // }
    //     //展示api接口权限
    //     getAauthority({commit}){
    //         users.authority().then(data=>{
    //             commit("authorityList",data.data)
    //         })
    //     }

    // }
})