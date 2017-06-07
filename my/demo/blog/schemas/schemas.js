/**
 * Created by Administrator on 2017/5/22 0022.
 */
var mongoose=require('mongoose');
var schema=mongoose.Schema;

var artSchema=new schema({
    tit:String,
    intro:String,
    detail:String
});
module.exports=artSchema;