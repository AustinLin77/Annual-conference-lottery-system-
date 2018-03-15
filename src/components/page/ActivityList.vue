<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            </el-breadcrumb>

        </div>
<div style="width: 55%">
    <el-table :data="tableData"  style="width: 100%">
        <el-table-column label="创建时间" width="180" prop="createTime">

        </el-table-column>
        <el-table-column label="活动名称" width="190" prop="activeName">

        </el-table-column>

        <el-table-column label="创建人" width="180" prop="createPersion">

        </el-table-column>
        <el-table-column label="操作" >
            <template slot-scope="scope">
                <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                <el-button
                    size="mini"
                    @click="handleEdit(inside,scope.$index, scope.row)">修改</el-button>
            </template>



        </el-table-column>
    </el-table>
</div>
<div v-show="xiugai" style="position: fixed;top:0;left: 0;width: 100%;height: 100%;display: flex;justify-content: center;align-items: center">
    <el-form ref="inside" :model="inside" label-width="80px" labelPosition="left" style="width:50%;height:50%;padding: 10px;padding-top: 15px;;border-radius: 15px;background-color: #dddddd;z-index: 99999">
        <el-form-item label="活动名称">
            <el-input v-model="inside.activeName" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="创建部门">
            <el-input v-model="inside.createPersion" :disabled="true" style="width:250px"></el-input>
        </el-form-item>
        <el-form-item  label="创建时间">
            <el-col style="width: 250px">
                <el-date-picker  type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>

            <el-col style="margin-left: 12px;width: 250px">
                <el-time-picker  type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="备注" >
            <el-input type="textarea" v-model="form.desc" style="width: 512px" :rows='3'></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即修改</el-button>
            <el-button @click="guanbi">取消</el-button>
        </el-form-item>
    </el-form>
</div>
    </div>

</template>


<script>

    export default {


        data:function(){

return{
    tableData: [],
    inside:{},


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
    xiugai:false,

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
            onSubmit() {
                let vm = this;

                $.ajax({
                    type:"post",
                    url:"http://appinter.sunwoda.com/active/modifyActive.json",
                    data:{token:'fae4bbf8bc008060da49d06c1189563c',id:window.localStorage.getItem("bianma"),activeName:"inside.activeName"},
                    dataType:"json",
                    success:function (data) {
                        vm.$message("修改成功");


                    },

                    error:function (da) {
                        console.log(da);
                    }

                });  this.xiugai=false;
            },
            getData:function () {
                let vm = this;
                $.ajax({
                    type:"post",
                    url:"http://appinter.sunwoda.com/active/findAllActive.json",
                    data:{token:'fae4bbf8bc008060da49d06c1189563c',createPersion:window.localStorage.getItem("data")},
                    dataType:"json",
                    success:function (data) {
                        vm.tableData=data.dataInfo.listData

                        for(var i = 0;i<vm.tableData.length;i++){
                        console.log(vm.tableData[i].createTime);

                            vm.tableData[i].createTime=vm.tableData[i].createTime.substring(0,12)
                            vm.tableData[i].createTime=vm.tableData[i].createTime.substring(0,4)+"-"+vm.tableData[i].createTime.substring(4,6)+"-"+vm.tableData[i].createTime.substring(6,8)+" "+vm.tableData[i].createTime.substring(8,10)+":"+vm.tableData[i].createTime.substring(10,12)
                            console.log(vm.tableData[i].createTime)
                        }
                    },

                    error:function (da) {
                        console.log(da);
                    }

                });
            },

            guanbi:function () {
                this.xiugai=false;
            },
            handleDelete(index, row) {
                window.localStorage.setItem("haoma",row.id);
               let vm = this;
                $.ajax({
                    type:"post",
                    url:"http://appinter.sunwoda.com/active/deleteActive.json",
                    data:{token:'fae4bbf8bc008060da49d06c1189563c',id:window.localStorage.getItem("haoma")},
                    dataType:"json",
                    success:function (data) {
                        vm.$message(data.message);
                       vm.getData();
                    },

                    error:function (da) {
                        console.log(da);
                    }

                });

            },
            handleEdit(inside,index, row) {
                let vm=this;
                vm.inside=row;
                this.xiugai=true;
                console.log(vm.inside)
            window.localStorage.setItem("bianma",row.id);
                console.log(window.localStorage.getItem("bianma"))
            },

        }
    }
</script>



