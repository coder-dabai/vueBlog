<template>
    <div class="box">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="标题" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="摘要" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="内容" prop="content">
    <mavonEditor v-model="ruleForm.content"></mavonEditor>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor'    //引入mavon-editor编辑器及其css文件
import 'mavon-editor/dist/css/index.css'
export default {
    components:{
        mavonEditor
    },
    data() {
      return {
        ruleForm: {
          name: '',
          desc: '',
          content:''
        },
        rules: {
          name: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请输入摘要', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            this.$axios.post('blogs',this.ruleForm).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>

<style lang="scss" scoped>
.box{
    width: 1000px;
    margin: 0 auto;
}
</style>