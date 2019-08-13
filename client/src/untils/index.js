import axios from "axios"
import router from "@/router";

const request = axios.create();
request.interceptors.request.use((config)=>{
    return {
        ...config,
        headers:{
            ...config.headers,
            authorization:window.sessionStorage.getItem("authorization")
        }
    }
},(error)=>{
    return Promise.reject(error)
})

request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    const response = error.response;
    const status = response.status;
    if(status > 400){
        switch(status){
            case 401:
                router.push('/login');
            break;
            case 403:
                alert('没有权限');
            break;
            case 404:
                alert('页面走丢了');
            break;
        }
    }
    return Promise.reject(error)
})

export default request;