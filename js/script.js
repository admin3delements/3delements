$(document).ready(function(){


			$('.secondary .submenu').hide()	
			$('.email-form').hide()
			$('.socialmedia-links').hide()
			
			$('ul.menu li a').click(function(){
			var r =$(this).parent().attr('id');				
			$('.submenu').slideUp()
			$('.secondary .'+r).slideDown();			
			$('.item a').removeClass('current')
			$(this).addClass('current')
			})
			$('.submenu').mouseleave(function(){
				$(this).slideUp()
			})
			$('.email').click(function(){	
				$(this).addClass('current')
				$('.email-form').slideDown()
				$('.socialmedia-links').slideUp()
			})
			$('.social').click(function(){
				$(this).addClass('current')
				$('.socialmedia-links').slideDown()
				$('.email-form').slideUp()
			})
			
			$('.socialmedia-links').mouseleave(function(){
				$('.socialmedia-links').slideUp()
				$('.social').removeClass('current')
			})
			$('.email-form').mouseleave(function(){
				$('.email-form').slideUp()
				$('.email').removeClass('current')
			})
			$('.to-top').click(function(){
				$('html,body').animate({scrollTop:'0px'},700)
			})
			
			
			/* 
			$(window).scroll(function(){									
				if($(window).scrollTop() > 1000){
					$('#features').animate({"top": "0px"},800)	
			
				}				
			})			 */
			$('.slider-container,#features').mouseenter(function(){
				
			$('#features').stop(true).animate({"top": "0px"},800)	
			})
			
			$('.page-text').mouseenter(function(){
			
			$('#features').stop(true).animate({"top": "-500px"},100)	
			})
		
		$('a[href="#"]').click(function(e){
				e.preventDefault()
			})
})


		