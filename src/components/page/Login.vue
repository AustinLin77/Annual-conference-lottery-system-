<template>
    <div class="login-wrap">
        <div class="ms-title">年会后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username" id="nY"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitU"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-radio-group v-model="ruleForm.danxuan">
                       <el-radio label="活动界面" ></el-radio>
                       <el-radio   label="后台界面"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitU">登录</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名随便填、密码123456。</p>
            </el-form>
        </div>
    </div>
</template>

<script>

    export default {

        data: function(){
            return {
                tz:3,

                ruleForm: {
                    username: '',
                    password: '',
                    danxuan:"",
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },

        methods: {

          submitU:function () {
                let vm = this;
              $.ajax({
                  type:"get",
                  url:"http://appinter.sunwoda.com/active/toLogin.json",
                  data:{token:'fae4bbf8bc008060da49d06c1189563c',managerName:vm.ruleForm.username,managerPassword:vm.ruleForm.password},
                  dataType:"json",
                  success:function (data) {
                      console.log(data)
                     if(data.message == "验证成功"){
                         var storage=window.localStorage;
                         storage.setItem("data",vm.ruleForm.username);
                        if(vm.ruleForm.danxuan=="后台界面"){
                         vm.$router.push('/readme');}
                      else{
                            vm.$router.push('/activityH');

                     }
                      }
                     else{
                         vm.$message("登录失败");
                     }

                  },

                  error:function (da) {
                      console.log(da);
                  }

          });

        }

        }}

</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:230px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
