/**
 * Created by Administrator on 2017/5/22 0022.
 */
var mongoose=require('mongoose');
var artSchema=require('../schemas/schemas');

var artModel=mongoose.model('artModel',artSchema);

module.exports=artModel;