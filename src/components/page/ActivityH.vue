<template>
<div class="wrap">
    <div class="prize_con">
        <P class="prize_grade"><Span>{{name}}</Span></P>
        <p class="prize_grade">{{ranking}}</p>
        <div class="prize_list vetically">
            <ul>
                <li>000000000</li>
                <li>000000000</li>
                <li>000000000</li>
                <li>000000000</li>
                <li>000000000</li>
                <li>000000000</li>
                <li>000000000</li>
                <li>000000000</li>
                <li>000000000</li>
                <li>000000000</li>
            </ul>
        </div>
        <p  class="start" @click="randomSelect(10)"><img src="../../../static/img/prize_start.jpg" alt=""></p>
    </div>
</div>
</template>
<script>
    export default{
        data:function () {
            return{
                jjjxx:"",
                ranking:"",
                li :"",
                tableData:[],
                form:{
                    huodong:" "
                      },
                arr : [],
                code1 : [],
                code2 : [],
                code3 : [],
                code4 : [],
                code5 : [],
                code6 : [],
                code7 : [],
                code8 : [],
                code9 : [],
                code10 : [],
                name:'年会抽奖',
                level:1,
                myNum:"",
                acount:0,
                pattern:0,
                alevel:1,
                jiangxiang:[]
            }
        },
     mounted:function () {
          this.getData();
          this.control();
     },

    methods:{
    /*随机所有的code并且不重复*/
            randomSelect:function (num) {
                  let vm=this;
                  if(vm.level==1){
                     vm.level=0;
                     $(".start").find("img").attr("src","../../../static/img/prize_stop.jpg");
                      var c1=vm.code1;
                      var c2=vm.code2;
                      var c3=vm.code3;
                      var c4=vm.code4;
                      var c5=vm.code5;
                      var c6=vm.code6;
                      var c7=vm.code7;
                      var c8=vm.code8;
                      var c9=vm.code9;
                      var c10=vm.code10;
                      var a1=vm.arr;
                      var li1=vm.li;

                     if(vm.jiangxiang.indexOf("1")!=-1){
                          vm.ranking="特等奖"
                         vm.jjjxx="1"
                      vm.myNum=setInterval(function () {showRandomNum(10)},20)
                         function showRandomNum(num) { //随机抽取数据显示
                             let vm= this;
                             for(var i = 0; i <c1.length; i++){
                                 a1[i] = i;
                             }
                             a1.sort(function(){
                                 return 0.5 - Math.random();
                             });
                             for(var i = 0; i < num; i++){
                                 var index = a1[i];
                                 li1 += '<li>'+c1[index]+'</li>';
                             }
                             $(".prize_list ul").html(li1)
                         }
                     }else if(vm.jiangxiang.indexOf("2")!=-1){
                         vm.jjjxx="2"
                         vm.ranking="一等奖"
                         vm.myNum=setInterval(function () {showRandomNum(10)},20)
                         function showRandomNum(num) { //随机抽取数据显示
                             let vm= this;
                             for(var i = 0; i <c2.length; i++){
                                 a1[i] = i;
                             }
                             a1.sort(function(){
                                 return 0.5 - Math.random();
                             });
                             for(var i = 0; i < num; i++){
                                 var index = a1[i];
                                 li1 += '<li>'+c2[index]+'</li>';
                             }
                             $(".prize_list ul").html(li1)
                         }
                     }else if(vm.jiangxiang.indexOf("3")!=-1){
                         vm.jjjxx="3"
                         vm.ranking="二等奖"
                         vm.myNum=setInterval(function () {showRandomNum(10)},20)
                         function showRandomNum(num) { //随机抽取数据显示
                             let vm= this;
                             for(var i = 0; i <c3.length; i++){
                                 a1[i] = i;
                             }
                             a1.sort(function(){
                                 return 0.5 - Math.random();
                             });
                             for(var i = 0; i < num; i++){
                                 var index = a1[i];
                                 li1 += '<li>'+c3[index]+'</li>';
                             }
                             $(".prize_list ul").html(li1)
                         }
                     }else if(vm.jiangxiang.indexOf("4")!=-1){
                         vm.jjjxx="4"
                         vm.ranking="三等奖"
                         vm.myNum=setInterval(function () {showRandomNum(10)},20)
                         function showRandomNum(num) { //随机抽取数据显示
                             let vm= this;
                             for(var i = 0; i <c4.length; i++){
                                 a1[i] = i;
                             }
                             a1.sort(function(){
                                 return 0.5 - Math.random();
                             });
                             for(var i = 0; i < num; i++){
                                 var index = a1[i];
                                 li1 += '<li>'+c4[index]+'</li>';
                             }
                             $(".prize_list ul").html(li1)
                         }
                     }else if(vm.jiangxiang.indexOf("5")!=-1){
                         vm.jjjxx="5"
                         vm.ranking="四等奖"
                         vm.myNum=setInterval(function () {showRandomNum(10)},20)
                         function showRandomNum(num) { //随机抽取数据显示
                             let vm= this;
                             for(var i = 0; i <c5.length; i++){
                                 a1[i] = i;
                             }
                             a1.sort(function(){
                                 return 0.5 - Math.random();
                             });
                             for(var i = 0; i < num; i++){
                                 var index = a1[i];
                                 li1 += '<li>'+c5[index]+'</li>';
                             }
                             $(".prize_list ul").html(li1)
                         }
                     }else if(vm.jiangxiang.indexOf("6")!=-1){
                         vm.jjjxx="6"
                         vm.ranking="五等奖"
                         vm.myNum=setInterval(function () {showRandomNum(10)},20)
                         function showRandomNum(num) { //随机抽取数据显示
                             let vm= this;
                             for(var i = 0; i <c6.length; i++){
                                 a1[i] = i;
                             }
                             a1.sort(function(){
                                 return 0.5 - Math.random();
                             });
                             for(var i = 0; i < num; i++){
                                 var index = a1[i];
                                 li1 += '<li>'+c6[index]+'</li>';
                             }
                             $(".prize_list ul").html(li1)
                         }
                     }else if(vm.jiangxiang.indexOf("7")!=-1){
                         vm.jjjxx="7"
                         vm.ranking="六等奖"
                         vm.myNum=setInterval(function () {showRandomNum(10)},20)
                         function showRandomNum(num) { //随机抽取数据显示
                             let vm= this;
                             for(var i = 0; i <c7.length; i++){
                                 a1[i] = i;
                             }
                             a1.sort(function(){
                                 return 0.5 - Math.random();
                             });
                             for(var i = 0; i < num; i++){
                                 var index = a1[i];
                                 li1 += '<li>'+c7[index]+'</li>';
                             }
                             $(".prize_list ul").html(li1)
                         }
                     }else if(vm.jiangxiang.indexOf("8")!=-1){
                         vm.jjjxx="8"
                         vm.ranking="七等奖"
                         vm.myNum=setInterval(function () {showRandomNum(10)},20)
                         function showRandomNum(num) { //随机抽取数据显示
                             let vm= this;
                             for(var i = 0; i <c8.length; i++){
                                 a1[i] = i;
                             }
                             a1.sort(function(){
                                 return 0.5 - Math.random();
                             });
                             for(var i = 0; i < num; i++){
                                 var index = a1[i];
                                 li1 += '<li>'+c8[index]+'</li>';
                             }
                             $(".prize_list ul").html(li1)
                         }
                     }else if(vm.jiangxiang.indexOf("9")!=-1){
                         vm.jjjxx="9"
                         vm.ranking="八等奖"
                         vm.myNum=setInterval(function () {showRandomNum(10)},20)
                         function showRandomNum(num) { //随机抽取数据显示
                             let vm= this;
                             for(var i = 0; i <c9.length; i++){
                                 a1[i] = i;
                             }
                             a1.sort(function(){
                                 return 0.5 - Math.random();
                             });
                             for(var i = 0; i < num; i++){
                                 var index = a1[i];
                                 li1 += '<li>'+c9[index]+'</li>';
                             }
                             $(".prize_list ul").html(li1)
                         }
                     }else if(vm.jiangxiang.indexOf("10")!=-1){
                         vm.jjjxx="10"
                         vm.ranking="其他奖项"
                         vm.myNum=setInterval(function () {showRandomNum(10)},20)
                         function showRandomNum(num) { //随机抽取数据显示
                             let vm= this;
                             for(var i = 0; i <c10.length; i++){
                                 a1[i] = i;
                             }
                             a1.sort(function(){
                                 return 0.5 - Math.random();
                             });
                             for(var i = 0; i < num; i++){
                                 var index = a1[i];
                                 li1 += '<li>'+c10[index]+'</li>';
                             }
                             $(".prize_list ul").html(li1)
                         }
                     }else vm.ranking="结束"

                  }else {
                        vm.level = 1
                        clearInterval(vm.myNum);
                        $(".start").find("img").attr("src", "../../../static/img/prize_start.jpg");

                      Array.prototype.remove = function(val) {
                          var index = this.indexOf(val);
                          if (index > -1) {
                              this.splice(index, 1);
                          }
                      };
                      switch (vm.jjjxx){
                          case "1":
                              vm.jiangxiang.remove("1");
                              break;
                          case "2":
                              vm.jiangxiang.remove("2")
                              break;
                          case "3":
                              vm.jiangxiang.remove("3")
                              break;
                          case "4":
                              vm.jiangxiang.remove("4")
                              break;
                          case "5":
                              vm.jiangxiang.remove("5")
                              break;
                          case "6":
                              vm.jiangxiang.remove("6")
                              break;
                          case "7":
                              vm.jiangxiang.remove("7")
                              break;
                          case "8":
                              vm.jiangxiang.remove("8")
                              break;
                          case "9":
                              vm.jiangxiang.remove("9")
                              break;
                          case "10":
                              vm.jiangxiang.remove("10")
                              break;

                      }
            console.log(vm.jiangxiang)
                        $.ajax({
                                 type: "post",
                                 url: "http://appinter.sunwoda.com/active/transfer.json",
                                 data: {
                                 token: 'fae4bbf8bc008060da49d06c1189563c',
                                     activeName: vm.name,
                                     awardName: vm.jjjxx,
                                     user: window.localStorage.getItem("data"),
                                     commentTwo: vm.pattern
                                       },
                                 dataType: "json",
                                   success: function (data) {
                                    console.log(data)

                              },
                                  error: function (da) {
                                      console.log(da);
               }
                        });
       }
    },
        showRandomNum:function (num) { //随机抽取数据显示
             let vm= this;
            for(var i = 0; i < vm.code.length; i++){
            vm.arr[i] = i;
        }
            vm.arr.sort(function(){
            return 0.5 - Math.random();
        });
            for(var i = 0; i < num; i++){
            var index = vm.arr[i];
            vm.li += '<li>'+vm.code[index]+'</li>';
        }
            $(".prize_list ul").html(vm.li)
     },
        getData:function () {
            let vm =this;
            $.ajax({
                type:"post",
                url:"http://appinter.sunwoda.com/active/findAllPay.json",
                data:{token:'fae4bbf8bc008060da49d06c1189563c',createName:window.localStorage.getItem("data"),commentOne:0},
                dataType:"json",
                success:function (data) {
                    console.log(data)
                    vm.tableData=data.dataInfo.listData;
                     vm.name=vm.tableData[0].actName;
                    console.log(window.localStorage.getItem("data"));
                     vm.pattern=vm.tableData[0].commentTwo;
                         console.log(vm.pattern)
                    console.log(vm.tableData.length)
                    for(var i=0;i<vm.tableData.length;i++){
                        if(vm.tableData[i].awardRanking==1){
                         vm.code1.push(vm.tableData[i].awardNo)

                        }else if(vm.tableData[i].awardRanking==2){
                            vm.code2.push(vm.tableData[i].awardNo)

                        }else if(vm.tableData[i].awardRanking==3){
                            vm.code3.push(vm.tableData[i].awardNo)

                        }else if(vm.tableData[i].awardRanking==4){
                            vm.code4.push(vm.tableData[i].awardNo)

                        }else if(vm.tableData[i].awardRanking==5){
                            vm.code5.push(vm.tableData[i].awardNo)

                        }else if(vm.tableData[i].awardRanking==6){
                            vm.code6.push(vm.tableData[i].awardNo)

                        }else if(vm.tableData[i].awardRanking==7){
                            vm.code7.push(vm.tableData[i].awardNo)

                        }else if(vm.tableData[i].awardRanking==8){
                            vm.code8.push(vm.tableData[i].awardNo)

                        }else if(vm.tableData[i].awardRanking==9){
                            vm.code9.push(vm.tableData[i].awardNo)

                        }else {
                            vm.code10.push(vm.tableData[i].awardNo)

                        }
                     }console.log(vm.code10)
                    for(var i = 0;i<vm.tableData.length;i++){
                        if(vm.jiangxiang.indexOf(vm.tableData[i].awardRanking)==-1){
                           vm.jiangxiang.push(vm.tableData[i].awardRanking)
                        }
                    }console.log(vm.jiangxiang)

                },
                         error:function (da) {
                             console.log(da);
                }

            });
        },
//空格键控制开始和停止
        control:function () {
            $(document).keydown(function (event) {
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if (e && e.keyCode == 32) { // 空格键
                    $(".start").click();
                }
            });
        }
    }
    }






</script>

<style>
    *{margin:0;padding:0;}
    img{display:block;}
    i{font-style:normal;}
    .vetically{justify-content:center;align-items:center;display:-webkit-flex;}
    .prize_con{position: absolute;width: 100%;height: 100%;background: url(../../../static/img/firstp_bg.jpg) no-repeat left top / 100% 100%;overflow: hidden;}
    .prize_grade{font-size:80px;color: #ffe9af;text-align: center;margin: 40px auto 0;margin-top: 30px}
    .prize_list{width:85%;height:230px;margin: 8px auto 55px;text-align: center;overflow: hidden;}
    .prize_list ul{width:100%;font-size:0;}
    .prize_list li{display:inline-block;font-size:45px;color:#f1bf90;text-align: center;width:20%;line-height:100px;font-family:Arial;}
    .start{width: 250px;height: 80px;margin:0 auto;cursor:pointer;}
    .prize_set{position: absolute;right: 60px;bottom:140px;font-size: 16px;color: #f7f3e8;line-height: 30px;}
    .prize_set li{display: inline-block;margin-left: 20px;}
    .set_grade select,.set_people input, .set_money input{background: #fff;width:110px;height:36px;border:1px solid #8f0000;margin-left: .1rem;color: #000;padding-left:10px;}
</style>
