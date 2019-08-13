import showUser from "../api/showUser/index";
//用户展示
const showUserData =async (type)=>{
    let userd = showUser[type];
    let userList = [];
    let userHead = [];
    switch(type){
        case "user":
         { let data = await userd();
              userList = data.data.map(item=>
              ({name:item.user_name,pwd:item.user_pwd,text:item.identity_text})
               )
          userHead = ["用户名","密码","身份"];
           }
        break;
        case "identity" :
           { let data = await userd()
               userList = data.data.map(item=>({name:item.identity_text}))
            userHead = ["身份名称"];
           }
        break;
        case "authority" :
          {  let data = await userd()
             userList= data.data.map(item=>
                    ({name:item.api_authority_text,pwd:item.api_authority_url,text:item.api_authority_method})
                )
            userHead = ["api权限名称","api权限url","api权限方法"]
             }
        break;
        case "relation" :
           { let data = await userd()
                  userList = data.data.map(item=>
                   ({name:item.identity_text,title:item.api_authority_text,pwd:item.api_authority_url,text:item.api_authority_method})
                )
            userHead = ["身份名称","api权限名称","api权限url","api权限方法"]
                  }
        break;
        case "authorityView":
            {let data = await userd()
                userList = data.data.map(item=>
                   ({name:item.view_authority_text,title:item.view_id})
                )
             userHead = ["试图权限名称","试图id"]
                }
        break;
        default:
         case "authorityRelation":
            { let data =await userd()
                  userList = data.data.map(item=>({name:item.identity_text,title:item.view_authority_text,pwd:item.view_id}))
                 userHead = ["试图名称","试图id","身份"]
            }
           break;
    }
    return {
        userList,
        userHead
    };
}
export default showUserData;