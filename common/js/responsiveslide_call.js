
//rslide,js 사용시  각슬라이드에 id값 설정 #slider4, #slider5
 $(document).ready(function() { 
        //대형~중형 슬라이드
        $("#m_visual_slider").responsiveSlides({
            auto: true,
            pager: false,
            nav: true,
            speed: 800,
            namespace: "callbacks",
            before: function () {
                $('.events').append("<li>before event fired.</li>");
            },
            after: function () {
                $('.events').append("<li>after event fired.</li>");
            }
        });

        //414이하 모바일 버전 슬라이드
        $("#mo_visual_slider").responsiveSlides({
            auto: true,
            pager: false,
            nav: false,
            speed: 800,
            namespace: "callbacks",
            before: function () {
                $('.events').append("<li>before event fired.</li>");
            },
            after: function () {
                $('.events').append("<li>after event fired.</li>");
            }
        });
	});	