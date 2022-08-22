var Button = $(".profile");
var popup = $(".popupBox");
var popupClose = $('.popupInner > ul > .popupClose')
var Button1 = $(".bannerIcon");
var popup1 = $(".popupBox1");
var Button2 = $(".info > ul > li:nth-child(2)");
var popup2 = $(".popupBox2");



Button.on("click",function(){
    //기본이벤트 제거
    event.preventDefault();


    if(popup.hasClass("active")) {
        popup.removeClass('active');
        $("html body").css("overflow","visible")
    }else{
        popup.addClass("active");
        $('.dim').addClass('on');
        $("body").css("overflow","scroll")
        $("html").css("overflow","hidden")

    }


    // 스크롤 휠만 안먹게함
    // $('.wrap').on('scroll touchmove mousewheel', function(event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    // });

});

Button1.on("click",function(){
    //기본이벤트 제거
    event.preventDefault();


    if(popup1.hasClass("active")) {
        popup1.removeClass('active');
        // $("html body").css("overflow-y","visible")
    }else{
        popup1.addClass("active");
        $('.dim').addClass('on');
        // $("html body").css("overflow-y","hidden")
        $("body").css("overflow","scroll")
        $("html").css("overflow","hidden")
    }

});
Button2.on("click",function(){
    //기본이벤트 제거
    event.preventDefault();



    if(popup2.hasClass("active")) {
        popup2.removeClass('active');
    }else{
        popup2.addClass("active");
        $('.dim').addClass('on');
        $("body").css("overflow","scroll")
        $("html").css("overflow","hidden")
    }

});

$('.dim').on('click',function (){
    popup.removeClass("active");
    popup1.removeClass("active");
    popup2.removeClass("active");
    $('.dim').removeClass('on');
    $("html").css("overflow","visible")
})

popupClose.on("click",function(){
    event.preventDefault();
    popup.removeClass("active")
    popup1.removeClass("active")
    $('.dim').removeClass('on');
    $("html").css("overflow","visible")
});


