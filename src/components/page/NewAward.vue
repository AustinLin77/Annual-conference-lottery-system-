<template>
    <div class="table" style="display: flex">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 表格</el-breadcrumb-item>
                <el-breadcrumb-item>新建奖项</el-breadcrumb-item>
            </el-breadcrumb>

        </div>
<div>
    <el-steps :space="80" direction="vertical"  style="position: fixed;top: 180px; left: 300px">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
        <el-step title="步骤 4"></el-step>
        <el-step title="步骤 5"></el-step>
    </el-steps>
</div>
        <div style="margin-top: 35px" >
            <el-form ref="form" :model="form" label-width="80px" labelPosition="left" id="www" :rules="rules">

                <el-form-item label="活动选择" prop="huodong">
                    <el-select v-model="form.huodong" placeholder="请选择活动" >
                        <el-option  v-for="i in tableData" :key="i" :value="i.activeName" id="rer"></el-option>

                    </el-select>
                </el-form-item >
                    <el-form-item label="奖项设置" style="margin-top: 45px" prop="region">
                        <el-select v-model="form.region" placeholder="请选择奖项">
                            <el-option value="特等奖"></el-option>
                            <el-option value="一等奖"></el-option>
                            <el-option value="二等奖"></el-option>
                            <el-option value="三等奖"></el-option>
                            <el-option value="四等奖"></el-option>
                            <el-option value="五等奖"></el-option>
                            <el-option value="六等奖"></el-option>
                            <el-option value="七等奖"></el-option>
                            <el-option value="八等奖"></el-option>
                            <el-option value="其他奖项"></el-option>
                        </el-select>
                    </el-form-item >
                    <el-form-item label="人数设置" style="margin-top: 45px" prop="name">
                        <el-input v-model="form.name" style="width: 218px"></el-input>
                    </el-form-item>
                        <el-form-item label="奖金设置" style="margin-top: 45px" prop="desc">
                            <el-input v-model="form.desc" style="width: 218px"></el-input>
                        </el-form-item>
                    <el-form-item label="发放方式" style="margin-top: 45px" prop="rei">
                       <el-select v-model="form.rei" placeholder="请选择方式">
                        <el-option value="线上"></el-option>
                        <el-option value="线下"></el-option>
                       </el-select>
                    </el-form-item >


                    <el-form-item style="margin-top: 45px;display: flex">
                        <el-button type="primary" @click="onSubmit('form')" style="position: fixed;left:320px;">立即创建</el-button>
                        <el-button @click="chongzhi" style="position: fixed;left:420px;">取消</el-button>
                    </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';


    export default {

        data: function(){
            return {
                tableData:[],
                active: 0,

                form: {
                    huodong:"",
                    name: '',
                    region: '',
                    rei:"线上",
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules:{
                    huodong:[{required :true,message: '请选择活动名称', trigger: 'change'}],
                    region:[{required : true,message: '请选择奖项', trigger: 'change'}],
                    name:[{required : true,message: '请设置人数', trigger: 'blur'}],
                    desc:[{required : true,message: '请设置金额', trigger: 'blur'}],
                    rei:[{required : true,message: '请选择发放方式', trigger: 'change'}]
                }
            }
        },

        created(){

        },
        mounted(){
          this.getData();
        },
        methods: {


            onSubmit(forN) {
                let vm =this;

                this.$refs[forN].validate((valid)=>{
                    if(valid){


                if(this.form.rei=="线上"){
                    var cT=1;
                }else{
                    var cT=2;
                }
             switch(this.form.region){
                 case "特等奖":
                     var jiangxiang=1;
                     break;
                 case "一等奖":
                     var jiangxiang=2;
                     break;
                 case "二等奖":
                     var jiangxiang=3;
                     break;
                 case "三等奖":
                     var jiangxiang=4;
                     break;
                 case "四等奖":
                     var jiangxiang=5;
                     break;
                 case "五等奖":
                     var jiangxiang=6;
                     break;
                 case "六等奖":
                     var jiangxiang=7;
                     break;
                 case "七等奖":
                     var jiangxiang=8;
                     break;
                 case "八等奖":
                     var jiangxiang=9;
                     break;
                 case "其他奖项":
                     var jiangxiang=10;
                     break;
             }

                $.ajax({
                    type:"post",
                    url:"http://appinter.sunwoda.com/active/addActiveList.json",
                    data:{token:'fae4bbf8bc008060da49d06c1189563c',awardCount:this.form.name,activeName:this.form.huodong,awardName:jiangxiang,awardZmount:this.form.desc,createName:window.localStorage.getItem("data"),commentTwo:cT},
                    dataType:"json",
                    success:function (data) {
                        console.log(data)
                        vm.$message(data.message)
                    },
                    error:function (da) {
                        console.log(da);
                    }

                });  }else{
                      vm.$message("创建失败")
                    }
                })
            },

            getData:function () {
                let vm =this;
                $.ajax({
                    type:"post",
                    url:"http://appinter.sunwoda.com/active/findAllActive.json",
                    data:{token:'fae4bbf8bc008060da49d06c1189563c',createPersion:window.localStorage.getItem("data")},
                    dataType:"json",
                    success:function (data) {
                        console.log(data)
                        vm.tableData=data.dataInfo.listData;

                        console.log(vm.tableData);

                    },

                    error:function (da) {
                        console.log(da);
                    }

                });
            },

                      chongzhi:function () {
                var xinyeme=document.getElementById("www");
                            xinyeme.reset();
            },


        computed:{

        },

     }
    }
</script>
