//mydog&samsung

//main_gnb slide
$(document).ready(function(){
    $("#gnb").hover(
    function(){
        $('.sub_menu').stop().fadeIn('fast');
        $(".menu_box").stop().slideDown();
    },
    function(){
        $('.sub_menu').stop().fadeOut('fast');
        $(".menu_box").stop().slideUp();
    });
});



//select toggle JS
$(document).ready(function(){
    $(".select .arrow").toggle( //기능을 2번 부여하는것
        function(){ //첫번째 기능
        $(".select .family_site").fadeIn('fast');
        //    중괄호로 쓰고 : 으로 사용하면 css를 여러번 입력할 수 있다. 또 다른것을 사용하고 싶다면 쉼표(,)로 구분해야 한다
        //    $(".select .arrow").css('background-image',"url(common/images/up.svg)"); 이 방법은 css를 한번만 입력할 수 있다
    }, function(){ //두번째 기능
        $(".select .family_site").fadeOut('fast');
    });
});

// $(document).ready(function(){
//     $(".main_menu>.depth").hover(
//     function(){
//         $(this).children(".sub_menu").stop().fadeIn('fast');
//     },
//     function(){
//         $(this).children(".sub_menu").stop().fadeOut('fast');
//     });
// });


// top_btn
$(document).ready(function(){

    $("#top_btn").click(function(){  //top버튼 클릭시 이동
        $("html,body").stop().animate({"scrollTop":0},1000); //html, body 태그 기점으로 1.4초 정도 위로 이동
    });
    $(window).on("scroll",function(){
        let scroll = $(window).scrollTop(); //윈도우창의 화면 높이를 측정해서
        if(scroll>=1100){  //측정 높이가 1080이 넘어가면 기능을 수행해라
            $("#top_btn").fadeIn('slow'); //1000이 넘어가면 버튼을 천천히 보여라
        } else {
            $("#top_btn").fadeOut('slow'); //1000이 넘어가지 않으면 화면에서 버튼 숨겨
        }
    });
});