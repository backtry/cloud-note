<template>
    <div class="register-box">
        <h2 class="register-title">新用户注册</h2>    
        <div class="register-input">
            <div class="item">
                <el-input placeholder="用户名" v-model="userData.username"></el-input>
            </div>
            <div class="item">
                <el-input placeholder="邮箱" v-model="userData.email" ></el-input>
            </div>
            <div class="item">
                <el-input placeholder="密码" v-model="userData.password" type="password" @keyup.enter.native="handleRegister"></el-input>
            </div>
            <div class="item">
                <el-button type="primary" class="register-btn" @click="handleRegister">注册</el-button>
            </div>
        </div>
    </div>   
</template>
<script>
export default {
    data(){
        return{
            userData:{
                username:'',
                email:'',
                password:''
            }
        }
    },
    methods:{
        handleRegister(){
            this.$axios.post('/user',this.userData).then(res=>{
                console.log(res)
                if(res.code==200){
                    this.$message.success(res.msg+"返回登录页")
                     setTimeout(()=>{
                    this.$router.push('/')
                },1000)
                }else{
                    this.$message.warning(res.msg)
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .register-box{
        background-color: #fff;
        text-align: center;
        width: 650px;
        margin: 60px auto 0;
        padding-top: 20px;
        padding-bottom: 40px;
        border-radius: 6px;

        .register-title{
            text-decoration: none;
            font-size: 20px;
            font-weight: 600px;
           
        }
        .register-input{
           
             .item{
                display: block;
                margin: 20px 50px 0px;

            }

            .register-btn{
                width: 100%
            }
        }        
    }
</style>
