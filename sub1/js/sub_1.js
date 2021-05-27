
//sub page toggle
$(document).ready(function(){
    $(".sub_level01>.submenu").toggle(
        function(){ //첫번째 기능
        $(".section01").fadeIn('fast');
        $(".arrow_icon").css({'background-image':"url(../../common/images/arrow_up.png)"});

    }, function(){ //두번째 기능
        $(".section01").fadeOut('fast');
        $(".arrow_icon").css({'background-image':"url(../../common/images/arrow_down.png)"});
    });
});

$(document).ready(function(){
    $(".sub_level02>.submenu01").toggle(
        function(){ //첫번째 기능
        $(".section02").fadeIn('fast');
        $(".arrow_icon02").css({'background-image':"url(../../common/images/arrow_up.png)"});

    }, function(){ //두번째 기능
        $(".section02").fadeOut('fast');
        $(".arrow_icon02").css({'background-image':"url(../../common/images/arrow_down.png)"});
    });
});
//--------------------------------------------------------------------

//tab menu
$(document).ready(function(){
    $(".tab_btn>.current").click(function(){
        let idx = $(this).index();  //idx (index)에게 번호를 지정
        
        console.log(idx); //실행해서 불러옴
        $(".tab_btn>.current").removeClass("on"); //tab_btn아래 a를 클릭하면 on으로 되어 잇는 것을 제거해라
        $(this).addClass("current");  //전부제거한 뒤 클릭한 on을 활성화
        $(".tab").eq(idx).show().siblings(".tab").hide();
        //tab의 0번째 즉 탭내용1을 불러오고 나머지 형제들은 숨겨라
    });
});
//--------------------------------------------------------------------