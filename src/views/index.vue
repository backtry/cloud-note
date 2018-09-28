<template>
    <div class="home-page w1170 clearfix">
        <swiper class="fl"></swiper>

        <login class="fr"></login>

        <notes class="fl"></notes>
    </div>    
</template>
<script>

import login from '../components/login'
import swiper from '../components/swiper'
import notes from '@/components/notes'

export default {
    components:{
        login,
        swiper,
        notes
    }
    
}
</script>
<style lang="scss" scoped>
    .home-page{
        margin-top: 50px;
    }
</style>
