<template>
    <div class="login-box">
        <div class="item1 item">
            <el-input placeholder="邮箱" clearable v-model="formData.email"></el-input>
        </div>
        <div class="item">
            <el-input placeholder="密码" clearable v-model="formData.password"></el-input>
        </div>
        <div class="item">
            <el-button type="primary" class="el-button">登录</el-button>
        </div>
        <div class="item">
            <el-button  class="el-button" @click="handleRegister">注册</el-button>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            formData:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        handleRegister(){
            this.$router.push('/register')
        }
    }    
}
</script>
<style lang="scss" scoped>
    .login-box{
        width: 360px;
        height: 340px;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 4px;

        .item{
            margin-top: 30px;
            margin-left: 30px;
            margin-right: 30px;

                .el-button{
                    
                    width: 300px;
            }
        }

        .item1{
            margin-top:60px;
        }

        
    }

</style>
