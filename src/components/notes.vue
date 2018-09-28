<template>
    <div class="notes-box">
        <div class="notes-item">
            <div class="top clearfix">
                <img src="/static/img/头像.jpg" class="avarat fl">
                <div class="text-title fl">
                    <div class="author">
                        <span class="uesrname">红牌</span>
                        <span>|</span>
                        <span>我是文章的标题</span>
                    </div>
                    <div class="read-about">
                        <span>浏览：1</span>
                        <span>回复：2</span>
                        <span>分类：假装分类</span>
                    </div>
                </div>
            </div>    
            <div class="text">
                富文本内容
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .notes-box{
       
        width: 750px;
        box-sizing: border-box;
        margin-top: 30px;
        border-radius:  4px;
        padding: 2px 20px;
        background: #fff;

        .notes-item{


            text-decoration: none;
            color: #333;
            display: block;
            padding-bottom: 20px;
            margin-top: 20px;

        }

        .top{
            display:block;
           
        }

    }

    .avarat{
        width: 70px;
        height: 70px;
        border-radius: 6px;
    }
    .text-title{
        margin-left: 10px;
         widows: 640px;

        .author{
            margin-bottom: 10px;

            span{
                margin-right: 5px;
                font-weight: 700;
                font-size: 18px;
            }
            .uesrname{
                font-size: 20px;
                font-weight: 600;
                color: skyblue

            }
        }

        .read-about{
            background-color: #aaa;
            width: 625px;
            border-radius: 6px;
            height: 35px;
            padding-left: 5px;

            span{
                margin-right: 20px;
                line-height: 35px;
                font-size: 16px;
                font-weight: 700
            }

        }
    }
    .text{
        margin-top: 10px;
    }

</style>
