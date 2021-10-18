//slideShow
var index=1;
function roll(n){       //cuộn
    showSlide(index+=n);
}
function change(n){     //đổi
    showSlide(index=n);
}
function showSlide(n){
    var a=document.getElementsByClassName("slide");
    var b=document.getElementsByClassName("dot");
    if(n<1){
        index=a.length
    }
    if(n>a.length){
        index=1
    }
    for(var i=0;i<a.length;i++){
        a[i].style.display="none";
    }
    for(var i=0;i<b.length;i++){
        b[i].className=b[i].className.replace(" Dot", "");
    }
    a[index-1].style.display="block";
    b[index-1].className +=" Dot";
}
setInterval(function(){
    roll(1);
},5000);

//menu tablet
function myFunction(x) {
    x.classList.toggle("change");
    var y=document.getElementById("sub");
    var z=document.getElementById("subcontent");
    y.classList.toggle("sub-toggle");
    z.classList.remove("subcontent-blocknext");
}
function myFunctionProducts() {
    var y=document.getElementById("subcontent");
    y.classList.toggle("subcontent-blocknext");
}
//product
function Load(){
    var x=document.getElementsByClassName("product")
    for(var i=0;i<x.length;i++){
        if(i>11){
            x[i].className +=" conceal";
        }
    }
}
function Load1(){
    var x=document.getElementsByClassName("product")
    for(var i=0;i<x.length;i++){
        if(i<16){
            x[i].style.display="block";
        }
    }
}

//trang 1
function Click1(){
    var x=document.getElementsByClassName("product")
    for(var i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    for(var i=0;i<x.length;i++){
        if(i<16){
            x[i].style.display="block";
        }
    }
}
//trang 2
function Click2(){
    var x=document.getElementsByClassName("product")
    for(var i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    for(var i=0;i<x.length;i++){
        if(16<=i&&i<32){
            x[i].style.display="block";
        }
    }
}
//trang 3
function Click3(){
    var x=document.getElementsByClassName("product")
    for(var i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    for(var i=0;i<x.length;i++){
        if(32<=i){
            x[i].style.display="block";
        }
    }
}

function down(){    //down arrow
    var x=document.getElementsByClassName("conceal");
    var d=document.getElementById("downImg");
    var u=document.getElementById("upImg");
    for(var i=0;i<x.length;i+1){
      x[i].className=x[i].className.replace(" conceal","");
    }
    d.style.display="none";
    u.style.display="block";
    u.style.paddingTop="10px";
  }
function up(){     //up arrow
    var x=document.getElementsByClassName("product");
    var d=document.getElementById("downImg");
    var u=document.getElementById("upImg");
    for(var i=0;i<x.length;i++){
      if(i>11){
        x[i].className +=" conceal";
      }
    }
    d.style.display="block";
    u.style.display="none";
}


// Jquery
$(document).ready(function(){

    //Đổi ảnh sản phẩm
    $(".imgSub img").click(function(){
        var x=$(this).attr("src");
        $(this).parent().parent().parent().parent().children(":first").html(`<img src="${x}" id="main">`) 
    })
    //ẩn gototop
    $("#gototop").hide()

    //Scroll
    $(window).scroll(function(){
        if($(this).scrollTop()>=150){
            $("nav").css({
                "position": "fixed",
                "opacity":"0.9",
                "right":"0",
                "left":"0",
                "top":"0",
            })
        }else{
            $("nav").css({
                "position": "relative",
                "opacity":"1",
                "right":"0",
                "left":"0",
                "top":"0",
            })
        }
        if($(this).scrollTop() >=300)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")
    })

    //click gototop 
    $("#gototop").click(function(){
        $("html, body").animate({
            scrollTop:0
        },2000)
    })

    //phân trang
    $(".pagination a").click(function(){
        $(".pagination a").css({
            'background-color': 'white',
            "color":"gray",
        })
        $(this).css({
            'background-color': 'blue',
            "color":"white",
        })
    })

    //click submit email
    $("#submit").click(function(){
        var x=$(this).parent().children(":first").val();
        if(x){
            alert("Đăng kí thành công")
        }
        else{   
            alert("Hãy nhập đầy đủ thông tin")
        }
    })

    //click submit contact
    $("#submit2").click(function(){
        var x=$("#contact-name").val();
        var y=$("#contact-phone").val();
        var z=$("#contact-address").val();
        var a=$("#contact-email").val();
        var b=$("#contact-title").val();
        var c=$("#contact-description").val();
        if(x&&y&&z&&a&&b&&c){
            alert("Gửi thông tin cho Catsa thành công")
        }
        else{   
            alert("Hãy nhập đầy đủ thông tin")
        }
    })
})
