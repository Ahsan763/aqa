$(document).ready(function(){

	$(".testimonial-slider").owlCarousel({
		margin:10,
		nav:false,
		items:1,
		dots:true,
		touchDrag: true,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed : 1200,
        autoplayHoverPause:true,
		responsive:{
			360:{
				items:1
			},
			768:{
				items:1
			}
		}

	});
});