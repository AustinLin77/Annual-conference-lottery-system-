<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>奖项管理</el-breadcrumb-item>
                <el-breadcrumb-item>奖项列表</el-breadcrumb-item>
            </el-breadcrumb>

        </div>
        <div style="width: 80%">
            <el-table :data="tableData"  style="width: 100%">
                <el-table-column label="创建人" width="180" prop="createName">

                </el-table-column>
                <el-table-column label="奖项名" width="190" prop="awardName">

                </el-table-column>

                <el-table-column label="奖项人数" width="180" prop="awardCount">

                </el-table-column>
                <el-table-column label="奖项金额" width="180" prop="awardZmount">

                </el-table-column>
                <el-table-column label="活动名称" width="180" prop="activeName">


            </el-table-column>
                <el-table-column label="操作" >
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>

                    </template>



                </el-table-column>
            </el-table>
        </div>

    </div>

</template>


<script>

    export default {


        data:function(){

            return{
                tableData: [],



                form: {
                    dept:'',
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''

                },


            }


        },

        mounted:function () {
            this.getData();

        },
        computed: {
        },
        watch:{

        },
        methods: {

            getData:function () {
                let vm = this;
                $.ajax({
                    type:"get",
                    url:"http://appinter.sunwoda.com/active/findAllActiveList.json",
                    data:{token:'fae4bbf8bc008060da49d06c1189563c',createName:window.localStorage.getItem("data")},
                    dataType:"json",
                    success:function (data) {
                        vm.tableData=data.dataInfo.listData;
                        console.log(vm.tableData)
                        for(var i=0;i<vm.tableData.length;i++){
                            console.log(vm.tableData[i].awardName)
                        switch(vm.tableData[i].awardName){
                            case "1":
                                vm.tableData[i].awardName="特等奖";
                                break;
                            case "2":
                                vm.tableData[i].awardName="一等奖";
                                break;
                            case "3":
                                vm.tableData[i].awardName="二等奖";
                                break;

                            case "4":
                                vm.tableData[i].awardName="三等奖";
                                break;
                            case "5":
                                vm.tableData[i].awardName="四等奖";
                                break;
                            case "6":
                                vm.tableData[i].awardName="五等奖";
                                break;
                            case "7":
                                vm.tableData[i].awardName="六等奖";
                                break;
                            case "8":
                                vm.tableData[i].awardName="七等奖";
                                break;
                            case "9":
                                vm.tableData[i].awardName="八等奖";
                                break;
                            case "10":
                                vm.tableData[i].awardName="其他奖项";
                                break;

                        }}

                        },


                    error:function (da) {
                        console.log(da);
                    }

                });
            },



            handleDelete:function(index, row){
                let vm = this;
                for(var i=0;i<vm.tableData.length;i++){
                switch(this.tableData[i].awardName){
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
                }}

                $.ajax({
                    type:"post",
                    url:"http://appinter.sunwoda.com/active/removeActiveList.json",
                    data:{token:'fae4bbf8bc008060da49d06c1189563c',activeName:row.activeName,createName:window.localStorage.getItem("data"),awardName:jiangxiang},
                    dataType:"json",
                    success:function (data) {
                        console.log(data)
                        vm.getData();
                        vm.$message(data.message);

                    },

                    error:function (da) {
                        console.log(da);
                    }

                });

            }



        }
    }
</script>



