<template>
    <div class="login-body"> 
        <div class="login-panel">
            <div class="login-title">用户登录</div> 
             <el-form :model="formData" :rules="rules" ref="formDataRef">
                <el-form-item prop="account">
                    <el-input placeholder="请输入用户名" v-model="formData.username">
                        <template #prefix>
                            <span class="iconfont icon-account"></span>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入密码" v-model="formData.password">
                        <template #prefix>
                            <span class="iconfont icon-password"></span>
                        </template>
                    </el-input>
                   
                </el-form-item>
                <el-form-item prop="checkCode"> 
                    <div class="check-code-panel">
                    <el-input placeholder="请输入验证码" v-model="formData.checkCode" class="input-panel" @keyup.enter.native="login"></el-input>
                    <img :src="checkCodeUrl" class="check-code" @click="changeCheckCode">
                    </div>
                </el-form-item>

                <el-form-item label="">
                    <el-checkbox v-model="formData.remember" :label="1">记住我</el-checkbox>
                </el-form-item>


                <el-form-item label="">
                    <el-button :style="{width:'100%'}" type="primary"  @click="login">登录</el-button>
                </el-form-item>
                
             </el-form> 
        </div> 

    </div>
</template>

<script setup>
import VueCookies from 'vue-cookies'
import md5 from 'js-md5'
import { reactive, ref, getCurrentInstance } from "vue"
import {useRouter} from 'vue-router'
const { proxy } =  getCurrentInstance()
const router = useRouter()
const api = { 
    checkCode: "api/checkCode",
    login: "login"
}
const checkCodeUrl = ref(api.checkCode)
const changeCheckCode = () => {
    checkCodeUrl.value = api.checkCode + "?" + new Date().getTime();
}

const formDataRef = ref();
const formData = reactive({});

const rules = {
    username: [{
        required: true,
        message: "请输入用户名"
    }],
    password: [{
        required: true,
        message: "请输入密码"
    }],
    checkCode: [{
        required: true,
        message: "请输入验证码"
    }]
}
const init = ()=>{
    const  loginInfo = VueCookies.get("loginInfo");
    if(!loginInfo){
        return;
    }
    console.log(loginInfo);
    Object.assign(formData,loginInfo);
}
init();

const login = () => {
    formDataRef.value.validate(async (valid) => {
        if(!valid){
            return ;
        }
        let cookieLoginInfo = VueCookies.get("loginInfo");
        let cookiePassword = cookieLoginInfo == null?null : cookieLoginInfo.password;
        if(cookiePassword != md5(formData.password)){
            formData.password = md5(formData.password)
        }

        let params = {
            username: formData.username,
            password: formData.password,
            checCode: formData.checCode,
            remember: formData.remember
        }

        let result = await proxy.Request({
            url: api.login,
            params: params,
            errorCallback: ()=>{
                changeCheckCode();
            }
        })
        if(!result){
            return ;
        }
        proxy.message.success("登录成功");
        setTimeout(()=>{
            router.push("/home");
        },1500)
        const loginInfo = {
            username: params.username,
            password: params.password,
            remember: params.remember
        }
        console.log(loginInfo);

        VueCookies.set("userInfo", result.data, 0)
        if(formData.remember){
            VueCookies.set("loginInfo", loginInfo, "7d")
        }
    });
}


</script>



<style lang="scss">
.login-body {
    width: 100%;
    height: calc(100vh);
    background-size: cover;
    background-position: center;
    background-image: url("../assets/login-bg.jpg");
    .login-title {
        font-size: 20px;
        text-align: center;
        margin-bottom: 10px;
    }
    .login-panel {
        float: right;
        margin-right: 100px;
        padding: 20px;
        margin-top: 150px;
        border-radius: 5px;
        box-shadow: 2px 2px 10px #888; 
        width: 350px;
        background: #fff;
    }
    .check-code-panel{
        width: 100%;
        display: flex;
        align-items: center;
        .input-panel{
            flex: 1;
            margin-right: 5px;

        }
        .check-code{
            img{
                height: 30px;
                cursor: pointer;
            }
        }

    }
}
</style>
