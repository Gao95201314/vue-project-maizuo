//专门处理片相关接口
var express=require('express');
var router=express.Router();
var async=require('async');
var MongodbClient=require('mongodb').MongodbClient;
var url='mongodb://127.0.0.1:27017/';

//获取影片列表 location:3000/api/film/list
router.get('/list',function(req,res){
  var pageNum=parseInt(req.query.pageNum)||1;//当前的第几页
  var pageSize=parseInt(req.query.pageSize)||5;//每页显示多少页
  var type=parseInt(req.query.type)||1;//影片类型，正在上映or即将上映 1-正在上映 2-即将上映
  //1.需要获取到整个影片的数据条数-根据type来区别。
  //2.根据传过来的参数计算skip limit

   MongodbClient.connect(url,{useNewUrlParse:true},function(err,client){
     if(err){
       //直接返回错误
       console.log('连接数据库失败',err);
       res.json({
         code:1,
         msg:'网络异常。请稍后再试'
       })
     }else{
       var db=client.db('maizuo');
       async.waterfall([
         function(cb){
         var param={},
         if(type===1){
           //正在热映
           param={
             premiereAt:{$lt:new Date().getTime()/1000}
           }
         }else{
           //即将上映
           param={
             premiereAt:{$gte:new Date().getTime()/1000}
           }
         }
         db.collection('films').find(param).count(function(err,num){
           if(err){
             cb(err);
           }else{
             cb(null,num);
           }
         })
         },
         function(num,cb){
          var param={},
          if(type===1){
            //正在热映
            param={
              premiereAt:{$lt:new Date().getTime()/1000}
            }
          }else{
            //即将上映
            param={
              premiereAt:{$gte:new Date().getTime()/1000}
            }
         }
         db.collection('films').find(param).skip(pageSize*pageNum-pageSize).limit(pageSize).toArray(
           function(err,data){
             if(err){
               cb(err);
             }else{
               cb(null,{num:num,data:data});
             }
           })
        }
       ],function(err,result){
         if(err){
           console.log(err);
           re.json({
             code:1,
             msg:'错误'
           })
         }else{
           res.json({
             code:0,
             msg:'ok',
             data:{
               films:result.data,
               total:result.num
             }
           })
         }
         client.close();
       })
     }
   })
})

module.exports=router;
