import Vue from "vue";
import type from "../api/user";
Vue.directive("edit",{
    inserted(val,option){
        type.newed().then(data=>{
            // console.log(data.data)
            let res = data.data.find(item=>item.view_id === value);
            // console.log(res)
            if(!res){
                let parent = val.parentNode;
                parent.removeChild(val)
            }
        })
        let {value} = option;
    }
})