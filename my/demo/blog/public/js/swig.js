/**
 * Created by Administrator on 2017/5/18 0018.
 */
var express=require('express');
var swig=require('swig');
var  data=require('../../box5.18/doml1/listdata');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var app=express();
app.use('/css',express.static(__dirname+'/css'));
app.use('/js',express.static(__dirname+'/js'));
app.engine('html',swig.renderFile);
app.set('views','../box5.19');
app.set('view engine','html');
app.get('/',function (req,res) {
    console.log(__dirname);
    res.render('box3',{
        data:data
    });
});
app.get('/box4',function (req,res) {
    var listId=req.query.id;
    res.render('box4',{
        detData:data[listId-1]
    });
});
swig.setDefaults({cache:false});
app.use(bodyParser.urlencoded({extended:true}));
app.get('/admin',function (req,res) {
    res.render('each');
});
app.post('/admin/add',function (req,res) {
    console.log('5');
    console.log(req.body);
})
mongoose.connect('mongodb://localhost:27017',function (err) {
    if(err){
        console.log('连接失败');
    }else {
        console.log('连接成功');
        app.listen(8088);
    }
});


// app.listen(8084);
// var listdata=require('/listdata');
// app.get('/',function (req,res) {
//
// })