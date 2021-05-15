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


// $(document).ready(function(){
//     $(".main_menu>.depth").hover(
//     function(){
//         $(this).children(".sub_menu").stop().fadeIn('fast');
//     },
//     function(){
//         $(this).children(".sub_menu").stop().fadeOut('fast');
//     });
// });
