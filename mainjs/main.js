//main slider

$(document).ready(function () {
    start()
    let imgs = $(".slide_img>li").length; //slide_img>li의 개수 (현재 3개이므로 3)
    let now = 0;

    function start() {
        $(".slide_img>li").eq(0).siblings().css({
            "left": '-1920px'
        }); //첫번째 li에 있는 형제 이외에는 왼쪽으로 이동

        setInterval(slide, 4000); // 2초마다 slide()함수 호출
    }

    function slide() { //슬라이드의 함수'
        // now 1증가
        ++now;

        // now가 imgs보다 크거나, 같으면 now를 0으로(다시처음으로) 바꾼다.
        if (now == imgs) {
            now = 0;
        }

        // now번째 li를 left: 0px(가운데)로 오게 한다.
        $(".slide_img>li").eq(now).css({
            "left": '0px', // 0px로 이동
            "transition": 'all 0.8s' // 0.8초동안
        });

        // now가 0일때
        if (now == 0) {
            // 2번째 li는 오르쪽으로 0.8초동안 이동
            $(".slide_img>li").eq(2).css({
                "left": '1920px',
                "transition": 'all 0.8s'
            });

            // 1번째 li는 왼쪽으로 즉시 이동
            $(".slide_img>li").eq(1).css({
                "left": '-1920px',
                "transition": 'all 0s'
            });
        } else { // now가 0보다 클때
            // now - 1 (앞에 있는) li는 0.8초동안 오른쪽으로 이동.
            $(".slide_img>li").eq(now - 1).css({
                "left": '1920px',
                "transition": 'all 0.8s'
            });

            // now - 2 (앞앞에 있는) li는 즉시 왼쪽으로 이동.
            $(".slide_img>li").eq(now - 2).css({
                "left": '-1920px',
                "transition": 'all 0s'
            });
        }
    }
});

// 숫자 카운팅 효과

$(function() {
  var count0 = count2 = count3 = 0;

  timeCounter();

  function timeCounter() {

    id0 = setInterval(count0Fn, 0.5);

    function count0Fn() {
      count0++;
      if (count0 > 1994) {
        clearInterval(id0);
      } else {
        $(".point_red_txt").eq(0).text(count0);
      }

    }

    // id1 = setInterval(count1Fn, 0.5);

    // function count1Fn() {
    //   count1++;
    //   if (count1 > 1994) {
    //     clearInterval(id1);
    //   } else {
    //     $(".point_red_txt").eq(1).text(count1);
    //   }
    // }

    id2 = setInterval(count2Fn, 200.57142857);

    function count2Fn() {
      count2++;
      if (count2 > 12) {
        clearInterval(id2);
      } else {
        $(".point_red_txt").eq(2).text(count2);
      }
    }

    id3 = setInterval(count3Fn, 200.57142857);
    
    function count3Fn() {
      count3++;
      if (count3 > 15) {
        clearInterval(id3);
      } else {
        $(".point_red_txt").eq(3).text(count3);
      }
    }
  }
});
