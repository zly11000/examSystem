import users from "@/api/showUser/index";
const state = {
    usered: [],
    getUserList: [],
    authorityViewList: [],
    //给身份设定api接口权限
    setIdentityApiData: [],
    //展示api接口权限
    authorityData: []
}

const mutations = {
    // 用户
    userList(state, brr) {
        state.usered = brr
    },
    userListData(state, brr) {
        state.getUserList = brr
    },
    viewList(state, arr) {
        state.authorityViewList = arr
    },
    //给身份设定api接口权限
    // setIdentityApiList(state,brr){
    //     state.setIdentityApiData = brr;
    // }
    //展示api接口权限
    authorityList(state, arr) {
        state.authorityData = arr
    }
}

const actions = {
    getUser({ commit }) {
        users.identity().then(data => {
            commit("userList", data.data)
        })
    },
    getUsered({ commit }) {
        users.user().then(data => {
            commit("userListData", data.data)
        })
    },
    //视图
    viewData({ commit }) {
        users.authorityView().then(data => {
            commit("viewList", data.data)
        })
    },
    //展示api接口权限
    getAauthority({ commit }) {
        users.authority().then(data => {
            commit("authorityList", data.data)
        })
    }
}
export default {
    namespaced:true,
    state,
    mutations,
    actions
}
