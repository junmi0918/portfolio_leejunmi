//main.js

$(function(){
    AOS.init();
});

// 작품 필터링하여 보여주기

$(function(){
    let dutation = 400;
    
    // all
    $('#btn-all').on('click',function(){
        $('#works .list li')
        .show(dutation);
    })

    // web
    $('#btn-web').on('click',function(){
        $('#works .list li')
        .hide(dutation)
        .filter('.web')
        .show(dutation);
    })

    //graphic
    $('#btn-home').on('click',function(){
        $('#works .list li')
        .hide(dutation)
        .filter('.home')
        .show(dutation);
    })
    

    //home
    $('#btn-mobile').on('click',function(){
        $('#works .list li')
        .hide(dutation)
        .filter('.mobile')
        .show(dutation)
    });
    
});

// 화면 크기 확인 함수
function myFunction(x) {
    if (x.matches) { 
        console.log('pc화면')
        $('#nav').show();
    } else {
        console.log('모바일')
    }
  }

  // 자바스크립트 미디어 쿼리 감지 
  var x = window.matchMedia("(min-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes  
  

$(function(){
    // 메인메뉴 열기
    $('.btn-toggle').on('click',function(){
      $('#nav').show();
    })
  
    // 메인메뉴 닫기
    $('.btn-close').on('click',function(){
      $('#nav').hide();
    });

    // 메뉴 큰 화면때 보이기
    $('#nav')
    
});

// // 워크

// $(function(){
//     var btn = $('#sub_works .works_bnt');
// var body = $("body");

// btn.on("click", function() {
//   body.toggleClass("hide-images");
// });
// })