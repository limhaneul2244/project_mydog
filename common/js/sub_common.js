//sub page tab toggle
$(document).ready(function(){
    $(".sub_level01>.submenu").toggle(
        function(){ //첫번째 기능
        $(".section01").fadeIn('fast');
        $(".arrow_icon").css({'background-image':"url(../images/arrow_up.png)"});

    }, function(){ //두번째 기능
        $(".section01").fadeOut('fast');
        $(".arrow_icon").css({'background-image':"url(../images/arrow_down.png)"});
    });
});

$(document).ready(function(){
    $(".sub_level02>.submenu01").toggle(
        function(){ //첫번째 기능
        $(".section02").fadeIn('fast');
        $(".arrow_icon02").css({'background-image':"url(../images/arrow_up.png)"});

    }, function(){ //두번째 기능
        $(".section02").fadeOut('fast');
        $(".arrow_icon02").css({'background-image':"url(../images/arrow_down.png)"});
    });
});