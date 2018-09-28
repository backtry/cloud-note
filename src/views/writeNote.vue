<template>
    <div class="w1170 write-note-box">
        <div class="box-title">
            <span>写笔记</span>
        </div>
        
        <div class="title">
            <span >标题</span>

            <el-input class="input-text"></el-input>
        </div>   
        <div class="title">
            <span >内容</span>
        </div>
        <div class="text-input" >
            <div class="quill-wrap">
                <quill-editor
                v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                >
                </quill-editor>
            </div>      
        </div>
        <div class="category">
            <span>分类</span>
            <div class="categorys">
                <el-radio  label="1" border size="medium">备选项1</el-radio>
                <el-radio  label="2" border size="medium">备选项2</el-radio>
            </div>
        </div>
        <div class="published">
            <el-button type="primary" class="published-btn">发表</el-button>
        </div>
    </div>    
</template>
<script>

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import {quillEditor, Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'

Quill.register('modules/ImageExtend', ImageExtend)

export default {
    components: {quillEditor},
    data() {
      return {
       content: '',
        // 富文本框参数设置
        editorOption: {  
          modules: {
            ImageExtend: {
              loading: true,
              name: 'img',
              action: 'https://qiniu.com',
              response: (res) => {
                return res.info
              }
            },
            toolbar: {
              container: container,
              handlers: {
                'image': function () {
                  QuillWatch.emit(this.quill.id)
                }
              }
            }
          }
        }
      }
    }

    
}
</script>
<style lang="scss" scoped>
    
    .write-note-box{
        box-sizing: border-box;
        margin-top: 40px;
        padding: 40px 20px;
        background-color: #fff;
        border-radius: 6px;

        .title{
           
            font-size: 20px;
            font-weight: 600;
            display: block;
            margin-bottom: 5px;

            .input-text{
                margin-top: 2px;
            }
            
        }
        .box-title{
             text-align: center;
             margin: 0;
             font-size: 28px;
             font-weight: 700;

        }

        .category{
            margin-top: 5px;
            color:rgb(14, 104, 238);

            .categorys{
                display: inline-block;
            }
        }

        .published{
            margin-top: 5px;

            .published-btn{
                width:144px;   
            
            }
        }
       

    }
    
</style>
<style>
    .ql-container{
        min-height: 300px;
    }
</style>
