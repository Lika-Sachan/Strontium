$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('a').on('click', function(){
   var target = $(this).attr('rel');
   $("#"+target).css("display", "block").siblings(".st-team__slider-wrapper").hide();
});