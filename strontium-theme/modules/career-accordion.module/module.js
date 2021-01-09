$('.st-career-accordion__header').click(function(e){
  e.preventDefault();
  if (!$(this).hasClass('active')) {
    $('.st-career-accordion__header').removeClass('active');
    $('.st-career-accordion__content').slideUp(500);
    $(this).addClass('active');
    $(this).next('.st-career-accordion__content').slideDown(500);
  }
  else if (jQuery(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).next('.st-career-accordion__content').slideUp(500);
  }
});