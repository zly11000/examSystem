import type from "@/api/user";
const state = {
    data:[],
    courseTypeList:[],
    themTypeList:[],
    allList:[]
}
const mutations = {
    getList(state,arr){
        state.data = arr;
    },
    courseTyped(state,arr){
        state.courseTypeList = arr;
    },
    themTyped(state,arr){
        state.themTypeList = arr
    },
    allExamd(state,arr){
        state.allList = arr
    }
}
const actions = {
    getListType({commit}){
        console.log(commit)
        type.listType().then(data=>{
            commit("getList",data.data)
        })
    },
    getCourseType({commit}){
        type.courseType().then(data=>{
            commit("courseTyped",data.data)
        })
    },
    getthemType({commit}){
        type.themType().then(data=>{
            commit("themTyped",data.data)
        })
    },
    getAllExam({commit}){
        type.allExam().then(res=>{
            commit("allExamd",res.data) 
        })
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}