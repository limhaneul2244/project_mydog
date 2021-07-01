//mydog&samsung

//main_gnb slide 와이드~일반PC hover했을때 sub_menu 내려옴 
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

//대형~모바일까지 nav_icon 클릭시 menu_bg 보임
$(document).ready(function(){
    $(".m_nav_icon").click(function(){ //menu_icon 클릭하면 아래와 같이 실행
        let documentHeight = $(document).height(); //마크업한 높이
        let windowHeight = $(window).height(); //기기로 접속했을때의 높이
  
        $(".menu_bg").css('height',documentHeight); //마크업의 높이만큼 h가짐 (도큐먼트는 문서라는 뜻)
        $("#gnb").css('height',windowHeight); //접속하는 기기별 높이만큼만 h 가짐
        
        $(".menu_bg").show(); //menu_bg 보임
        $("#gnb").animate({left:'0', opacity:'1'},"normal");  //#gnb에 왼쪽에서 날아와서 보이도록
    });
    $(".close_btn, .menu_bg").click(function(){ //.close_btn, .menu_bg 다시 클릭하면
        $(".menu_bg").hide(); //menu_bg 숨김
        $("#gnb").animate({left:'-100%', opacity:'0'},"fast"); //gnb 다시 왼쪽으로 들어감
    });
});

// main_menu 슬라이드
$(document).ready(function(){
    $(".depth").click(function(){  //depth 클릭
        $(".sub_menu").hide();  //sub_menu 숨기고 시작
        $(this).next(".sub_menu").slideDown('slow'); //클릭한 this의 sub_menu 다음에 있는(next) 애들만 보여라
    });
});



//footer영역 패밀리 사이트 select toggle JS
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