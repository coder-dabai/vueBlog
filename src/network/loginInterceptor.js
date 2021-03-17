//此模块封装登录的请求拦截
import axios from 'axios'
import ElementUI from 'element-ui'

axios.interceptors.response.use(response=>{
    let res = response.data;

    if(res.code === 200){
        return res
    }else{
        Element.Message.error("用户名或密码错误",{duration:1*1000})
        return Promise.reject(response.data.msg)    //阻止返回（跳出请求）
    }
},err=>{
    if(err.response.data){
        err.message = err.response.data.msg
    }
    if(err.response.status === 401){
        router.push("/login")
    }
    Element.Message.error(err.message,{duration:1*1000})
    return Promise.reject(err)
})