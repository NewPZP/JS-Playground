import axios from "axios"
import { ElLoading } from "element-plus";
import message from "@/utils/Message";

const contentTypeForm = "application/x-www-form-urlencoded;chatset=UTF-8";
const contentTypeJson = "application/json";
const contentTypeFile = "multipart/form-data"

const request = (config) => {
     let { url, params, dataType = 'form', showLoading = true } = config;

     let contentType = contentTypeForm;
     if(dataType === "json"){
        contentType = contentTypeJson;
     }else if(dataType === "file"){
        contentType = contentTypeFile;
        let param = new FormData();
        for(let key in params){
            param.append(key, params[key]);
        }
        params = param;
     }

     const instance = axios.create({ 
        baseURL: 'api',
        timeout: 10*1000,
        headers:{
            'Content-Type': contentType,
            'X-Requested-With': 'XMLHttpRequest'
        }
    })

    let loading = null;
    instance.interceptors.request.use( 
        (config) => {
            if(showLoading){
                loading = ElLoading.service({
                    lock: true,
                    text: '加载中....',
                    background: 'rgba(0, 0, 0, 0.7)'
                })
            }
            return  config;
        },
        (error) => {

            if(showLoading && loading){
                loading.close();
            }
            message.error(error);
            return Promise.reject('发送请求失败');
        }
         
    )
    //请求后拦截
    instance.interceptors.response.use(
        (response) => {
            if(showLoading && loading){
                loading.close();
            }
            const responseData = response.data;
            if(responseData.code != 200){
                return Promise.reject(responseData.msg);
            }else{

            }
        }, 
        (error) => {
            if(showLoading && loading){
                loading.close();
            }
            return Promise.reject("网络异常");
        }
    )

    return instance.post(url,params).catch(error => {
        message.error(error);
        return null;
    })
}

export default request;