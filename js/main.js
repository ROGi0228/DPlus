const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay:{
      delay: 10000,
    },
  
  });

  window.addEventListener('scroll', function() {


    var header = document.querySelector('header');
    
    
    header.classList.toggle('fixed', window.scrollY > 0);
    
    
    });

    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.navigation-link_mobile');
    menuBtn.addEventListener('click', function(){
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    })


$(function () {
	$(window).scroll(function() {
	    $('.catalog_card').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.about_us-wrapper').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInLeft");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.сardRight').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInRight");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.сardLeft').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInLeft");
	        }
	    });
	});
})
