import axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL:'',
        timeout: 5000
    })
    //发送真正的网络请求，且axios自带promise，所以可直接return出去
    return instance(config)
}