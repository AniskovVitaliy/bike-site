$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

if($('.slider__block').length>0){
   $('.slider__block').slick({
      dots:true,
      arrows:false,
      accessibility:false,
      slidesToShow:1,
      autoplaySpeed:3000,
      adaptiveHeight:true,
      nextArrow:'<button type="button" class="slick-next"></button>',
      nextArrow:'<button type="button" class="slick-prev"></button>',
      responsive:[{
         breakpoint:768,
         setting:{}
      }]
   });
}
// $(document).ready(function(){
//    $('.slider__block').slick({
//       arrows:true,
//       dots:true,
//       adaptiveHeight:true,
//       slidesToShow:3,
//       slidesToScroll:3,
//       speed: 500,
//       easing:'ease',
//       infinite:true,
//       initialSlider:0,
//       autoplay:false,
//       autoplaySpeed:1000,
//       pauseOnFocus:true,
//       pauseOnHover:true,
//       pauseOnDotsHover:true,
//       draggable:false,
//       swipe:true,
//       touchThreshold:50,
//       touchMove:true,
//       waitForAnimate:true,
//       centerMode:false,
//       variableWidth:true
//    });
// });

// $(document).ready(function(){
//       $('.slider__block').slick({
//       dots:true,
//       arrows:false,
//       accesibility:false,
//       slidesToShow:1,
//       autoplaySpeed:3000,
//       nextArrow:'<button type="button" class="slick-next"></button>',
//       nextArrow:'<button type="button" class="slick-prev"></button>',
//       responsive:[{
//          breakpoint:768,
//          setting:{}
//       }]
//       });
// });

