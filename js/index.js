$(".h-slide li a img").hide();
$(".h-slide li:first a img").fadeIn(1500);

let imgCount = 2;
let nowCount = 0;

function slide(){
  nowCount = (nowCount == imgCount) ? 0 : nowCount += 1;
  $(".h-slide li a img").eq(nowCount - 1).fadeOut(1500);
  $(".h-slide li a img").eq(nowCount).fadeIn(1500);
}
setInterval(slide, 3000);



$(".h-gnb>li").hover(function(){
  $(this).find(".h-sub").stop().slideDown();},
  function(){$(this).find(".h-sub").stop().slideUp();
});