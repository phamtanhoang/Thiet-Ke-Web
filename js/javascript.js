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
//Kiểm tra sản phẩm đã có trong giỏ hay chưa
function KT(name){
    var products=document.getElementsByClassName("item-info-name-cart");
    for(var i=0; i<products.length; i++){
        if(products[i].innerHTML==name)
            return i;
    }
    return -1;
}
//Tổng tiền giỏ hàng và cập nhật số lượng sản phẩm
function capnhatTongtien() {
    var giohang = document.getElementsByClassName('cart-total')[0]
    var hang_GioHang = document.getElementsByClassName('item-column-cart')
    var tongTien = 0;
    var tongSp = 0;
    for (var i = 0; i < hang_GioHang.length; i++) {
        var hang = hang_GioHang[i]
        var _Gia = hang.getElementsByClassName('item-info-price-cart')[0]
        var _Soluong = hang.getElementsByClassName('soluong-cart')[0];
        var gia = parseFloat(_Gia.innerText.replace('₫', '').replace('.', ''))
        var sl = _Soluong.value // giá trị số lượng
        tongTien += gia * sl; // tổng tiền = giá * sl
        tongSp+=sl; 
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = tongTien + "₫";
    var SL_input = document.getElementsByClassName('soluong-cart')
    for (var i = 0; i < SL_input.length; i++) {
        var input = SL_input[i]
        input.addEventListener('change', checkChangeSL)
    }

    tongSp=parseFloat(tongSp);
    var sum = 0;
    while (tongSp) {
        sum += tongSp % 10;
        tongSp = Math.floor(tongSp / 10);
    }
    document.getElementsByClassName('sumProducts')[0].innerText = sum;
    document.getElementsByClassName('sumProducts')[1].innerText = sum;
    UpdateSessionStorage();
}
//Kiểm tra số lượng có tăng hay không;
function checkChangeSL(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    capnhatTongtien()
}
//Lưu thông tin giỏ hàng vào sessionStorage
var Cart = new Array();
function UpdateSessionStorage(){
    sessionStorage.clear();
    Cart = new Array(); 
    var productsInCart=document.getElementsByClassName('item-column-cart');
    for(var i=0;i<productsInCart.length;i++){
        var hinh=productsInCart[i].children[0].children[0].src;
        var ten=productsInCart[i].children[1].children[0].innerText;
        var gia=productsInCart[i].children[1].children[1].innerText;
        var soluong=productsInCart[i].children[1].children[2].children[1].value;
        var sp=new Array(hinh,ten,gia,soluong);
        Cart.push(sp);
        sessionStorage.setItem("giohang",JSON.stringify(Cart));
    }
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

    //hiệu ứng nút phân trang
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
     //Thêm vào giỏ hàng
     $(".addCart").click(function(){
        var img=$(this).parent().parent().children(":first").children(":first").children(":first").attr("src");
        var name=$(this).parent().parent().parent().children(".info").children(":first").text();
        var price=$(this).parent().parent().parent().children(".info").children(":last").text();
        if(KT(name)==-1){
            $(".cart-total-title").before(`<div class="item-column-cart">
                                    <div class="item-img-cart">
                                    <img class="image-cart" src="${img}" />
                                    </div>
                                    <div class="item-info-cart">
                                        <p class=item-info-name-cart>${name}</p>
                                        <p class="item-info-price-cart">${price}</p>
                                        <div>
                                            <p>Số lượng: </p>
                                            <input class="soluong-cart" type="number" min="1" value = "1">
                                        </div>
                                    </div>
                                    <div class="item-clear-cart">
                                        <button class="btn-remove" type="button">Xóa</button>
                                    </div>
                                </div>`)
        // Xóa sản phẩm
            $(".btn-remove").click(function(){
                $(this).parent().parent().remove();
                capnhatTongtien();
            })
        }
        else{
            var soluong=$('.soluong-cart').eq(KT(name)).val();
            soluong=parseFloat(soluong)+1;
            $('.soluong-cart').eq(KT(name)).val(soluong);
        }
        capnhatTongtien();
    })
     //Ẩn giỏ hàng
    $(".cart-total").hide()
    //Hiện giỏ hàng
    $(".img-Cart").click(function(){
        $(".cart-total").toggle();
    })
    $(".cartTablet").click(function(){
        $(".cart-total").toggle();
    })
    // Lấy thông tin giỏ hàng trong sessionStogare và in ra
    var gh=sessionStorage.getItem("giohang");
    var Cart=JSON.parse(gh);
    if(Cart!=null){
        var i=0;
        $.each(Cart, function() {
            $(".cart-total-title").before(`<div class="item-column-cart">
                                            <div class="item-img-cart">
                                            <img class="image-cart" src="${Cart[i][0]}" />
                                            </div>
                                            <div class="item-info-cart">
                                                <p class=item-info-name-cart>${Cart[i][1]}</p>
                                                <p class="item-info-price-cart">${Cart[i][2]}</p>
                                                <div>
                                                    <p>Số lượng: </p>
                                                    <input class="soluong-cart" type="number" min="1" value = "${Cart[i][3]}">
                                                </div>
                                            </div>
                                            <div class="item-clear-cart">
                                                <button class="btn-remove" type="button">Xóa</button>
                                            </div>
                                        </div>`)
            i++;
        });
            // Xóa sản phẩm
            $(".btn-remove").click(function(){
                $(this).parent().parent().remove();
                capnhatTongtien();
            })
        capnhatTongtien();
    }  
})