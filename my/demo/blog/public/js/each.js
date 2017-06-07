/**
 * Created by Administrator on 2017/5/19 0019.
 */
$(function () {
    $('#artpub .btn').on('click',function () {
        $.ajax({
            url:'/admin/add',
            type:'post',
            data:{
                tit:$('#artpub  .tit').val(),
                intro:$('#artpub .intro').val(),
                detail:$('#artpub  .detail').val()
            },
            success:function (data) {
                alert(data);
            }
        });
    });

    $('#artedit  .btn').on('click',function () {
        var thisid=$(this).attr("data-id");
        alert(thisid);
        $.ajax({
            url:'/admin/save',
            type:'post',
            data:{
                id:thisid,
                tit:$('#artedit  .tit').val(),
                intro:$('#artedit .intro').val(),
                detail:$('#artedit  .detail').val()
            },
            success:function (data) {
                alert(data);
            }
        });
});
    $('.oitem').on('click',function () {
        var thisid=$(this).attr('data-id');
         var othis=$(this);
         var contirm=confirm('确定删除')
         if(contirm){
             $.ajax({
                 url:'/admin/lis',
                 type:'post',
                 data:{
                     id:thisid
                 },
             success:function (data) {
                if(data=='删除成功') {
                    othis.closest('tr').remove();
                    alert(data);
                }
             }
             })
         }
    });

    $('#seek').on('click',function () {
        $.ajax({
            url:'/admin/search',
            type:'post',
            data:{
               tit:$('.osearch').val()
            },
            success:function(data){
                if(data==""){
                    alert('你好');
                }
                else{
                var len=data.length;
                var str="";
             for (var i=0;i<len;i++){
                 alert(data[i]._id);
                 str+='<tr><td>'+data[i]._id+'</td><td>'+data[i].tit+'</td><td>'+data[i].intro+'</td><td>'
                     + '<a href="/admin/edit?id='+data[i]._id+'"><button class="btn btn-primary">更改</button></a>'
                     +'<a href="#"><button  class="btn btn-danger oitem" data-id="'+data[i]._id+'">删除</button></a>'
                       + '</td></tr>';
             }

                $('#oarteid').html(str);
            }
            }
        })

    })
})