//main slider

$(document).ready(function () {
    start()
    let imgs = $(".slide_img>li").length;
    let now = 0;

    function start() {
        $(".slide_img>li").eq(0).siblings().css({
            "left": '-1920px'
        }); //첫번째 li에 있는 형제 이외에는 왼쪽으로 이동
        setInterval(function () {
            slide();
        }, 2000); //이동되는 간격 시간은 2초
    }

    function slide() { //슬라이드의 함수'
        ++now;
        if (now >= imgs) {
            now = 0;
        }

        // $(".slide_img>li").eq(now - 1).css({
        //     "left": '-1920px',
        //     "transition": '0'
        // });

        $(".slide_img>li").eq(now).css({
            "left": '0px'
        });

        $(".slide_img>li").eq(now - 1).css({
            "left": '1920px'
        });

        $(".slide_img>li").eq(now - 2).css({
            "left": '-1920px',
            "transition": 'all 0'
        });



        // if (now > 1) {
        //     $(".slide_img>li").eq(now - 2).css({
        //         "left": '-1920px'
        //     });
        // }
    }
});