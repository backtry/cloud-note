<template>
    <div>
        <div class="login-box" v-if="!userInfo.username">
            <div class="item1 item">
                <el-input placeholder="邮箱" clearable v-model="formData.email"></el-input>
            </div>
            <div class="item">
                <el-input placeholder="密码" clearable v-model="formData.password" type="password" ></el-input>
            </div>
            <div class="item">
                <el-button type="primary" class="el-button" @click="handlelogin">登录</el-button>
            </div>
            <div class="item">
                <el-button  class="el-button" @click="handleRegister">注册</el-button>
            </div>
        </div>
        <div class="user-info" v-else>
            <div class="user-avatar">
                <img :src=userInfo.avatar class="avatar-img">
            </div>
            <div class="user-name">
                {{userInfo.username}}
            </div>
            <div class="btn-box">
                <el-button class="btn" type="warning" @click="handlelogout">退出登录</el-button>
            </div>
        </div>
    </div>    
</template>
<script>
    import {mapState} from 'vuex'
export default {
    data(){
        return{
            formData:{
                email:'1395446712@qq.com',
                password:'1234563'
            }
        }
    },
    methods:{
        handleRegister(){
            this.$router.push('/register')
        },
        handlelogin(){
            this.$axios.post('/login',this.formData).then(res=>{
                if(res.code==200){
                    this.$message.success(res.msg)
                    let str = {
                    username:'',
                    email:'',
                    avatar:''
                    }
                str.username = res.userData.username
                str.email = res.userData.email
                str.avatar = res.userData.avatar
                setTimeout(()=>{
                     this.$store.commit('USER_CHANGE',str)
                    },500)
                }else{
                    this.$message.warning(res.msg)
                }
            })
        },
        handlelogout(){
            this.$axios.get('logout').then(res=>{
                if(res.code==200){
                    this.$message.success(res.msg)
                     let string = {
                    username:'',
                    email:'',
                    avatar:''
                    }
                    this.$store.commit('USER_CHANGE',string)
                    this.$router.push('/')        
                }else{
                    if(res.code==403){
                        this.$message.warning(res.msg)
                        let string = {
                            username:'',
                            email:'',
                            avatar:''
                            }
                            this.$store.commit('USER_CHANGE',string)
                        this.$router.push('/')

                    }
                }
            })
        }    
    },
    computed:{
        ...mapState(['userInfo'])
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
            padding-top: 30px;
            margin-left: 30px;
            margin-right: 30px;

                .el-button{
                    
                    width: 300px;
            }
        }

        .item1{
            padding-top:60px;
        }

        
    }
    .user-info{
        width: 360px;
        height: 340px;
        background-color: #fff;
        margin: 0 auto;
        border-radius: 4px;
        text-align: center;

        .user-avatar{
            padding-top: 20px; 
            .avatar-img{
                height: 170px;
            }
        }
        .user-name{
            color: rgb(72, 60, 240);
            font-size: 30px;
            font-weight: 700;
        }
        .btn-box{
            margin-top: 20px;
            .btn{
                width: 134px; 
            }    
        }
        
    }
</style>
