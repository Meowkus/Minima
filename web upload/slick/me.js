$(document).ready(function(){
	$('.slider').slick({
	nextArrow:'<i class="fa-thin fa-chevron-right slick-next"></i>',
    prevArrow:'<i class="fa-thin fa-angle-left slick-prev"></i>',
	infinite:true,
	appendDots:$('.slickk-dots'),
	dots:true,
	speed:800,
	easing:'ease-out',
	adaptiveHeight:true,
    autoplay:true
	});
});