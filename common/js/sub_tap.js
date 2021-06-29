

//--------------------------------------------------------------------

//서브 tab menu
$(document).ready(function(){
    $('#tab_box .tab_con1').show(); //메뉴1의 내용을 보여라

    $('.tab_btn>li').click(function(){ //li를 클릭하면 다음을 실행해라
        let ind = $(this).index(); //ind변수 선언. 
        $('.tab_btn>li>a').removeClass();//li아래 a에 있는 클래스 모두 지워라(비활성화)
        $('a',this).addClass('current');//내가 선택한 a만 활성화해줘
        $('#tab_box .tab').hide(); //tab아래 div는 숨겨라
        $('.tab_con'+(ind+1)).show(); //클릭한 메뉴만 활성화해라 tab_con에다가 ind+1을 연결해줘()
    }); 
});
//--------------------------------------------------------------------