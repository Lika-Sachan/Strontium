$('.st-client-slider').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 10,
    nav: false, 
    dots:true,
    autoplay: true,  
    autoplayHoverPause:true, 
    slideTransition: 'linear',
    autoplaySpeed: 6000,
    autoplayTimeout: 6000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});