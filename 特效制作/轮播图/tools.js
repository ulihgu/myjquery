/* //1.1 jquery对像
$(function(){
    $("#btn").click(function(){
        alert("alala");
    })
}); */

/* //1.2变更申明
function myclick(){
    var inum1 = 10;
    var string ='dadf';
    var bflag = true;
    var anum =[1,2,3,4,5];
    var oobject = {name:'aaa',age:12};
    var fnumber = 10.23;
}
//1.3 击事件
onload = function(){
    document.getElementById('btn').onclick =function(){
        alert("aaaaaaadddd");
    }
} */
//1.4 jquery对像 标签选择器
/* $(function(){
    $("input").click(function(){
        alert("aaa");
    })
}); */
//1.5 偶数行与奇数行
/* $(function(){
    $("p:odd").css("color","red");//偶数行
    $("p:even").css("color","green");//奇数行
    $("p:first").css("color","#fff");//第一个
    $("p:last").css("color","#000");//最后一个

    $("p:first-child").css("color","#000");//最后一个
    $("p:last-child(2)").css("color","#f40");//最后一个

}); */

//1.6 有A标签的DIV
/* $(function(){
    $("div:has(a)").css("color","red");
}); */

//1.7 选择器
/* $(function(){
    //$("a[title]").css("color","red");//属性等于title
    //$("a[href^=www]").css("color","red");//已WWW开头
    $("a[href$=pdf]").css("color","red");
}); */

//1.8 选择器
/* $(function(){
   // $("input[type=button]").attr('disabled',"disabled");
   $(":button").attr('disabled',"disabled");
}); */

//1.9 选择器所有被禁用元素
//$(function(){    
    //$(":disabled").css("color","red");
    //$("div").eq(2).css("color",'red');
    //$("div").eq(2).siblings.css("color",'red');

    /* $("div").not(":eq(2)").css("color",'red');//不包括
    $("div").fillt(":eq(2)").css("color",'red');//不包括 */
    
    //$(".d1").parent().css("color",'red');
    // $(".d1").parents().css("color",'red');
   /*  $(".d1").prev().css("color",'red');//选择的上一个
    $(".d1").next().css("color",'red');//选择的下一个 */
   //alert($(".d1").size());
    //$(".d1").css("color","red");

    //$(".d1").css({"color":"red","font-size":"20px"});
    /* $(".d11").addClass("d1 d2 d3");
    $(".d11").removeClass("d2"); */

    //$(".d11").find("p").css("color","red");
    //alert($("#a1").attr("title"));
    //$("#a1").attr("text","adfqwerwer");
   // $("#a1").attr({"title":"adfqwerwer","id":"a2"});

    //alert($("#a1").html());
    //alert($("#a1").text());
    //$("#a1").text("aaaaaaaa");

    /* alert($("#a1").hasClass("d1"));//判断是否有共同样式
    alert($("#a1").is("a"));//判断是一个A标签吗 */

   /*  $("#d1").append("<p>aa</p>");//添加一个标签
    $("<p>aadd</p>").appendTo("#d1");//把标签加到那个里面去
 */
    //$("<p>aadd</p>").insertBefore("#a1");//插入到什么前面
//});

//$(function(){
    //鼠标事件------------------
    //第一种方法
   /*  $("#d1").mouseover(function(){
        alert("鼠标放上来了");
    })
    $("#d1").mouseout(function () { 
        alert("鼠标移开了");
    }) */
    //第二种方法
    /* $("#d1").hover(function(){
        $("a").text("鼠标放上来了");
    },function(){
        $("a").text("鼠标移开了");
    }); */
//});

//轮播图
var i = 0;
var timer;
$(function(){
    //轮播事件
    //鼠标放上后显示左右按钮
 /*    $("#igs").hover(function(){
            $(".btn").show(); 
    },function(){
            $(".btn").hide();
    }); */

    $(".ig").eq(0).show().siblings().hide();
           showTime(); 
    $(".tab").hover(function(){
        i =$(this).index();
        show();
        clearInterval(timer); //清队轮播
    },function(){
        showTime();
    });

    //点击左边轮动按钮
    $(".btn1").click(function () {  
        clearInterval(timer);
        if(i==0){
            i = 6;
        }
        i--;
        show();
        showTime()
    });
     //点击右边轮动按钮
     $(".btn2").click(function () {  
        clearInterval(timer);
        if(i==5){
            i = -1;
        }
        i++;
        show();
        showTime()
    });
});

function show(){
    $(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}

function showTime(){
    timer = setInterval(function(){
        i++;
        if(i==6)
        {
            i = 0;
        }       
       // $(".ig").eq(i).show().siblings().hide();//第一种效果
        show();   
    },4000);
}