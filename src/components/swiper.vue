<template>
    <div class="swiper-box">
        <img src="/static/img/banner.jpg" class="swiper-img">
        <div class="swiper-title">
            随便写写，别当真
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .swiper-box{
        width: 750px;
        height: 340px;
        position: relative;
        border-radius: 4px;
        overflow: hidden;

        .swiper-img{
            display: block;
            width: 100%;
        }

        .swiper-title{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            color: #caedf0;
            background:rgba(0,0,0,0.3);
            font-size:20px;
            font-weight: 400px;
            line-height: 50px; 
        }
    }
</style>
