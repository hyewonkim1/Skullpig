
// 작은 이미지 클릭하면 큰 이미지
document.addEventListener('DOMContentLoaded',()=>{

  let mainImg = document.querySelector('.pro_top > img')
  let thumImg = document.querySelectorAll('.pro_bottom > li')

  for(let i=0; i<thumImg.length; i++) {
    thumImg[i].addEventListener('click', function(){
      mainImg.src = this.children[0].src})}

})

// 카드보기 버튼 클릭 모달창 
window.onload = function() {
 
  function onClick() {
      document.querySelector('.modal_wrap').style.display ='block';
      document.querySelector('.black_bg').style.display ='block';
  }   
  function offClick() {
      document.querySelector('.modal_wrap').style.display ='none';
      document.querySelector('.black_bg').style.display ='none';
  }

  document.getElementById('modal_btn').addEventListener('click', onClick);
  document.querySelector('.modal_close').addEventListener('click', offClick);

};

// 카드보기 안에 tab

$(function(){
  let tab = $('.modal_wrap .tab li')
  let sheet = $('.modal_wrap .sheet div')

  tab.click(function(){
    let target = $(this);
    let i = target.index();

    tab.removeClass('on');
    tab.eq(i).addClass('on');

    sheet.removeClass('on_sheet');
    sheet.eq(i).addClass('on_sheet');
  })

})



