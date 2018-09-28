<template>
    <div class="header-container ">
        <div class="header-box clearfix w1170">
            <router-link to='/' class="header-title fl">
                云笔记
            </router-link>
            <el-button class="header-btn fr" @click="noteWrite">
                写笔记
            </el-button>
        </div>
    </div>
</template>
<script>
export default {

    methods:{
        noteWrite(){
            this.$router.push('/write')
        }
    }
}
</script>
<style lang="scss" scoped>
    .header-container{
        background-color: #409eff;
        height: 60px;

        .header-box{
           padding-top: 10px;

           .header-title{
               text-decoration: none;
               font-size: 27px;
               font-weight: 600px;
               line-height: 40px;
               color: #fff
           } 
        }
    }

</style>
