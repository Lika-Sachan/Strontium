$('.st-testimonial-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: true,
//   autoplay: true,
  autoplayHoverPause:true, 
  autoplaySpeed: 4000,
  autoplayTimeout: 6000,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
})