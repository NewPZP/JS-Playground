<template>
    <div class="login-body"> 
        <div class="login-panel">
            <div class="login-title">用户登录</div> 
             <el-form :model="formData">
                <el-form-item label="">
                    <el-input placeholder="请输入用户名" v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input placeholder="密码" v-model="formData.password"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <div class="check-code-panel">
                    <el-input placeholder="请输入验证码" v-model="formData.checkCode" class="input-panel"></el-input>
                    <img :src="checkCodeUrl" class="check-code" @click="changeCheckCode">
                    </div>
                </el-form-item>

                <el-form-item label="">
                    <el-checkbox v-model="formData.remember" :label="1">记住我</el-checkbox>
                </el-form-item>


                <el-form-item label="">
                    <el-button :style="{width:'100%'}" type="primary" >登录</el-button>
                </el-form-item>
                
             </el-form>
        </div> 

    </div>
</template>

<script setup>
import { reactive, ref} from "vue"
const formData = reactive({});

const checkCodeUrl = "api/checkCode?" + new Date().getTime();
const changeCheckCode = () => {
    checkCodeUrl.value="1234"
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
