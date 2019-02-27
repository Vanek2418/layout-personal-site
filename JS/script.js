$(document).ready(function(){
    $('.slider-portfolio').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="portfolio-left_arrow"><img src="images/left-arrow.png" alt="Назад"></div>',
        nextArrow: '<div class="portfolio-right_arrow"><img src="images/right-arrow.png" alt="Назад"></div>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 565,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });
  });       

  var keys = {37: 1, 38: 1, 39: 1, 40: 1, 33: 1, 34: 1, 32: 1, 35: 1, 36: 1};


  function preventDefault(e){
      e = e || window.event;
      if (e.preventDefault)
      e.preventDefault();
      e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
      if(keys[e.keyCode]){
          preventDefault(e);
          return false;
      }
  }
  function disableScroll() {
    if (window.addEventListener) 
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove  = preventDefault;
    document.onkeydown  = preventDefaultForScrollKeys;
  }
  
  function enableScroll() {
      if (window.removeEventListener)
          window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.onmousewheel = document.onmousewheel = null; 
      window.onwheel = null; 
      window.ontouchmove = null;  
      document.onkeydown = null;  
  }
  

$('.phone-open').on('click', function(){
    $('.popup-container').fadeIn(1000, disableScroll);
});


$('.close').on('click', function(){
    $('.popup-container').fadeOut(1000, enableScroll);
});

$('.detailed-open').on('click', function(){
    $('.popup-container_2').fadeIn(1000, disableScroll);
});


$('.close').on('click', function(){
    $('.popup-container_2').fadeOut(1000, enableScroll);
});
