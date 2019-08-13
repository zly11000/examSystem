import userd from "../api/showUser/index"
export const adduser = {
    submit:[userd.getUser,userd.updateuse],
    config:[{
        user_name:"",
        user_pwd:"",
        identity_id:""
    },{
        user_id:"",
        user_name:"",
        user_pwd:"",
        identity_id:""
    }],
    rules:[{
        user_name:{required:true,tigger:"blur"},
        user_pwd:{required:true,tigger:"blur"},
        identity_id:{required:false,tigger:"blur"}
    },{
        user_id:{required:true,tigger:"blur"},
        user_name:{required:false,tigger:"blur"},
        user_pwd:{required:false,tigger:"blur"},
        identity_id:{required:false,tigger:"blur"}
    }],
    title:["添加用户","更新用户"]
}



export const updateuser = {
    submit:userd.updateuse,
    config:{
        user_id:"",
        user_name:"",
        user_pwd:"",
        identity_id:""
    },
    rules:{
        user_id:{required:true,tigger:"blur"},
        user_name:{required:false,tigger:"blur"},
        user_pwd:{required:false,tigger:"blur"},
        identity_id:{required:false,tigger:"blur"}
    }
}



export const userEdit = {
    submit:userd.getEdit,
    config:{
        identity_text:""
    },
    rules:{
        identity_text:{required:true,tigger:"blur"},
    },
    title:"添加身份"
}

export const authorityapi = {
    submit:userd.authorityApi,
    config:{
        api_authority_text:"",
        api_authority_url:"",
        api_authority_method:""
    },
    rules:{
        api_authority_text:{required:true,tigger:"blur"},
         api_authority_url:{required:true,tigger:"blur"},
        api_authority_method:{required:true,tigger:"blur"}
    },
    title:"添加api接口权限"
}
//添加视图权限
export const authorityViewEdit = {
    submit:userd.authorityViewEdit,
    config:{
        
    },
    rules:{
        view_authority_text:{required:true,tigger:"blur"},
        view_id:{required:true,tigger:"blur"}
    },
    title:"添加试图接口权限"
}

export const setIdentityapi = {
    submit:userd.setIdentityapi,
    config:{
        identity_id:"",
        api_authority_id:"",
    },
    rules:{
        identity_id:{required:true,tigger:"blur"},
        api_authority_id:{required:true,tigger:"blur"}
    },
    title:"给身份设置api接口权限"
}

//给身份设置视图权限
export const setIdentityView = {
    submit:userd.setIdentityView,
    config:{
        identity_id:"",
        view_authority_id:"",
    },
    rules:{
        identity_id:{required:true,tigger:"blur"},
        view_authority_id:{required:true,tigger:"blur"}
    },
    title:"给身份设置视图权限"
}





