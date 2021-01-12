$(document).ready(function(){
	
	$('i.icon').click(function(){
		
		$('.nav-list').slideToggle()
	});
	$(window).scroll(function(){
	var sc = $(this).scrollTop();
		if(sc >100) {
			$('header').addClass("sick");
		}
		else{
			$('header').removeClass("sick");
		}
			if(sc > 1800) {
		$('.timer').countTo();
		$(window).off('scroll');
	}
		if(sc > 600) {
			$('.scrollTop').fadeIn();
		}else {
			$('.scrollTop').fadeOut();
		}
});
	
	$('.port_button button').click(function(){
		 $(this).addClass('port_active').siblings().removeClass('port_active');
		
		var filters = $(this).attr('id');
		
		if(filters==='all'){
			$('.port_imgs > div ').fadeIn();
		}else {
			$('.port_imgs > div').fadeOut();
			$('.port_imgs').contents().filter('.'+ filters).fadeIn();
		}
	});
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
			 items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
		
		
		
	});
	
	$('.c-panal li').click(function(){
		$(this).addClass('port_active').siblings().removeClass('port_active');
		var p = $(this).data('role');
		$('.content > div').hide();
		$('.content').contents().filter('#' + p).fadeIn();
		
	});

	$('.pop').magnificPopup({
		type:'iframe',
	});
	$('.slick').slick({});
	
	$('.scrollTop').click(function(){
		
		$('body,html').animate({
			scrollTop:0
		},1000);
		
	});
	$('.list a').click(function(){
		
		$('body,html').animate({
			scrollTop:$($(this).attr('href')).offset().top - 100
		},1000);
		
		
	});

});









