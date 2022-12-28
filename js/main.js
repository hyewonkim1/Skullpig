
    $(function(){
      
       $('.btn_top').click(function(e){
        e.preventDefault();
        /*$('html, body').stop().animate({
          scrollTop:0 //화면의 제일 위 좌표.
        },1000);*/

        //1.좌표로 이용
        // $(window).scrollTo({top:0,left:0}, 500);

        //2.플러그인
        //hash 이용.
        $(window).scrollTo(this.hash || 0, 500);


      })//bnt_top click_event

  
        $(".openPopup").on("click", function(event) {  //팝업오픈 버튼 누르면
        $(".login_popup").show();   //팝업 오픈
        $("body").append('<div class="backon"></div>'); //뒷배경 생성
        });
        
        $("body").on("click", function(event) { 
            if(event.target.className == 'login_close' || event.target.className == 'backon'){
                $(".login_popup").hide(); 
                  $(".backon").hide();
            }
          });
     
  




      
    })


    // 회원가입 창 
    function openWindow(){
      let newWin = window.open('join.html')
    }