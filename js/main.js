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

